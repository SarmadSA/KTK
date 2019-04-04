import React, {Component} from 'react';
import List from '../components/list';
import Dropdown from '../components/Dropleft';
import Text from '../components/text';
import {executeHttpGet} from "../services/ApiClient";
import {GET_LISTINGS_API} from "../resources/consts";
import LoadingCube from "../components/LoadingCube";

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            requestNetworkError: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        executeHttpGet(GET_LISTINGS_API, {}, this.onRequestSuccess, this.onRequestFailure);
    }

    onRequestSuccess = (url, response) => {
        if (response.data) {
            this.setState({data: response.data, isLoading: false})
        }
    };

    onRequestFailure = (url, response) => {
        //Handle failure, display error or something to user
        this.setState({isLoading: false});
        if (!response.status) {
            //Network error
            this.setState({requestNetworkError: true})
        } else {
            //Other error get it from response
        }
    };

    renderListings = () => {
        const style = {marginTop:'10%'};

        if (this.state.isLoading) {
            return (<LoadingCube style={style}/>);
        }
        if (this.state.data.length > 0) {
            return (<List data={this.state.data}/>)
        } else if (this.state.requestNetworkError) {
            return (<div style={style}>Could not reach server, server may be offline. Please try again later!</div>)
        } else {
            return (<div style={style}>No listings available!</div>)
        }
    };

    renderContent = () => {
        return (
            <div>
                <Text/>
                <hr/>
                <Dropdown/>
                {this.renderListings()}
            </div>
        );
    };

    render() {
        return (this.renderContent());
    }
};