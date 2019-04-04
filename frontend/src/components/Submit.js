import React, {Component, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Countries from './countries';
import TweetBox from './TweetBox';
import '../css/submitForm.css';

const Submit = (props) => {
    return (
        <Container className='submitFormC'>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <div>
                        <Form>
                            <Form.Group controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Title" className="formContainer"
                                              onChange={props.handleTitleChange}/>
                                <span className="error-message-span"> {props.handleTitleError} </span>
                            </Form.Group>
                            <Form.Group controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" className="formContainer"
                                              onChange={props.handleNameChange}/>
                                <span className="error-message-span"> {props.handleNameError} </span>
                            </Form.Group>
                            <Form.Group controlId="formGridTextArea">
                                <Form.Label>Description</Form.Label>
                                <TweetBox onChange={props.handleDescriptionChange}/>
                                <span className="error-message-span"> {props.handleDescriptionError} </span>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} xs={6} md={6} controlId="formGridAge">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="number" placeholder="0"
                                                  className="formContainer"
                                                  defaultValue='1'
                                                  onChange={props.handleAgeChange}
                                                  min="1"
                                    />
                                    <span className="error-message-span"> {props.handleAgeError} </span>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} md={6} controlId="formGridCountry">
                                    <div className="label">
                                        <Form.Label>Country</Form.Label>
                                    </div>
                                    <Countries handleChange={props.handleCountryChange}/>
                                    <span className="error-message-span"> {props.handleCountryError} </span>
                                </Form.Group>
                            </Form.Row>
                            <button type="submit" className="btn submitBtn" onClick={props.handleFormSubmit}>
                                Submit
                            </button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Submit;