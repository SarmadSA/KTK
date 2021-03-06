import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/nav.css';
import {goToPage, isExpiredToken} from "../helpers/helperFunctions";
import Collapsible from 'react-collapsible';
import SignIn from './SignIn';
import {getJWT, removeJWT} from "../helpers/helperFunctions";
import {AUTHENTICATION_JWT, EXPLORE_PAGE, PROFILE_PAGE, SIGNUP_PAGE} from "../resources/consts";
import LogIn from './LogIn';

class navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navExpanded: false,
            loginVisible: false,
            width: 0,
            height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    handleSignUpClick = () => {
        goToPage(SIGNUP_PAGE);
    };
    
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
    
    getMobileLogin = () =>{
        return(<div className="navbar-text">
               <button className="btn" onClick={()=>{this.handleSignUpClick(); this.closeNav();}}>Get Started</button>
               <button className="btn" onClick={()=>{this.handleLoginClick(); this.closeNav();}}>Login</button>
               </div>)
    };
    
    getDesktopLogin = () =>{
        return(<div>
        <button className="btn" onClick={()=>{this.handleSignUpClick(); this.closeNav();}}>Get Started</button>
        <Collapsible triggerTagName="Navbar.Text" trigger="Login">
        <LogIn handleCloseClick={this.closeLoginWindow}/>
        </Collapsible>
        </div>)
    };

    renderAuthenticationProperties = () => {
        const token = getJWT(AUTHENTICATION_JWT);
        if(token && !isExpiredToken(token)){
            return(
                <Navbar.Text className="navFont">
                    <button className="btn" onClick={()=>{this.handleProfileClick(); this.closeNav();}}>Profile</button>
                    <button className="btn" onClick={()=>{this.handleLogoutClick(); this.closeNav();}}>Logout</button>
                </Navbar.Text>
            );
        } else {
            return(
                <Navbar.Text className="navFont navLog">
                {(this.state.width < 992) ? this.getMobileLogin() : this.getDesktopLogin()}
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
                            src={require("../logo.gif")}
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
