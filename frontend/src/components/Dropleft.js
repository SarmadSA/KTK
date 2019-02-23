import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import { TiFilter } from 'react-icons/ti';
import '../css/dropleft.css';
import '../css/Explore.css';

const Dropleft = () => {
    return (
            <Container className="filter">
                <ButtonToolbar className="filterBar">
                    {['left'].map(direction => (
                                <div>
                                    <TiFilter className="iconFilter"/>
                                    <DropdownButton
                                        drop={direction}
                                        title={`Country`}
                                        id={`dropdown-button-drop-${direction}`}
                                        key={direction}
                                        bsPrefix="blueBck btn">
                                        <div className="pl-4 filter">
                                            <li><label><input className="inputFilter" type="checkbox"/>&nbsp;Country 1</label></li>
                                            <li><label><input className="inputFilter" type="checkbox"/>&nbsp;Country 2</label></li>
                                            <li><label><input className="inputFilter" type="checkbox"/>&nbsp;Country 3</label></li>
                                        </div>
                                    </DropdownButton>
                                    <DropdownButton
                                        className="pr-3"
                                        drop={direction}
                                        title={`Age`}
                                        id={`dropdown-button-drop-${direction}`}
                                        key={direction}
                                        bsPrefix="blueBck btn">
                                        <div className="pl-4 filter">
                                            <li><label><input className="inputFilter" type="checkbox"/>&nbsp;Age 0-5</label></li>
                                            <li><label><input className="inputFilter" type="checkbox"/>&nbsp;Age 6-10</label></li>
                                        </div>
                                    </DropdownButton>
                                </div>
                                    ))}
                </ButtonToolbar>
            </Container>
            );
};

export default Dropleft;
