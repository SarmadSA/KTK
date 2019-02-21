import React, { Component } from 'react';
import './App.css';
import './css/Global.css';
import { Router } from 'react-router-dom';
import History from './utils/History';
import Routes from './components/Routes';
import Footer from './components/Footer';
import Nav from './components/navbar'

class App extends Component {
    render() {
        return (
                <Router history={History}>
                    <div className="App">
                        <Nav/>
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