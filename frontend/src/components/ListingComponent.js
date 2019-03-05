import React from 'react';
import css from '../css/listing.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const ListingComponent = () => {
    return (
            <div className="divContainer">
                <h1 class="ListingTitle">Title</h1>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEWEgoR/fX/Ew8THyMfNzs3U1dR9en3b29vJyMnW1dbBwMHT1NN3dXfMzMx1cnXZ2tns7ezh4eH3+Pfp6un///9FzsIhAAABgElEQVR4nO3dW04bQRBA0bHBHo8fsQ3sf60goUhJPpIICcHpuWcDXVf9W1JNL0+35+f7fZ7n67Isu8vju8vhN9uPO/zTzzf/6rT8j/lP19t0/bH/1ea72n/M+Tid9tPINttpN3zh+H/4uPnqIT5Vhb4KfRX6KvRV6FtF4WX4wocKbRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+VRRuK7RV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0FehbxUbQxXiKvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0VehbReFh+MLx78xUiKvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0PdWeNp/9RCf6q1wV6GtQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0FehbxWFy/CFc4W2Cn0V+ir0Veir0Fehr0LfKgqv583IzsfpdtyO7Hh/BW2JEsWhGWaUAAAAAElFTkSuQmCC" className="ListingPhoto"></img>
                <Container>
                    <Row>
                        <Col xs className="derp"><p className="Age">Age</p></Col>
                        <Col xs className="derp"><p className="Location">Location</p></Col>
                    </Row>
                    <Row>
                        <Col xs className="derp"><p className="Description">Lorem ipsum dolor sit amet, essent nonumes indoctum at est, et has rebum ridens posidonium. Nam porro minim facilisis et. Eu mei autem moderatius. Modus pertinacia theophrastus est in. Et electram voluptatibus pro, ut vis indoctum convenire partiendo. Ea rebum dolores ocurreret nam, eos no delicata adolescens.</p></Col>
                    </Row>
                </Container>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control className="donation" type="donation" placeholder="Donation sum" className="formContainer"/>
                    </Form.Group>
                </Form>
                <p className="minSum">Min sum:</p>
                <button type="buy" className="buyBtn">Buy</button>
            </div>);
};

export default ListingComponent;
