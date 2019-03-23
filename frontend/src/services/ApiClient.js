import axios from 'axios';

export function executeHttpGet(url, config, onSuccess, onFailure) {
    console.log("Sending GET request to: " + url);
    console.log("With config: " + config);
    axios.get(url, config)
        .then(function (response) {
            handleSuccessfulRequest(url, response, onSuccess);
        })
        .catch(function (error) {
            handleFailureRequest(url, error, onFailure);
        });
}

export function executeHttpPost(url, apiCallParams, onSuccess, onFailure) {
    console.log("Sending POST request to: " + url);
    console.log("Payload: ");
    console.log(apiCallParams);
    axios.post(url, apiCallParams, {headers: {"contentType": "application/json; charset=UTF-8"}})
        .then(function (response) {
            handleSuccessfulRequest(url, response, onSuccess);
        })
        .catch(function (error) {
            handleFailureRequest(url, error, onFailure);
        });
}

export function executeHttpPut(url, apiCallParams, onSuccess, onFailure) {
    console.log("Sending PUT request to: " + url);
    console.log("Payload: ");
    console.log(apiCallParams);
    axios.put(url, apiCallParams, {headers: {"contentType": "application/json; charset=UTF-8"}})
        .then(function (response) {
            handleSuccessfulRequest(url, response, onSuccess);
        })
        .catch(function (error) {
            handleFailureRequest(url, error, onFailure);
        });
}


/* --- Helpers --- */

function handleSuccessfulRequest(url, response, onSuccess){
    if (response) {
        console.log("Request successful");
        console.log("Response from server is: ");
        console.log(response);
        onSuccess(url, response);
    }
}

function handleFailureRequest(url, error, onFailure){
    if (error && error.response) {
        console.log("Request Fail");
        console.log("Response from server is: ");
        console.log(error.response);
        onFailure(url, error.response);
    } else if (!error.status) {
        console.log("Could not reach other server, server may be offline, please try again later!");
        onFailure(url, error);
    }
}