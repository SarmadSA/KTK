import React from 'react';
import Bg from '../components/bg';
import Submitandexplore from '../components/Submitandexplore';
import {goToPage} from "../helpers/helperFunctions";

const LandingPage = () => {
    return (
            <div>
                <Bg otherClasses={"breath"}/>
                <Submitandexplore
                    handleExploreBtn={ () => goToPage('/explore') }
                    handleSubmitBtn={ () => goToPage('/submit') }
                    />
            </div>
            );
};


export default LandingPage;