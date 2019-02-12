import React from 'react';
import Nav from '../components/navbar';
import List from '../components/list';
import Dropdown from '../components/Dropleft';
import Text from '../components/text';

const LandingPage = () => {
    return (<div className="surround">
        <Nav/>
        <Text/>
        <hr/>
        <Dropdown/>
        <List/>
    </div>);
};


export default LandingPage;