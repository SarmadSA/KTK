import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/purchase.css';
import Form from 'react-bootstrap/Form';
import Countries from './countries';
import Col from 'react-bootstrap/Col';

const purchaseComponent = (props) => {
    return (
            <div className="purchaseContainer">
                <h1>Buy</h1>
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                        Select shipping address
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Address1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Address2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Address3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <p>Or enter new shipping address</p>
                <Form >
                    <Form.Row xs >
                        <Form.Group as={Col} xs={6} md={6} controlId="formGridName" className="formLeft">
                            <Form.Control type="name" placeholder="Name"/>
                        </Form.Group>
                        <Form.Group as={Col} xs={6} md={6} controlId="formGridLastName" className="formRight">
                            <Form.Control type="lastname" placeholder="Last Name"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGridAdress1" className="form">
                        <Form.Control type="address1" placeholder="Address 1"/>
                    </Form.Group>
                    <Form.Group controlId="formGridAdress2" className="form">
                        <Form.Control type="address2" placeholder="Address 2"/>
                    </Form.Group>
                    <Form.Group controlId="formGridProvince" className="form">
                        <Form.Control type="province" placeholder="Province"/>
                    </Form.Group>
                    <Form.Group controlId="formGridCity" className="form">
                        <Form.Control type="city" placeholder="City"/>
                    </Form.Group>
                    <Form.Group controlId="formGridPostalZipCode" className="form">
                        <Form.Control type="postalzipcode" placeholder="Postal/Zip code"/>
                    </Form.Group>
                    <Form.Group controlId="formGridCountry">
                        <Countries />
                    </Form.Group>
                    <button type="confirmpurchase" className="btn purchaseBtn">
                        Confirm purchase
                    </button>
                </Form>
                
            </div>
    );
};

export default purchaseComponent;