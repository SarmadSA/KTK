import React from "react";
import {Route, Switch} from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import ListingPage from "../pages/ListingPage";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";
import ExplorePage from "../pages/ExplorePage";
import SignUp from "../pages/SignUp";

const Routes = () =>{
    return(
        <Switch>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/contact" exact component={ContactPage}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/Listing/:id" exact component={ListingPage}/>
            <Route path="/home" exact component={ExplorePage}/>
            <Route path="/explore" exact component={ExplorePage}/>
            <Route path="/" exact component={LandingPage}/>
            <Route render={()=> <NotFoundPage/>}/>
        </Switch>
    );
};

export default Routes;