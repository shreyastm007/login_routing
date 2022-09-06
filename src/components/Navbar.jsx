import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
      <Nav.Link>
      <Link to="/">Home </Link>
      </Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
      <Nav.Link eventkey="link-1">
      <Link to="/login">Login </Link>
      </Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
      <Nav.Link eventkey="link-2">
      <Link to="/signup">Signup </Link>
      </Nav.Link>
      </Nav.Item>



   
    </Nav>
  );
}
export default Navbar;
