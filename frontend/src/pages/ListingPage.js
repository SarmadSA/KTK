import React from 'react';
import Nav from '../components/navbar';
import ListingP from '../components/ListingP';

const ListingPage = () => {
    return (
        <div className="surround">
            <Nav/>
            <ListingP/>
        </div>
    );
};

export default ListingPage;