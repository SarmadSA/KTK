import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/nav.css';

const navbar = () => {
return (
<Navbar className="greenBck" collapseOnSelect expand="lg">
    <Navbar.Brand href="#explore">
        <img
            alt=""
            src={require("../logo.svg")}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />
        {' React Bootstrap'}
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link className="navFont" href="#explore">Explore</Nav.Link>
            <Nav.Link className="navFont" href="#submit">Submit</Nav.Link>
            <Nav.Link className="navFont" href="#about">About</Nav.Link>
        </Nav>
        <Navbar.Text className="navFont">
            <a href= "#login">Log In</a>
            <a>&nbsp;or&nbsp;</a>
            <a href= "#signup">Sign Up</a>
        </Navbar.Text>
    </Navbar.Collapse>
</Navbar>
        );
        };
        export default navbar;
