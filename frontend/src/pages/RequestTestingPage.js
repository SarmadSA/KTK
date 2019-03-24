import React, {Component} from 'react';
import {executeHttpGet} from "../services/ApiClient";
import {getJWT} from '../helpers/helperFunctions';
import {AUTHENTICATION_JWT} from '../resources/consts';

export default class RequestTestingPage extends Component {
    constructor(props) {
        super(props)
    }

    config = {
        headers: {'Authorization': 'Bearer ' + getJWT(AUTHENTICATION_JWT)}
    };

    handleSubmit = (e) => {
        e.preventDefault();
        executeHttpGet('http://localhost:8080/address/list', this.config, this.onSubmittingSuccess, this.onSubmittingFailure)
    };

    onSubmittingSuccess = (url, response) => {
        console.log(this.config);
    };

    onSubmittingFailure = (url, response) => {
        console.log(this.config);
    };

    render() {
        const style = {
            position: 'absolute',
            top: '20%'
        };

        return (
            <div style={style}>
                <button onClick={this.handleSubmit}>Get all addresses</button>
            </div>
        );
    }
};
