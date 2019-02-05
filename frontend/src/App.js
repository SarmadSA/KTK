import React, { Component } from 'react';
import './App.css';
import Submitandexplore from './components/Submitandexplore'
import Bg from './components/bg'

        class App extends Component {
    render() {
        return (
                <div className="App">
                    <Bg/>
                    <Submitandexplore/>
                </div>
                );
    }
};

export default App;