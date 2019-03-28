import React from 'react';
import Uploader from '../components/Uploader';
import Submit from '../components/Submit';
import {executeHttpPost} from "../services/ApiClient";
import {getJWT} from "../helpers/helperFunctions";
import {AUTHENTICATION_JWT, CREATE_LISTING_API} from "../resources/consts";

const SubmitPage = () => {

    const formInput = {
        title: "",
        name: "",
        description: "",
        age: "",
        country: ""
    };

    let imageFile = {};

    const handleTitleChange = (value) => {
        console.log("Title: " + value);
        formInput.title = value;
    };

    const handleNameChange = (value) => {
        console.log("Name: " + value);
        formInput.name = value;
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

        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('properties', new Blob([JSON.stringify(formInput)], {
            type: "application/json"
        }));

        executeHttpPost(
            CREATE_LISTING_API,
            formData,
            getConfig(undefined),
            onSubmitSuccess,
            onSubmitFailure
        );
    };

    const onSubmitSuccess = () => {
        console.log("Successfully submitted!")
    };

    const onSubmitFailure = () => {
        console.log("Submit failure!");
    };


    const handleImageChange = (images) => {
        console.log("Image info: ");
        console.log(images[0]);
        imageFile = images[0];
    };


    const getConfig = (contentType) => {
        return {
            headers: {
                'contentType': contentType,
                'Authorization': 'Bearer ' + getJWT(AUTHENTICATION_JWT)
            }
        };
    };

    return (
        <div>
            <Uploader handleImageChange={(e) => handleImageChange(e)}/>
            <Submit
                handleTitleChange={(e) => handleTitleChange(e.target.value)}
                handleNameChange={(e) => handleNameChange(e.target.value)}
                handleDescriptionChange={(e) => handleDescriptionChange(e.target.value)}
                handleAgeChange={(e) => handleAgeChange(e.target.value)}
                handleCountryChange={(e) => handleCountryChange(e.target.value)}
                handleFormSubmit={(e) => handleFormSubmit(e)}
            />
        </div>
    );
};

export default SubmitPage;