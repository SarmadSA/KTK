import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/about.css'

const about = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>About</h1>
                    <div className="aboutText">Lorem ipsum dolor sit amet, reque aliquam iracundia usu ut, 
                    id wisi suavitate expetendis per. 
                    Ne eros animal neglegentur pro, viris salutandi voluptaria ei his. 
                    Per stet graece democritum ad. 
                    Pri aperiam disputationi ex, has et natum iudicabit repudiandae.</div>
                    <h1>Contact</h1>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Jane Doe" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
        );
        };

export default about;