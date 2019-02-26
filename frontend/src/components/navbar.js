import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/nav.css';
import {gotToPage} from "../helpers/helperFunctions";
import SignIn from '../components/SignIn';

const navbar = () => {
    const handleLoginClick =()=>{
        //display signIn
    };

    const handleSignUpClick =()=>{
        gotToPage('/signup');
    };


    const contentToRender = () =>{
        if (window.location.pathname.split("/").pop() !== "") {
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
                    <Navbar.Toggle/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="navFont" href="#explore">Explore</Nav.Link>
                            <Nav.Link className="navFont" href="#submit">Submit</Nav.Link>
                            <Nav.Link className="navFont" href="#about">About</Nav.Link>
                        </Nav>
                        <Navbar.Text className="navFont">
                            <button className="btn" onClick={handleLoginClick}>Log In</button>
                            <button className="btn" onClick={handleSignUpClick}>Sign Up</button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
        else{
            return(<div></div>)
        }
    };

    return (
        <div>
            {contentToRender()}
        </div>
    );
};
export default navbar;
