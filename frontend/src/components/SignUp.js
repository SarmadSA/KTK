import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DatePicker from './DatePicker';
import Countries from './countries';
import '../css/signUp.css';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
                <div className='signUp'>
                    <div className='popup_inner'>
                        <h3>Registration</h3>
                        <Container>
                            <Form className="SignForm">
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <div className="label">
                                            <Form.Label>Email</Form.Label><a>*</a>
                                        </div>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <div className="label">
                                            <Form.Label>Password</Form.Label><a>*</a>
                                        </div>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <div className="label">
                                            <Form.Label>Repeat Password</Form.Label><a>*</a>
                                        </div>
                                        <Form.Control type="password" placeholder="Repeat Password" />
                                    </Form.Group>
                                </Form.Row>
                
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridName">
                                        <div className="label">
                                            <Form.Label>Name</Form.Label><a>*</a>
                                        </div>
                                        <Form.Control type="name" placeholder="Name" />
                                    </Form.Group>
                
                                    <Form.Group as={Col} controlId="formGridLastName">
                                        <div className="label">
                                            <Form.Label>Last Name</Form.Label><a>*</a>
                                        </div>
                                        <Form.Control type="lastname" placeholder="Last Name" />
                                    </Form.Group>
                
                                    <Form.Group as={Col} controlId="formGridLastName">                                  
                                        <Form.Label>Date of birth</Form.Label>
                                        <br/>
                                        <DatePicker className="datePicker" selected={this.state.startDate} onChange={this.handleChange} />
                                    </Form.Group>
                                </Form.Row>
                
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridAddress1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control placeholder="1234 Main St" />
                                    </Form.Group>
                
                                    <Form.Group as={Col} controlId="formGridAddress2">
                                        <Form.Label>Address 2</Form.Label>
                                        <Form.Control placeholder="Apartment, studio, or floor" />
                                    </Form.Group>
                                </Form.Row>
                
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCountry">
                                        <div className="label">
                                            <Form.Label>Country</Form.Label><a>*</a>
                                        </div>
                                        <Countries/>
                                    </Form.Group>
                
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Form.Row>
                
                                <Form.Group className="terms" id="formGridCheckbox">
                                    <Form.Check className="checkbox" type="checkbox" label="I agree to the &nbsp;" /><a href="">terms of service</a>
                                </Form.Group>
                                <br/>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Container>
                    </div>
                </div>
                );
    }
}
;
export default SignUp;