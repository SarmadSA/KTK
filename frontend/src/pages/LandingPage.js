import React from 'react';
import Bg from '../components/bg';
import Submitandexplore from '../components/Submitandexplore';
import History from '../utils/History';


const goToPage = (path) =>{
    History.push(path);
};

const LandingPage = () => {
    return (<div className="surround">
        <Bg otherClasses={"breath"}/>
        <Submitandexplore
            handleExploreBtn={ ()=> goToPage('/explore') }
            handleSubmitBtn={ ()=> goToPage('/submit') }
        />
    </div>);
};


export default LandingPage;