import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DescriptionText from '../components/DescriptionText';
import Cflag from '../components/Flag';
import '../css/profile.css';

const ProfileInfo = () => {
return (
<div>
        <Row>
            <h1 className="Username">Username</h1>
        </Row>
        <Row>   
            <Col className="profilePic" xs={6} md={5}>
                <Image src={require("../img/ProfiPic.svg")} rounded/>
                <Cflag/>
            </Col>
            <Col xs={6} md={5}>
                <h5 className="Description">Description</h5>
                <DescriptionText/>
            </Col>   
        </Row>            
</div>);
};

export default ProfileInfo;
