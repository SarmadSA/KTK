import React, { Component } from 'react';
        import Navbar from 'react-bootstrap/Navbar'
        import Nav from 'react-bootstrap/Nav'


        const navbar = () => {
return (
<Navbar bg="dark" collapseOnSelect expand="lg" variant="dark">
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
            <Nav.Link href="#explore">Explore</Nav.Link>
            <Nav.Link href="#submit">Submit</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Navbar.Text>
            Signed in as: <a href= "#login">Mark Otto</a>
        </Navbar.Text>
            <img
            alt=""
            src={require("../img/profile.png")}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />
    </Navbar.Collapse>
</Navbar>
        );
        };
        export default navbar;
