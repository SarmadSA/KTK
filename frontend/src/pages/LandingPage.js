import React from 'react';
import Bg from '../components/bg';
import Submitandexplore from '../components/Submitandexplore';
//import {gotToPage} from "../helpers/helperFunctions";

const LandingPage = () => {
    return (
        <div className="surround">
            <Bg otherClasses={"breath"}/>
            <Submitandexplore
            />
        </div>
    );
};


export default LandingPage;