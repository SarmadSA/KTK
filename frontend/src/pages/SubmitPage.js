import React, {Component} from 'react';
import Uploader from '../components/Uploader';
import Alert from 'react-bootstrap/Alert';
import Submit from '../components/Submit';
import {executeHttpPost} from "../services/ApiClient";
import {getJWT} from "../helpers/helperFunctions";
import {AUTHENTICATION_JWT, CREATE_LISTING_API} from "../resources/consts";

class SubmitPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            receivedResponse: false,
            submitted: false,
            feedBackMessage: '',
            errors: []
        }
    }

//response.data.errors[i].defaultMessage
//response.data.errors[i].field
    formInput = {
        title: "",
        name: "",
        description: "",
        age: 1,
        country: ""
    };

    imageFile = {};

    //Error messages
    fieldErrors = {
        title: "",
        name: "",
        description: "",
        age: "",
        country: ""
    };

    mapErrorsToFields = () =>{
        const fieldErrors = this.fieldErrors;
        (this.state.errors).forEach(function(error) {
            console.log(error);
            switch (error.field) {
                case 'title':
                    if(fieldErrors.title === ""){
                        fieldErrors.title = error.defaultMessage;
                    }
                    break;
                case 'name':
                    if(fieldErrors.name === ""){
                        fieldErrors.name = error.defaultMessage;
                    }
                    break;
                case 'description':
                    if(fieldErrors.description === "") {
                        fieldErrors.description = error.defaultMessage;
                    }
                    break;
                case 'age':
                    fieldErrors.age = error.defaultMessage;
                    break;
                case 'country':
                    if(fieldErrors.country === ""){
                        fieldErrors.country = error.defaultMessage;
                    }
                    break;
            }
        });
    };

    clearFields = () =>{

    };

    resetFieldInput = () => {
        this.formInput.title = "";
        this.formInput.name = "";
        this.formInput.description = "";
        this.formInput.age = "";
        this.formInput.country = "";
        this.imageFile = {}
    };

    handleTitleChange = (value) => {
        console.log("Title: " + value);
        this.formInput.title = value;
    };

    handleNameChange = (value) => {
        console.log("Name: " + value);
        this.formInput.name = value;
    };

    handleDescriptionChange = (value) => {
        console.log("description: " + value);
        this.formInput.description = value;
    };

    handleAgeChange = (value) => {
        console.log("age: " + value);
        this.formInput.age = value;
    };

    handleCountryChange = (value) => {
        console.log("Country: " + value);
        this.formInput.country = value;
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting: " + this.formInput);

        const formData = new FormData();
        formData.append('file', this.imageFile);
        formData.append('properties', new Blob([JSON.stringify(this.formInput)], {
            type: "application/json"
        }));

        executeHttpPost(
            CREATE_LISTING_API,
            formData,
            this.getConfig(undefined),
            this.onSubmitSuccess,
            this.onSubmitFailure
        );
        //TODO - scroll to top
    };

    onSubmitSuccess = (url, response) => {
        console.log("Successfully submitted!");

        //TODO - clear fields Make all fields empty
        this.resetFieldInput();

        this.setState({
            receivedResponse: true,
            submitted: true,
            feedBackMessage: 'Successfully submitted!'
        });

        //if (response.data) {
        //    switch (response.status) {
        //        case 201:
        //            messages.push(response.data);
        //            break;
        //
        //        default:
        //            messages.push("");
        //            break;
        //    }
        //}

    };

    onSubmitFailure = (url, response) => {
        console.log("Submit failure!");

        this.setState({
            receivedResponse: true,
            submitted: false
        });

        switch (response.status) {
            //unauthorized
            case 401:
                this.setState({feedBackMessage: "You need to be logged in to submit!"});
                console.log(this.state.errors);
                break;
            case 400: //Error/errors
                this.setState({
                    feedBackMessage:'Could not submit, please fix the errors below!',
                    errors: response.data.errors
                });
                this.mapErrorsToFields();
                //response.data.errors.map((error, idx) => (messages.push(error.defaultMessage)));
                break;
            case 409: //Image error (conflict), image file empty or something wrong with the imag
                break;
        }


        //TODO - check if unauthorized
        //if(response.statuse)
//
        ////TODO - check if other errors
        //response.data.errors.map((error, idx) => (messages.push(error.defaultMessage)));
        //console.log(messages);

    };


    handleImageChange = (images) => {
        console.log("Image info: ");
        console.log(images[0]);
        this.imageFile = images[0];
    };


    getConfig = (contentType) => {
        return {
            headers: {
                'contentType': contentType,
                'Authorization': 'Bearer ' + getJWT(AUTHENTICATION_JWT)
            }
        };
    };

    showFeedBackMessage = () => {
        if (this.state.receivedResponse) {
            if(this.state.submitted){
                return (
                    <Alert key={1} variant='success'>
                        { this.state.feedBackMessage }
                    </Alert>
                );
            } else {
                return (
                    <Alert key={1} variant='danger'>
                        { this.state.feedBackMessage }
                    </Alert>
                );
            }
        }
    };

    handleTitleError = () => {
        return this.fieldErrors.title;
    };

    handleNameError = () => {
        return this.fieldErrors.name;
    };

    handleDescriptionError = () => {
        return this.fieldErrors.description;
    };

    handleAgeError = () => {
        return this.fieldErrors.age;
    };

    handleCountryError = () => {
        return this.fieldErrors.country;
    };

    render() {
        return (
            <div>
                { this.showFeedBackMessage() }
                <Uploader handleImageChange={(e) => this.handleImageChange(e)}/>
                <Submit
                    handleTitleChange={(e) => this.handleTitleChange(e.target.value)}
                    handleNameChange={(e) => this.handleNameChange(e.target.value)}
                    handleDescriptionChange={(e) => this.handleDescriptionChange(e.target.value)}
                    handleAgeChange={(e) => this.handleAgeChange(e.target.value)}
                    handleCountryChange={(e) => this.handleCountryChange(e.target.value)}
                    handleFormSubmit={(e) => this.handleFormSubmit(e)}

                    //Error handling
                    handleTitleError = { this.handleTitleError() }
                    handleNameError = { this.handleNameError() }
                    handleDescriptionError = { this.handleDescriptionError() }
                    handleAgeError = { this.handleAgeError() }
                    handleCountryError = { this.handleCountryError() }
                />
            </div>
        );
    }
}

export default SubmitPage;