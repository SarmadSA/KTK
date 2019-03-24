import React from 'react';
import Uploader from '../components/Uploader';
import Submit from '../components/Submit';
import {executeHttpPut} from "../services/ApiClient";
import {getJWT} from "../helpers/helperFunctions";
import {AUTHENTICATION_JWT} from "../resources/consts";

const SubmitPage = () => {

    const config = {
        headers: {
            'contentType': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + getJWT(AUTHENTICATION_JWT)
        }
    };

    const formInput = {
        title: "",
        description: "",
        age: "",
        country: "",
    };

    const handleTitleChange = (value) => {
        console.log("Title: " + value);
        formInput.title = value;
    };

    const handleDescriptionChange = (value) => {
        console.log("description: " + value);
        formInput.description = value;
    };

    const handleAgeChange = (value) => {
        console.log("age: " + value);
        formInput.age = value;
    };

    const handleCountryChange = (value) => {
        console.log("Country: " + value);
        formInput.country = value;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting: " + formInput);
        executeHttpPut("http://localhost:8080/listing/add", formInput, config, onSubmitSuccess, onSubmitFailure);
    };

    const onSubmitSuccess = () => {
        console.log("Successfully submitted!")
    };

    const onSubmitFailure = () => {
        console.log("Submit failure!")
    };

    return (
        <div>
            <Uploader/>
            <Submit
                handleTitleChange={(e) => handleTitleChange(e.target.value)}
                handleDescriptionChange={(e) => handleDescriptionChange(e.target.value)}
                handleAgeChange={(e) => handleAgeChange(e.target.value)}
                handleCountryChange={(e) => handleCountryChange(e.target.value)}
                handleFormSubmit={(e) => handleFormSubmit(e)}
            />
        </div>
    );
};

export default SubmitPage;