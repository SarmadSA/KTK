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
                                    <Form.Group as={Col} xs={6} md={5} controlId="formGridName">
                                        <Form.Control type="name" placeholder="Name" />
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={6} md={5} controlId="formGridLastName">
                                        <Form.Control type="lastname" placeholder="Last Name" />
                                    </Form.Group>
                                </Form.Row>
                                
                                    <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                    
                                    <Form.Group as={Col} xs={12} md={2} controlId="formGridDateOfBirth">
                                        <div className="dateLabel">
                                            <Form.Label>Date of birth </Form.Label>
                                        </div>
                                        <DatePicker className="datePicker" selected={this.state.startDate} onChange={this.handleChange} dateFormat="yyyy-MM-dd" />
                                    </Form.Group>
                                
                                    <Form.Group as={Col} xs={12} md={6} controlId="formGridAddress1">
                                        <Form.Control placeholder="Address" />
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={12} md={6} controlId="formGridAddress2">
                                        <Form.Control placeholder="Apartment, studio, or floor" />
                                    </Form.Group>
                                    
                                    <Form.Group as={Col} xs={12} md={3} controlId="formGridState">
                                        <Form.Control placeholder="Province"/>
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={12} md={3} controlId="formGridCity">
                                        <Form.Control placeholder="City"/>
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={12} md={3}  controlId="formGridZip">
                                        <Form.Control placeholder="Postal/Zip code"/>
                                    </Form.Group>
                                    
                                    <Form.Group as={Col} xs={12} md={3} controlId="formGridCountry">
                                        <Countries/>
                                    </Form.Group>
                                    
                                    <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                                        <Form.Control type={this.state.type} className="password input" onChange={this.passwordStrength} placeholder="New password" />
                                        <span className="password show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
                                        <span className="password strength" data-score={this.state.score} /> 
                                    </Form.Group>
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