import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../css/Submitandexplore.css';

const Submitandexplore = (props) => {
    return (
<Jumbotron>
    <Container>
        <Row className="justify-content-md-center align-middle">
            <Col xs lg="5">
                <Button className="btnLg" block size="lg" variant="success" onClick={props.handleSubmitBtn}>Submit</Button>
            </Col>
        <Col md="auto"><p className="invisible">Hello</p></Col>
            <Col xs lg="5">
                <Button className="btnLg" block size="lg" variant="success" onClick={props.handleExploreBtn}>Explore</Button>
            </Col>
        </Row>
    </Container>
</Jumbotron>);
};

export default Submitandexplore;
