import React from 'react';
import ListingRowRenderer from '../utils/ListngRowRenderer';
import Container from 'react-bootstrap/Container';


const list = (props) => {
    return (
        <Container>
            <ListingRowRenderer data={props.data} number={props.data.length}/>
        </Container>
    );
};

export default list;