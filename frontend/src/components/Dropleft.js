import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';

const Dropleft = () => {
    return (
            <Container>
                <ButtonToolbar>
                    {['left'].map(direction => (
                                <DropdownButton
                                    drop={direction}
                                    variant="info"
                                    title={` Drop ${direction} `}
                                    id={`dropdown-button-drop-${direction}`}
                                    key={direction}
                                    >
                                    <div className="pl-4">
                                    <li><a href="#" data-value="option1" tabIndex="-1">
                                    <input type="checkbox"/>&nbsp;Country 1</a></li>
                                    <li><a href="#" data-value="option2" tabIndex="-1">
                                    <input type="checkbox"/>&nbsp;Country 2</a></li>
                                    <li><a href="#" data-value="option3" tabIndex="-1">
                                    <input type="checkbox"/>&nbsp;Country 3</a></li>
                                    <li><a href="#" data-value="option4" tabIndex="-1">
                                    <input type="checkbox"/>&nbsp;Age 0-5</a></li>
                                    <li><a href="#" data-value="option5" tabIndex="-1">
                                    <input type="checkbox"/>&nbsp;Age 6-10</a></li>
                                    </div>
                                </DropdownButton>
                                    ))}
                </ButtonToolbar>
            </Container>);
};

export default Dropleft;
