import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/nav.css';
import {goToPage} from "../helpers/helperFunctions";
import SignIn from '../components/SignIn';

class navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginVisible: false
        };
    }

    setLoginClass = () =>{
        if (this.state.loginVisible) {
            return 'visible';
        } else {
            return '';
        }
    };

    handleLoginClick = () => {
        this.setState({loginVisible: true});
    };

    closeLoginWindow = () => {
        this.setState({loginVisible: false});
    };

    handleSignUpClick = () => {
        goToPage('/signup');
    };


    contentToRender = () => {
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
                            <button className="btn" onClick={this.handleLoginClick}>Log In</button>
                            <button className="btn" onClick={this.handleSignUpClick}>Sign Up</button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            );
        } else {
            return (<div></div>)
        }
    };

    render() {
        return (
            <div>
                <SignIn
                    handleCloseClick={this.closeLoginWindow}
                    otherClasses={this.setLoginClass()}
                />
                {this.contentToRender()}
            </div>
        );
    }
}

export default navbar;
