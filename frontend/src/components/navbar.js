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
            loginVisible: false,
            navExpanded: false
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

    setNavExpanded = (expanded) =>{
        this.setState({ navExpanded: expanded });
    };

    closeNav = () => {
        this.setState({ navExpanded: false });
    };
    

    contentToRender = () => {
        if (window.location.pathname.split("/").pop() !== "") {
            return (
                <Navbar className="greenBck nav" collapseOnSelect expand="lg"
                onToggle={this.setNavExpanded}
                expanded={this.state.navExpanded}>
                    <Navbar.Brand onClick={()=>goToPage('')}>
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
                            <Nav.Link className="navFont" onClick={()=>{goToPage('/explore'); this.closeNav();}}>Explore</Nav.Link>
                            <Nav.Link className="navFont" onClick={()=>{goToPage('/submit'); this.closeNav();}}>Submit</Nav.Link>
                            <Nav.Link className="navFont" onClick={()=>{goToPage('/about'); this.closeNav();}}>About</Nav.Link>
                        </Nav>
                        <Navbar.Text className="navFont">
                            <button className="btn" onClick={()=>{this.handleLoginClick(); this.closeNav();}}>Log In</button>
                            <button className="btn" onClick={()=>{this.handleSignUpClick(); this.closeNav();}}>Sign Up</button>
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
