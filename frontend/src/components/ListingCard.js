import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const ListingCard = () => {
    return (
            <Card>
            <Card.Img variant="top" src={require("../img/template.svg")} />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Profile</small>
            </Card.Footer>
            </Card>
    );
};
export default ListingCard;
