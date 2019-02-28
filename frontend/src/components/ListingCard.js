import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Flag from 'react-world-flags';
import '../css/card.css';

const ListingCard = () => {
    return (
            <Card>
            <Card.Img variant="top" src={require("../img/template.svg")} />
            <Card.Body>
                <Card.Title>Picture Title</Card.Title>
                <Card.Text>
                    This is a description of the picture.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <p className="cardFooter float-left">Name</p><p className="cardFooter float-right">Age: 9</p>
                <Flag className="cflag" code="IE" height="20"/>
                 <Button className="greenBck" block variant="success">SUPPORT</Button>
            </Card.Footer>
            </Card>
    );
};
export default ListingCard;
