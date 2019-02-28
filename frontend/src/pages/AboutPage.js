import React from 'react';
import About from '../components/about';
import Bg from '../components/bg';



const AboutPage = () =>{
    return (<div className="surround">
                <Bg/>
                <div  className="about">
                <About/>
                </div>
            </div>);
};

export default AboutPage;