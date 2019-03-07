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
                                    <Form.Group className="editProfileCol" as={Col} xs={6} md={6} controlId="formGridName">
                                        <Form.Control type="name" placeholder="Name" />
                                    </Form.Group>
                
                                    <Form.Group className="editProfileCol" as={Col} xs={6} md={6} controlId="formGridLastName">
                                        <Form.Control type="lastname" placeholder="Last Name" />
                                    </Form.Group>
                                </Form.Row>
                                
                                    <Form.Group className="editProfileCol" as={Col} xs controlId="formGridEmail">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                    
                                    <Form.Group className="editProfileCol" as={Col} xs controlId="formGridDateOfBirth">
                                        <div className="dateLabel">
                                            <Form.Label>Date of birth </Form.Label>
                                        </div>
                                        <DatePicker className="datePicker" selected={this.state.startDate} onChange={this.handleChange} dateFormat="yyyy-MM-dd" />
                                    </Form.Group>
                                
                                    <Form.Group className="editProfileCol" as={Col} xs controlId="formGridAddress1">
                                        <Form.Control placeholder="Address" />
                                    </Form.Group>
                
                                    <Form.Group className="editProfileCol" as={Col} xs controlId="formGridAddress2">
                                        <Form.Control placeholder="Apartment, studio, or floor" />
                                    </Form.Group>
                                    
                                    <Form.Group className="editProfileCol" as={Col} xs controlId="formGridState">
                                        <Form.Control placeholder="Province"/>
                                    </Form.Group>
                
                                    <Form.Group className="editProfileCol" as={Col} xs controlId="formGridCity">
                                        <Form.Control placeholder="City"/>
                                    </Form.Group>
                
                                    <Form.Group className="editProfileCol" as={Col} xs  controlId="formGridZip">
                                        <Form.Control placeholder="Postal/Zip code"/>
                                    </Form.Group>
                                    
                                    <Form.Group className="editProfileCol" as={Col} xs controlId="formGridCountry">
                                        <Countries/>
                                    </Form.Group>
                                    
                                    <Form.Group className="editProfileCol" as={Col} xs controlId="formGridPassword">
                                        <Form.Control type={this.state.type} className="password input" onChange={this.passwordStrength} placeholder="New password" />
                                        <span className="password showpass" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
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