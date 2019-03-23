import React from "react";
import {Route, Switch} from "react-router-dom";
import ListingPage from "../pages/ListingPage";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";
import ExplorePage from "../pages/ExplorePage";
import SignUpPage from "../pages/SignUpPage";
import ProfilePage from "../pages/ProfilePage";
import ProfileEditPage from "../pages/ProfileEditPage";
import SignIn from './SignIn';
import Submit from '../pages/SubmitPage';
import Purchase from '../pages/Purchase';
import PurchaseHistory from '../pages/PurchaseHistory';
import ManageAccount from '../pages/ManageAccount';
import RequestTestingPage from '../pages/RequestTestingPage';

const Routes = () =>{
    return(
        <Switch>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/submit" exact component={Submit}/>
            <Route path="/signin" exact component={SignIn}/>
            <Route path="/contact" exact component={AboutPage}/>
            <Route path="/signup" exact component={SignUpPage}/>
            <Route path="/listing/:id" exact component={ListingPage}/>
            <Route path="/home" exact component={ExplorePage}/>
            <Route path="/explore" exact component={ExplorePage}/>
            <Route path="/profile/:id" exact component={ProfilePage}/>
            <Route path="/profileedit/:id" exact component={ProfileEditPage}/>
            <Route path="/purchase/:id" exact component={Purchase}/>
            <Route path="/purchasehistory/:id" exact component={PurchaseHistory}/>
            <Route path="/manageaccount/:id" exact component={ManageAccount}/>
            <Route path="/requests" exact component={RequestTestingPage}/>
            <Route path="/" exact component={LandingPage}/>
            <Route render={()=> <NotFoundPage/>}/>
        </Switch>
    );
};

export default Routes;