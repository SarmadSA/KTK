import axios from 'axios';

export function executeHttpGet(url, onSuccess, onFailure){
    console.log("Sending GET request to: " + url);
    axios.get(url)
        .then(function(response){
            console.log("Request successful");
            console.log("Response from server is: ");
            console.log(response);
            onSuccess(url, response);
        })
        .catch(function(error){
            console.log("Request Fail");
            console.log("Response from server is: ");
            console.log(error.response);
            onFailure(url, error.response);
        });
}

export function executeHttpPost(url, apiCallParams, onSuccess, onFailure){
    console.log("Sending POST request to: " + url);
    console.log("Payload: ");
    console.log(apiCallParams);
    axios.post(url, apiCallParams, {headers:{"contentType":"application/json; charset=UTF-8"}})
        .then(function(response){
            console.log("Request successful");
            console.log("Response from server is: ");
            console.log(response);
            onSuccess(url, response);
        })
        .catch(function(error){
            console.log("Request Fail");
            console.log("Response from server is: ");
            console.log(error.response);
            onFailure(url, error.response);
        });
}

export function executeHttpPut(url, apiCallParams, onSuccess, onFailure){
    console.log("Sending PUT request to: " + url);
    console.log("Payload: ");
    console.log(apiCallParams);
    axios.put(url, apiCallParams, {headers:{"contentType":"application/json; charset=UTF-8"}})
        .then(function(response){
            console.log("Request successful");
            console.log("Response from server is: ");
            console.log(response);
            onSuccess(url, response);
        })
        .catch(function(error){
            console.log("Request Fail");
            console.log("Response from server is: ");
            console.log(error.response);
            onFailure(url, error.response);
        });
}