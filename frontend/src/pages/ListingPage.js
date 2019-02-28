import React from 'react';
import Bg from '../components/bg';
import Nav from '../components/navbar';
import ListingComponent from '../components/ListingComponent';

const ListingPage = () =>{
    return (<div className="surround">
                <Bg/>
                <div className="listingComp">
                <ListingComponent/>
                </div>
            </div>);
};

export default ListingPage;