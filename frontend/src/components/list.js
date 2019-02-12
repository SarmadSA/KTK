import React from 'react';
import ListingRowRenderer from '../utils/ListngRowRenderer';
import Container from 'react-bootstrap/Container';


const list = () => {
    const numberOfCards = 9; //get this number from props
    return (
        <Container>
            <ListingRowRenderer number = {numberOfCards}/>
        </Container>
        );
};
export default list;
