import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/card.css';

const ProfileListingCard= () => {
    return (
            <Card>
            <Card.Img variant="top" src={require("../img/template.svg")} />
            <Card.Body>
                <Card.Title>Picture Title</Card.Title>
                <Card.Text>
                    This is a description of the picture.
                    <br/>
                    <a>Age: 9</a>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                 <Button className="greenBck" block variant="success">OPEN</Button>
            </Card.Footer>
            </Card>
    );
};
export default ProfileListingCard;
