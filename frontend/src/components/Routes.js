import React from "react";
import {Route, Switch} from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import ListingPage from "../pages/ListingPage";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";


const Routes = () =>{
    return(
        <Switch>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/contact" exact component={ContactPage}/>
            <Route path="/Listing/:id" exact component={ListingPage}/>
            <Route path="/home" exact component={LandingPage}/>
            <Route path="/" exact component={LandingPage}/>
            <Route render={()=> <NotFoundPage/>}/>
        </Switch>
    );
};

export default Routes;