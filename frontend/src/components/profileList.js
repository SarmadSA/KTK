import React from 'react';
import ListingRowRendererP from '../utils/ListingRowRendererProfile';
import Container from 'react-bootstrap/Container';


const profileList = () => {
    const numberOfCards = 9; //get this number from props
    return (
        <Container className='pListC'>
            <h3>My Uploads</h3>
            <ListingRowRendererP number = {numberOfCards}/>
        </Container>
        );
};
export default profileList;
