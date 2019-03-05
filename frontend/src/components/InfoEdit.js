import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DatePicker from './DatePicker';
import Countries from './countries';
import '../css/signUp.css';
import {goToPage} from "../helpers/helperFunctions";

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
    handleBackClick = () => {
        goToPage('/profile/:id');
    };
    

    render() {
        return (
                <div className='editProfile'>
                    <div>
                        <h3>Edit user information</h3>
                        <Button variant="warning" onClick={()=>{this.handleBackClick();}}>
                                    Back
                        </Button>
                        <Container>
                            <Form className="SignForm">
                                <Form.Row>
                                    <Form.Group as={Col} xs={6} md={5} controlId="formGridName">
                                    <div className="FirstNameLabel">
                                            <Form.Label>First name</Form.Label>
                                        </div>
                                        <Form.Control type="text" placeholder="First name" />
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={6} md={5} controlId="formGridLastName">
                                    <div className="LastNameLabel">
                                            <Form.Label>Last name</Form.Label>
                                        </div>
                                        <Form.Control type="text" placeholder="Last Name" />
                                        </Form.Group>
                                        <Form.Group as={Col} xs={12} md={2} controlId="formGridDateOfBirth">
                                        <div className="dateLabel">
                                            <Form.Label>Date of birth </Form.Label>
                                        </div>
                                        <DatePicker className="datePicker" selected={this.state.startDate} onChange={this.handleChange} dateFormat="yyyy-MM-dd" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                                    <div className="EmailLabel">
                                            <Form.Label>Email</Form.Label>
                                        </div>
                                        <Form.Control type="text" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                                    <div className="label">
                                        <Form.Label>Password</Form.Label>
                                    </div>
                                    <Form.Control required type={this.state.type} className="password input"
                                                  onChange={this.passwordStrength} placeholder="Password" onInput={this.props.handlePasswordChange}/>
                                    <span className="password showpass"
                                          onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
                                    <span className="password strength" data-score={this.state.score}/>
                                </Form.Group> 
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} xs={12} md={6} controlId="formGridAddress1">
                                    <div className="label">
                                        <Form.Label>Adress</Form.Label>
                                    </div>
                                        <Form.Control placeholder="Address" />
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={12} md={6} controlId="formGridAddress2">
                                    <div className="label">
                                        <Form.Label>Adress 2</Form.Label>
                                    </div>
                                        <Form.Control placeholder="Apartment, studio, or floor" />
                                    </Form.Group>
                                </Form.Row>
                
                                <Form.Row>
                                    <Form.Group as={Col} xs={12} md={3} controlId="formGridCountry">
                                        <div className="label">
                                            <Form.Label>Country</Form.Label>
                                        </div>
                                        <Countries/>
                                    </Form.Group>
                                                
                                    <Form.Group as={Col} xs={12} md={3} controlId="formGridState">
                                    <div className="label">
                                            <Form.Label>Province</Form.Label>
                                        </div>
                                        <Form.Control placeholder="Province"/>
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={12} md={3} controlId="formGridCity">
                                    <div className="label">
                                            <Form.Label>City</Form.Label>
                                        </div>
                                        <Form.Control placeholder="City"/>
                                    </Form.Group>
                
                                    <Form.Group as={Col} xs={12} md={3}  controlId="formGridZip">
                                    <div className="label">
                                            <Form.Label>Zip</Form.Label>
                                        </div>
                                        <Form.Control placeholder="Postal/Zip code"/>
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