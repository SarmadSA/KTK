import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Countries from './countries';
import '../css/signUp.css';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'password',
            score: 'null'
        };
        this.showHide = this.showHide.bind(this);
        this.passwordStrength = this.passwordStrength.bind(this);
    }

    showHide(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'password' ? 'input' : 'password'
        });
    }

    passwordStrength(e) {
        if (e.target.value === '') {
            this.setState({
                score: 'null'
            });
        } else {
            var zxcvbn = require('zxcvbn');
            var pw = zxcvbn(e.target.value);
            this.setState({
                score: pw.score
            });
        }
    }

    render() {
        const defaultFormValues = this.props.defalutValues;
        const fieldErrors = this.props.fieldErrors;
        return (
            <div className='signUp signUpDiv'>
                <div>
                    <h3>Registration</h3>
                    <Container>
                        <Form className="SignForm" method="PUT">
                            <Form.Row>
                                <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                                    <div className="label">
                                        <Form.Label>First name</Form.Label>
                                    </div>
                                    <Form.Control required type="text" placeholder="First name"
                                                  onChange={this.props.handleNameChange}
                                                  defaultValue={defaultFormValues.firstName}
                                    />
                                    <span className="error-message-span"> {fieldErrors.firstName} </span>
                                </Form.Group>

                                <Form.Group as={Col} xs={12} md={6} controlId="formGridLastName">
                                    <div className="label">
                                        <Form.Label>Last name</Form.Label>
                                    </div>
                                    <Form.Control required type="text" placeholder="Last name"
                                                  onChange={this.props.handleLastNameChange}
                                                  defaultValue={defaultFormValues.lastName}
                                    />
                                    <span className="error-message-span"> {fieldErrors.lastName} </span>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} xs={12} md={12} controlId="formGridEmail">
                                    <div className="label">
                                        <Form.Label>Email(Username)</Form.Label>
                                    </div>
                                    <Form.Control required type="text" placeholder="Email"
                                                  onChange={this.props.handleEmailChange}
                                                  defaultValue={defaultFormValues.email}
                                    />
                                    <span className="error-message-span"> {fieldErrors.email} </span>
                                </Form.Group>
                                <Form.Group as={Col} xs={12} md={12} controlId="formGridPassword">
                                    <div className="label">
                                        <Form.Label>Password</Form.Label>
                                    </div>
                                    <Form.Control required type={this.state.type} className="password input"
                                                  onChange={this.passwordStrength} placeholder="Password"
                                                  onInput={this.props.handlePasswordChange}
                                                  defaultValue={defaultFormValues.password}
                                    />
                                    <span className="password showpass"
                                          onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
                                    <span className="password strength" data-score={this.state.score}/>
                                    <span className="error-message-span"> {fieldErrors.password} </span>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} xs={12} md={12} controlId="formGridCountry">
                                    <div className="label">
                                        <Form.Label>Country</Form.Label>
                                    </div>
                                    <Countries handleChange={this.props.handleCountryChange}
                                               defaultValue={defaultFormValues.country}/>
                                    <span className="error-message-span"> {fieldErrors.country} </span>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group className="terms" id="formGridCheckbox">
                                <Form.Check required className="checkbox" type="checkbox"
                                            label="&nbsp;&nbsp;I agree to the&nbsp;"/><a href="">terms of service</a>
                            </Form.Group>
                            <br/>
                            <Button variant="primary" type="submit" onClick={this.props.handleFormSubmit}>
                                Complete
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
        );
    }
}
export default SignUp;