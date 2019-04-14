import React, {Component} from 'react';
import Signup from '../components/SignUp';
import Col from 'react-bootstrap/Col';
import {executeHttpPut} from '../services/ApiClient';
import {CREATE_USER_API} from "../resources/consts";
import Alert from "react-bootstrap/Alert";
import LoadingCube from "../components/LoadingCube";
import {goToPage} from "../helpers/helperFunctions";

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showFeedbackMessage: false,
            submitting: false,
            successfullySubmitted: false,
            feedBackMessage: '',
            errors: []
        }
    }

    formInput = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        country: ""
    };

    //Error messages
    fieldErrors = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        country: ""
    };

    mapErrorsToFields = () => {
        const fieldErrors = this.fieldErrors;
        (this.state.errors).forEach(function (error) {
            switch (error.field) {
                case 'firstName':
                    if (fieldErrors.firstName === "") {
                        fieldErrors.firstName = error.defaultMessage;
                    }
                    break;
                case 'lastName':
                    if (fieldErrors.lastName === "") {
                        fieldErrors.lastName = error.defaultMessage;
                    }
                    break;
                case 'email':
                    if (fieldErrors.email === "") {
                        fieldErrors.email = error.defaultMessage;
                    }
                    break;
                case 'country':
                    if (fieldErrors.country === "") {
                        fieldErrors.country = error.defaultMessage;
                    }
                    break;
                case 'password':
                    if (fieldErrors.password === "") {
                        fieldErrors.password = error.defaultMessage;
                    }
                    break;
            }
        });
        this.forceUpdate();
    };

    resetFieldInput = () => {
        this.formInput.firstName = "";
        this.formInput.lastName = "";
        this.formInput.email = "";
        this.formInput.password = "";
        this.formInput.country = "";
    };

    handleFromSubmit = (e) => {
        e.preventDefault();
        this.setState({submitting: true});
        executeHttpPut(CREATE_USER_API, this.formInput, {}, this.onSubmittingSuccess, this.onSubmittingFailure);
    };

    onSubmittingSuccess = (url, response) => {
        console.log("Successfully registered!");

        this.resetFieldInput();

        this.setState({
            showFeedbackMessage: true,
            successfullySubmitted: true,
            submitting: false,
            feedBackMessage: 'Successfully registered!'
        });


    };

    onSubmittingFailure = (url, response) => {
        console.log("Submit failure!");

        this.setState({
            showFeedbackMessage: true,
            submitting: false,
            successfullySubmitted: false
        });

        if (!response.status) {
            //Network error
            this.setState({feedBackMessage: "Could not reach server, please try again later!"});
        } else {
            switch (response.status) {
                case 400: //Error or errors
                    this.setState({
                        feedBackMessage: 'Could not register, please fix the errors below!',
                        errors: response.data.errors
                    });
                    this.mapErrorsToFields();
                    break;
                case 500:// parsing problem
                    this.setState({feedBackMessage: "Something went wrong, Please try again later!"});
                    break;
            }
        }
    };

    handleNameChange = (value) => {
        console.log("name: " + value);
        this.formInput.firstName = value;
    };

    handleLastNameChange = (value) => {
        console.log("Last name: " + value);
        this.formInput.lastName = value;
    };

    handleEmailChange = (value) => {
        console.log("Email: " + value);
        this.formInput.email = value;
    };

    handlePasswordChange = (value) => {
        console.log("Password: " + value);
        this.formInput.password = value;
    };

    handleCountryChange = (value) => {
        console.log("Country: " + value);
        this.formInput.country = value;
    };

    showFeedBackMessage = () => {
        if (this.state.showFeedbackMessage) {
            const alertStyle = {
                width: '50%',
                display: 'inline-block'
            };
            if (this.state.successfullySubmitted) {
                return (
                    <Alert key={1} variant='success' style={alertStyle}>
                        {this.state.feedBackMessage}
                    </Alert>
                );
            } else {
                return (
                    <Alert key={1} variant='danger' style={alertStyle}>
                        {this.state.feedBackMessage}
                    </Alert>
                );
            }
        }
    };

    renderContent = () =>{
        if (!this.state.submitting) {

            const style = {
                marginTop: '30px',
                textAlign: 'center'
            };

            return (
                <div style={style}>
                    {this.showFeedBackMessage()}
                    <div className="surround">
                        <Col xs={12} md={10} lg={4} className="signUpBox">
                            <Signup
                                handleNameChange={(e) => this.handleNameChange(e.target.value.trim())}
                                handleLastNameChange={(e) => this.handleLastNameChange(e.target.value.trim())}
                                handleEmailChange={(e) => this.handleEmailChange(e.target.value.trim())}
                                handlePasswordChange={(e) => this.handlePasswordChange(e.target.value)}
                                handleCountryChange={(e) => this.handleCountryChange(e.target.value)} //(e.target.options[e.target.options.selectedIndex].innerText) to get country text. Proud that I did this crap to get the selected text instead of the value
                                handleFormSubmit={(e) => this.handleFromSubmit(e)}

                                defalutValues = {this.formInput}
                                fieldErrors = {this.fieldErrors}
                            />
                        </Col>
                    </div>
                </div>
            );
        } else {
            const style = {marginTop:'20%'};
            return (
                <div style={style}>
                    <LoadingCube style={style}/>
                    Registering, Please wait...
                </div>
            );
        }
    };

    render() {
        return (
            this.renderContent()
        );
    }
};