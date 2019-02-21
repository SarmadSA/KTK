import React from "react";
import {Route, Switch} from "react-router-dom";
import ListingPage from "../pages/ListingPage";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";
import ExplorePage from "../pages/ExplorePage";
import SignUp from "../pages/SignUp";
import ProfilePage from "../pages/ProfilePage";

const Routes = () =>{
    return(
        <Switch>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/contact" exact component={AboutPage}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/listing/:id" exact component={ListingPage}/>
            <Route path="/home" exact component={ExplorePage}/>
            <Route path="/explore" exact component={ExplorePage}/>
            <Route path="/profile/:id" exact component={ProfilePage}/>
            <Route path="/" exact component={LandingPage}/>
            <Route render={()=> <NotFoundPage/>}/>
        </Switch>
    );
};

export default Routes;