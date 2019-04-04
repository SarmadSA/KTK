import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import '../css/forgotPassword.css';

class  ForgotPasswordComponent extends Component {
    
    constructor () {
        super()
        this.state = {
            isHidden: true,
            btnText: "Reset password"
        }
    }
    
    toggleHidden () {
        if(this.state.isHidden){
            this.setState({
                isHidden:!this.state.isHidden,
                btnText: "Resend link"
            })
        }
    }
    
    render() {
    return (<div>
                <h1>Forgot password</h1>
                <Container>
                    <Form>
                        <Form.Group as={Col} xs={9} md={6} className="PswrdEmailBox">
                            <Form.Control type="email" placeholder="E-mail"/>
                        </Form.Group>
                    </Form>
                    <button className="forgotPswrdBtn" onClick={this.toggleHidden.bind(this)}>{this.state.btnText}</button>
                    {!this.state.isHidden && 
                        <Col md={6} className="forgotPswrdCol">
                        <p className="forgotPswrdText"> If this user exists, an e-mail with a link to reset 
                        password has been sendt to the e-mail address.<br/>
                        If you have not received an e-mail with a reset link, 
                        be sure to check your spam folder or make sure you typed the correct address.</p>
                        </Col>
                    }
                </Container>
            </div>);
    };
}

export default ForgotPasswordComponent;