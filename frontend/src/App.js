import React, { Component } from 'react';
import './App.css';
import Submitandexplore from './components/Submitandexplore'
import Bg from './components/bg'
import Navbar from './components/navbar'

class App extends Component {

            
   render() {
        
            function handleExplore(){
                //redirect 
            }
            
        return (
                <div className="App">
                    <Navbar/>
                    <Bg/>
                    <Submitandexplore handleExploreBtn={handleExplore}/>
                </div>
                );
    }
};

export default App;