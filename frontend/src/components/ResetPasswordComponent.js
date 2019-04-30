import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import '../css/resetPassword.css';

class ResetPasswordComponent extends Component {
    
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
        return (<div>
                <h1>Reset password</h1>
                <Container >
                    <Form>
                        <Form.Group as={Col} xs={9} sm={6} md={5} className="resetFormGroup">
                            <Form.Control required type={this.state.type} className="password input"
                                                  onChange={this.passwordStrength} placeholder="Enter new password" onInput={this.props.handlePasswordChange}/>
                            <span className="password showpassReset"
                                onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
                            <span className="password strength" data-score={this.state.score}/>
                        </Form.Group>
                    </Form>
                    <button className="resetPswrdBtn">Confirm</button>
                </Container>
            </div>);
    };
}

export default ResetPasswordComponent;

