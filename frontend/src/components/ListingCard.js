import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Flag from 'react-world-flags';
import '../css/card.css';
import {goToPage} from "../helpers/helperFunctions";

const ListingCard = (props) => {

    const handleSupportClick = () => {
        goToPage('/listing/:id');
    };

    return (
        <Card>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <p className="cardFooter float-left">Name</p><p className="cardFooter float-right">Age: {props.age}</p>
                <Flag className="cflag" code={props.country} height="20"/>
                <Button className="greenBck" block variant="success" onClick={handleSupportClick}>SUPPORT</Button>
            </Card.Footer>
        </Card>
    );
};
export default ListingCard;
