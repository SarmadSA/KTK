import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Countries from './countries';

const Submit = () => {
    return (
            <Container className='submitFormC'>
                <Row>
                    <Col md={{span: 6, offset: 3}}>
                    <div>
                        <Form>
                            <Form.Group controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Title" className="formContainer"/>
                            </Form.Group>
                            <Form.Group controlId="formGridTextArea">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" className="formContainer"/>
                            </Form.Group>
                            <Form.Row>
                            <Form.Group as={Col} xs={6} md={6} controlId="formGridAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="0"
                                              className="formContainer"/>
                            </Form.Group>
                            <Form.Group as={Col} xs={6} md={6} controlId="formGridCountry">
                                <div className="label">
                                    <Form.Label>Country</Form.Label>
                                </div>
                                <Countries/>
                            </Form.Group>
                            </Form.Row>
                            <button type="submit" className="btn submitBtn">
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