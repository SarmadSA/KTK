import React from "react";
import {Route, Switch} from "react-router-dom";
import ListingPage from "../pages/ListingPage";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";
import ExplorePage from "../pages/ExplorePage";

const Routes = () =>{
    return(
        <Switch>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/contact" exact component={AboutPage}/>
            <Route path="/Listing/:id" exact component={ListingPage}/>
            <Route path="/home" exact component={ExplorePage}/>
            <Route path="/explore" exact component={ExplorePage}/>
            <Route path="/" exact component={LandingPage}/>
            <Route render={()=> <NotFoundPage/>}/>
        </Switch>
    );
};

export default Routes;