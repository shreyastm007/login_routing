import { useState } from 'react'
import React from "react";
import{useNavigate} from "react-router-dom";

function Signup() {
    const [signupData, setSignupData]= useState({
email:"",
name:"",
password:"",
confirmPassword:"",
});

let navigate=useNavigate();

const handleChange = (e) => {
    setSignupData({
        ...signupData,
        [e.target.name]:e.target.value,
    });
   
};
const handleSubmit =(e)=>{
    e.preventDefault();
   if(
    signupData.email==="" || 
   signupData.name==="" || 
   signupData.password==="" || 
   signupData.confirmPassword===""
   ){
   alert("enter the data ")}
   else{
       console.log(signupData);
       navigate("/login")//programmatically routing

 }
};
  return (
    
    <div className="container border mt-3">
        <h2> Sign Up </h2>
        <form onSubmit={handleSubmit}> 
        
        <div className="mb-3">
            <label htmlFor= "exampleInputEmail" className="form-label">
            Email address:
            </label>
            <input 
            type="email"
             name="email" 
             className="form-control"
            onChange={handleChange}
            value={signupData.email}
             />
        </div>
       
        <div className="mb-3">
            <label htmlFor= "exampleInputEmail" className="form-label">
            Enter the name:
            </label>
            <input 
            type="text" 
            name="name" 
            className="form-control"
            onChange={handleChange}
            value={signupData.name}
            />
        </div>
        
        <div className="mb-3">
            <label htmlFor= "exampleInputEmail" className="form-label">
            Password: 
            </label>
            <input 
            type="password" 
            name="password" 
            className="form-control"
            onChange={handleChange}
            value={signupData.password}
            />
        </div>

        <div className="mb-3">
            <label htmlFor= "exampleInputEmail" className="form-label">
            Confirm password
             </label>
            <input
             type="password" 
             name="confirmPassword"
            className="form-control"
            onChange={handleChange}
            value={signupData.confirmPassword}
            />
        </div>
        <button type="submit" className="btn btn-success">
            SUBMIT
        </button>
        
        </form>
    </div>
  )
}

export default Signup
