import React, { Component } from 'react';
import './App.css';
import './css/Global.css';
import { Router } from 'react-router-dom';
import History from './utils/History';
import Routes from './components/Routes';
import Footer from './components/Footer';
import Nav from './components/navbar';
import Signin from './components/SignIn';

class App extends Component {      
    
    displayNav(){
        if (window.location.pathname.split("/").pop() !== "") {
            return(<Nav/>);
        }
    }
    
    render() {
        return (
                <Router history={History}>
                    <div className="App">
                        {this.displayNav()}       
                        <main className="main">
                            <Routes />
                            <div className="clear"/>
                        </main>
                        <Footer/>
                    </div>
                </Router>
                );
    }
}

export default App;