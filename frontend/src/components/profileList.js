import React from 'react';
import ListingRowRendererP from '../utils/ListingRowRendererProfile';
import Container from 'react-bootstrap/Container';


const profileList = () => {
    const numberOfCards = 9; //get this number from props
    return (
        <Container>
            <ListingRowRendererP number = {numberOfCards}/>
        </Container>
        );
};
export default profileList;
