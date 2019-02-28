import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DatePicker from './DatePicker';
import Countries from './countries';
import '../css/signUp.css';

class InfoEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            type: 'password',
            score: 'null'
        };
        this.handleChange = this.handleChange.bind(this);
        this.showHide = this.showHide.bind(this);
        this.passwordStrength = this.passwordStrength.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    
    showHide(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'password' ? 'input' : 'password'
        });
    }
    
    passwordStrength(e){
    if(e.target.value === ''){
      this.setState({
        score: 'null'
      });
    }
    else{
      var zxcvbn = require('zxcvbn');
      var pw = zxcvbn(e.target.value);
      this.setState({
        score: pw.score
      });      
    }
    }

    render() {
        return (
                <div className='signUp'>
                    <div>
                        <h3>Edit user information</h3>
                        <Container>
                            <Form className="SignForm">
                                <Form.Row>
                                    <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                                        <div className="label">
                                            <Form.Label>Email</Form.Label>
                                        </div>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                                        <div className="label">
                                            <Form.Label>New Password</Form.Label>
                                        </div>
                                        <Form.Control type={this.state.type} className="password input" onChange={this.passwordStrength} placeholder="New password" />
                                        <span className="password show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
                                        <span className="password strength" data-score={this.state.score} /> 
                                    </Form.Group>
                
                                </Form.Row>
                
                                <Form.Row>
                                    <Form.Group as={Col} xs={12} md={5} controlId="formGridName">
                                        <div className="label">
                                            <Form.Label>Name</Form.Label>
                                        </div>
                                        <Form.Control type="name" placeholder="Name" />
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={12} md={5} controlId="formGridLastName">
                                        <div className="label">
                                            <Form.Label>Last Name</Form.Label>
                                        </div>
                                        <Form.Control type="lastname" placeholder="Last Name" />
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={12} md={2} controlId="formGridLastName">                                  
                                        <Form.Label>Date of birth</Form.Label>
                                        <br/>
                                        <DatePicker className="datePicker" selected={this.state.startDate} onChange={this.handleChange} dateFormat="yyyy-MM-dd" />
                                    </Form.Group>
                                </Form.Row>
                
                                <Form.Row>
                                    <Form.Group as={Col} xs={12} md={6} controlId="formGridAddress1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control placeholder="1234 Main St" />
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={12} md={6} controlId="formGridAddress2">
                                        <Form.Label>Address 2</Form.Label>
                                        <Form.Control placeholder="Apartment, studio, or floor" />
                                    </Form.Group>
                                </Form.Row>
                
                                <Form.Row>
                                    <Form.Group as={Col} xs={12} md={3} controlId="formGridCountry">
                                        <div className="label">
                                            <Form.Label>Country</Form.Label><a>*</a>
                                        </div>
                                        <Countries/>
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={12} md={3} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={12} md={3} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={12} md={3}  controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Form.Row>
                                <br/>
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>
                            </Form>
                        </Container>
                    </div>
                </div>
                );
    }
}
;
export default InfoEdit;