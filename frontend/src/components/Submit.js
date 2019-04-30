import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Countries from './countries';
import TweetBox from './TweetBox';
import '../css/submitForm.css';

const Submit = (props) => {

    const defaultFormValues = props.defalutValues;
    const fieldErrors = props.fieldErrors;
    return (
        <Container className='submitFormC'>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <div>
                        <Form>
                            <Form.Group controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Title" className="formContainer"
                                              onChange={props.handleTitleChange}
                                              defaultValue={defaultFormValues.title}/>
                                <span className="error-message-span"> {fieldErrors.title} </span>
                            </Form.Group>
                            <Form.Group controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" className="formContainer"
                                              onChange={props.handleNameChange}
                                              defaultValue={defaultFormValues.name}/>
                                <span className="error-message-span"> {fieldErrors.name} </span>
                            </Form.Group>
                            <Form.Group controlId="formGridTextArea">
                                <Form.Label>Description</Form.Label>
                                <TweetBox onChange={props.handleDescriptionChange}
                                          defaultValue={defaultFormValues.description}/>
                                <span className="error-message-span"> {fieldErrors.description} </span>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} xs={6} md={6} controlId="formGridAge">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="number" placeholder="0"
                                                  className="formContainer"
                                                  defaultValue={defaultFormValues.age}
                                                  onChange={props.handleAgeChange}
                                                  min="1"
                                    />
                                    <span className="error-message-span"> {fieldErrors.age} </span>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} md={6} controlId="formGridCountry">
                                    <div className="label">
                                        <Form.Label>Country</Form.Label>
                                    </div>
                                    <Countries handleChange={props.handleCountryChange}
                                               defaultValue={defaultFormValues.country}/>
                                    <span className="error-message-span"> {fieldErrors.country} </span>
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