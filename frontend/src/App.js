import React, { Component } from 'react';
import './App.css';
import './css/Global.css';
import { Router } from 'react-router-dom';
import History from './utils/History';
import Routes from './components/Routes';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <Router history={History}>
                <div className="App">
                    <main className="main">
                        <Routes />
                        <br className="clear"/>
                        <Footer/>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;