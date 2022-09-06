import React, { useState } from "react";
import{useNavigate} from "react-router-dom";
const a = RegExp(/^ [a-zA-Z0-9] + @[a-zA-Z0-9] + \.[A-Za-z] +$/)

const Login = () => {
    const [loginData, setLoginData]= useState({
        email:"",
        password:"",
    });

    let navigate= useNavigate();

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]:e.target.value,
        });
    };
    

    const handleSubmit =(e)=>{
        e.preventDefault();
      if(loginData.email==="" || loginData.password===""){

        alert("enter the data ")}
        else{
            console.log(loginData);

      }
    };

    const redirect=() => {
        navigate("/signup");
    };
  return (
    <div className='container border mt-3'>
    <form onSubmit={handleSubmit}> 
    <div className="mb-3">
        <label htmlFor="#" className="form-label">
         Email address 
         </label>
        <input 
        type="email" 
        name="email" 
        className="form-control"
        onChange={handleChange}
            value={loginData.email}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="#" className="form-label">
         Password 
         </label>
        <input 
        type="password" 
        name="password" 
        className="form-control"
        onChange={handleChange}
            value={loginData.password}
        />
        </div>

        <button type="submit" className="btn btn-primary"> Submit</button>
        <h5 style={{cursor:"pointer"}} onClick={redirect}>
        don't have an account ?  Signup here!
        </h5>

    </form>
    </div>
  );
};

export default Login;
