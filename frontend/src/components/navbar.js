import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/nav.css';
import {getTokenExpirationDate, goToPage} from "../helpers/helperFunctions";
import Collapsible from 'react-collapsible';
import SignIn from '../components/SignIn';
import {getJWT, removeJWT} from "../helpers/helperFunctions";
import {AUTHENTICATION_JWT, EXPLORE_PAGE, PROFILE_PAGE, SIGNUP_PAGE} from "../resources/consts";
import LogIn from './LogIn';

class navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navExpanded: false
        };
    }

    handleSignUpClick = () => {
        goToPage(SIGNUP_PAGE);
    };

    handleProfileClick = () => {
        goToPage(PROFILE_PAGE + '/:id');
    };

    handleLogoutClick = () => {
        removeJWT(AUTHENTICATION_JWT);
        goToPage(EXPLORE_PAGE);
        //window.location.replace("http://localhost:3000/explore");
    };

    setNavExpanded = (expanded) =>{
        this.setState({ navExpanded: expanded });
    };

    closeNav = () => {
        this.setState({ navExpanded: false });
    };

    renderAuthenticationProperties = () => {
        const token = getJWT(AUTHENTICATION_JWT);
        if(token && getTokenExpirationDate(token) > Date.now()){
            return(
                <Navbar.Text className="navFont">
                    <button className="btn" onClick={()=>{this.handleProfileClick(); this.closeNav();}}>Profile</button>
                    <button className="btn" onClick={()=>{this.handleLogoutClick(); this.closeNav();}}>Logout</button>
                </Navbar.Text>
            );
        } else {
            return(
                <Navbar.Text className="navFont navLog">
                <button className="btn" onClick={()=>{this.handleSignUpClick(); this.closeNav();}}>Get Started</button>
                    <Collapsible triggerTagName="Navbar.Text" trigger="Login">
                    <LogIn handleCloseClick={this.closeLoginWindow}/>
                    </Collapsible>
                </Navbar.Text>

            );
        }
    };


    contentToRender = () => {
        if (window.location.pathname.split("/").pop() !== "") {
            return (
                <Navbar className="greenBck nav" collapseOnSelect expand="lg"
                onToggle={this.setNavExpanded}
                expanded={this.state.navExpanded}>
                    <Navbar.Brand onClick={()=>{goToPage('/explore'); this.closeNav();}}>
                        <img
                            alt=""
                            src={require("../logo.png")}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' Kids For Kids'}
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="navFont" onClick={()=>{goToPage('/explore'); this.closeNav();}}>Explore</Nav.Link>
                            <Nav.Link className="navFont" onClick={()=>{goToPage('/submit'); this.closeNav();}}>Submit</Nav.Link>
                            <Nav.Link className="navFont" onClick={()=>{goToPage('/about'); this.closeNav();}}>About</Nav.Link>
                        </Nav>
                            {this.renderAuthenticationProperties()}
                    </Navbar.Collapse>
                </Navbar>
            );
        } else {
            return (<div/>);
        }
    };

    render() {
        return (
            <div>
                {this.contentToRender()}
            </div>
        );
    }
}

export default navbar;
