import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DescriptionText = () => {
    return (
            <Container>
                <Row>
                    <Col className="DescriptionText">"Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore..."</Col>
                </Row>
            </Container>);
};

export default DescriptionText;
