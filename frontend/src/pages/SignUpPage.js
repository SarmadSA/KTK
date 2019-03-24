import React, {Component} from 'react';
import Signup from '../components/SignUp';
import Col from 'react-bootstrap/Col';
import {executeHttpPut} from '../services/ApiClient';
import {CREATE_USER_API} from "../resources/consts";

export default class SignUp extends Component {

    constructor(props){
        super(props);
    }

    formInput = {
        firstName : "",
        lastName: "",
        email: "",
        password: "",
        country: ""
    };

    handleFromSubmit = (e) =>{
        e.preventDefault();
        executeHttpPut(CREATE_USER_API, this.formInput, {}, this.onSubmittingSuccess, this.onSubmittingFailure);
    };

    onSubmittingSuccess = (url, response) =>{
        //Handle submitting success
    };

    onSubmittingFailure = (url, response) =>{
        //Handle submitting failure
    };

    handleNameChange = (value) =>{
        console.log("name: " + value);
        this.formInput.firstName = value;
    };

    handleLastNameChange = (value) =>{
        console.log("Last name: " + value);
        this.formInput.lastName = value;
    };

    handleEmailChange = (value) =>{
        console.log("Email: " + value);
        this.formInput.email = value;
    };

    handlePasswordChange = (value) =>{
        console.log("Password: " + value);
        this.formInput.password = value;
    };

    handleCountryChange = (value) =>{
        console.log("Country: " + value);
        this.formInput.country = value;
    };

    render() {
        return (
            <div className="surround">
                <Col xs={12} md={4} lg={4} className="signUpBox">
                    <Signup
                        handleNameChange={ (e) => this.handleNameChange(e.target.value.trim()) }
                        handleLastNameChange={(e) => this.handleLastNameChange(e.target.value.trim()) }
                        handleEmailChange={ (e) => this.handleEmailChange(e.target.value.trim()) }
                        handlePasswordChange={ (e) => this.handlePasswordChange(e.target.value) }
                        handleCountryChange={ (e) => this.handleCountryChange(e.target.value) } //(e.target.options[e.target.options.selectedIndex].innerText) to get country text. Proud that I did this crap to get the selected text instead of the value
                        handleFormSubmit={ (e) => this.handleFromSubmit(e) }
                    />
                </Col>
            </div>
        );
    }
};