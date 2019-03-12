import React, {Component} from 'react';
import List from '../components/list';
import Dropdown from '../components/Dropleft';
import Text from '../components/text';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        }
    }

    componentDidMount() {

        this.setState({isLoading: true});

        //TODO check if data is fetched correctly before setting isLoading to false
        fetch("URL HERE")
            .then(response => response)
            .then(data => this.setState({listings : data, isLoading : false}))
    }

    renderContent = () => {
        const {listings, isLoading} = this.state; //listings is array of data containing all listing objects
        if (isLoading) {
            return <p>Loading..</p> //TODO replace this with isLoading animation component
        }
        else if (!isLoading) {
            return (
                <div>
                    <Text/>
                    <hr/>
                    <Dropdown/>
                    <List/>
                </div>
            );
        }
    };

    render() {
        return (this.renderContent());
    }
};