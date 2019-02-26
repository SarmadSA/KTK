import React from 'react';
import Button from 'react-bootstrap/Button';
import {IoMdClose} from 'react-icons/io';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import '../css/signInn.css';

const SignIn = () => {
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <h3>Log In</h3>
                <button className="closePop"><IoMdClose/></button>
                <Container>
                    <Form className="SignForm">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                            <a className="signUp loginA" href="/url">Forgot password?</a>
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>
                        <Button variant="light" type="submit">Log in</Button>
                        <a className="signUp loginA" href="/url">Don't have an account?</a>
                    </Form>
                </Container>
            </div>
        </div>
    );
};
export default SignIn;