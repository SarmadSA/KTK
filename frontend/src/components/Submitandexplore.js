import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
import css from '../css/Submitandexplore.css'

const Submitandexplore = () => {
    return (
<Jumbotron>
    <Container>
        <Row className="justify-content-md-center align-middle">
            <Col xs lg="5">
                <Button block size="lg" variant="success">Submit</Button>
            </Col>
        <Col md="auto"><p>Hello</p></Col>
            <Col xs lg="5">
                <Button block size="lg" variant="success">Explore</Button>
            </Col>
        </Row>
    </Container>
</Jumbotron>);
};

export default Submitandexplore;
