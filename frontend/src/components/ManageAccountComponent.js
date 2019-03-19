import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/ManageAccount.css';

const  ManageAccountComponent = () =>{
    return (<div>
                <h1>Manage account</h1>
                <Container className="mngAccContainer">
                    <Row>
                        <button className="mngAccBtn">Edit information</button>
                    </Row>
                    <Row>
                        <button className="mngAccBtn">Order history</button>
                    </Row>
                    <Row>
                        <button className="mngAccBtn">Delete account</button>
                    </Row>
                </Container>
            </div>);
};

export default ManageAccountComponent;

