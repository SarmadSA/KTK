import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {IoMdClose} from 'react-icons/io';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import '../css/signInn.css';
import {executeHttpPost} from "../services/ApiClient";

export default class SignIn extends Component {
    constructor(props){
        super(props)
    }

    formInput = {
        email:"",
        password:""
    };

    handleEmailChange = (value) =>{
        this.formInput.email = value;
        console.log("Email: " + value);
    };

    handlePasswordChange = (value) =>{
        this.formInput.password = value;
        console.log("Password: " + value);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        //executeHttpPost('http://localhost:8080/login', this.formInput, this.onSubmittingSuccess, this.onSubmittingFailure)
        console.log("logging in...");
    };

    onSubmittingSuccess = (url, response) =>{
        //Handle submitting success
        console.log("Success!!")
    };

    onSubmittingFailure = (url, response) =>{
        //Handle submitting failure
        console.log("Failure!!")
    };

    render() {
        return (
            <div className={'popup ' + this.props.otherClasses}>
                <div className='popup_inner'>
                    <h3>Log In</h3>
                    <button className="closePop" onClick={this.props.handleCloseClick}><IoMdClose/></button>
                    <Container>
                        <Form className="SignForm" method="POST">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" onChange={(e)=>this.handleEmailChange(e.target.value.trim())}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e)=>this.handlePasswordChange(e.target.value)}/>
                                <a className="signUp loginA" href="/url">Forgot password?</a>
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Remember me"/>
                            </Form.Group>
                            <Button variant="light" type="submit" onClick={this.handleSubmit}>Log in</Button>
                            <a className="signUp loginA" href="/url">Don't have an account?</a>
                        </Form>
                    </Container>
                </div>
            </div>
        );
    }
};
