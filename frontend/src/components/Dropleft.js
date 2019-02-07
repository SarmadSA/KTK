import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Container from 'react-bootstrap/Container'

const Dropleft = () => {
    return (
            <Container>
            <ButtonToolbar>
                {['left'].map(direction => (
                                <DropdownButton
                                    drop={direction}
                                    variant="secondary"
                                    title={` Drop ${direction} `}
                                    id={`dropdown-button-drop-${direction}`}
                                    key={direction}
                                    >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                                ))}
            </ButtonToolbar>
            </Container>);
};

export default Dropleft;
