import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import { TiFilter } from 'react-icons/ti';
import Age from './Age';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Country from './countries';
import '../css/dropleft.css';
import '../css/Explore.css';

const Dropleft = () => {
    return (
            <Container as={Col} xs={5} md={5} className="filter">
                    <TiFilter className="iconFilter"/>
                    <Age/>
                    <Country/>
            </Container>
            );
};

export default Dropleft;