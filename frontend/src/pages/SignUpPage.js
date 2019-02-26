import React from 'react';
import Signup from '../components/SignUp';
import Col from 'react-bootstrap/Col';

const SignUp = () => {
    return (
            <div className="surround">    
                <Col xs={12} md={4} lg={4} className="signUpBox">
                <Signup/>
                </Col>
            </div>);
};

export default SignUp;