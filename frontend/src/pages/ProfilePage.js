import React from 'react';
import Profileinfo from '../components/ProfileInfo';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PList from '../components/profileList';
import '../css/ProfilePage.css';

const ProfilePage = () => {
    return (<div>
                <Row className="ProfilePage"> 
                    <Col xs={12} md={7} lg={6}>
                        <Profileinfo/>
                    </Col>
                    <Col xs={12} md={5} lg={6}>
                        <PList/>
                    </Col>  
                </Row>
            </div>);
};

export default ProfilePage;