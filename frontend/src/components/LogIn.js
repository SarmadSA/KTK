import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {IoMdClose} from 'react-icons/io';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import querystring from 'querystring';
import base64 from "base-64";
import utf8 from "utf8";
import '../css/signInn.css';
import {executeHttpPost} from "../services/ApiClient";
import {getJWT, goToPage, isExpiredToken} from '../helpers/helperFunctions';
import {AUTHENTICATION_API, AUTHENTICATION_JWT} from '../resources/consts';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'password'
        };
        this.showHide = this.showHide.bind(this);
    }

    formInput = {
        email: "",
        password: ""
    };

    showHide(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'password' ? 'input' : 'password'
        });
    }

    handleEmailChange = (value) => {
        this.formInput.email = value;
        console.log("Email: " + value);
    };

    handlePasswordChange = (value) => {
        this.formInput.password = base64.encode(utf8.encode(value));
        console.log("Password: " + value);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        executeHttpPost(AUTHENTICATION_API, querystring.stringify(this.formInput), {}, this.onSubmittingSuccess, this.onSubmittingFailure)
    };

    onSubmittingSuccess = (url, response) => {
        switch (response.status) {
            case 200:
                const token = getJWT(AUTHENTICATION_JWT);
                if (!token || isExpiredToken(token)) {
                    if (response.data.token) {
                        const token = response.data.token;
                        localStorage.setItem(AUTHENTICATION_JWT, token);
                        console.log("Logged inn!");
                        //Close the login popup or refresh page or component
                        if(window.location.pathname === "/signup"){
                            window.location.href = "/explore";
                        } else {
                            window.location.reload();
                        }
                    } else {
                        console.log("Something went wrong, No JWT returned from server")
                    }
                } else {
                    console.log("Already logged inn");
                }
                break;
            case 401:
                console.log("Not logged inn!");
                break;
            default:
                console.log("Something went wrong");
        }

        console.log("Success!!")
    };

    onSubmittingFailure = (url, response) => {
        switch (response.status) {
            case 200:
                console.log("Logged inn!");
                // Save JWT on local storage
                break;
            case 401:
                console.log("Not logged inn!");
                break;
            default:
                console.log("Something went wrong");
        }
        console.log("Failure!!")
    }
    ;

    render() {
        return (
            <div>
                <Container>
                    <Form className="SignForm" method="POST">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email"
                                          onChange={(e) => this.handleEmailChange(e.target.value.trim())}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={this.state.type} className="password input" placeholder="Password"
                                          onChange={(e) => this.handlePasswordChange(e.target.value)}/>
                            <span className="password showpassLogin"
                                  onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
                            <a className="signUp loginA" href="/url">Forgot password?</a>
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>
                        <Button variant="light" type="submit" onClick={this.handleSubmit}>Log in</Button>
                    </Form>
                </Container>
            </div>
        );
    }
};
