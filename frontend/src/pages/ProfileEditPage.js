import React from 'react';
import Col from 'react-bootstrap/Col';
import InfoE from '../components/InfoEdit';
import '../css/EditInfo.css';

const ProfileEditPage = () => {
    return (<div>
        <Col xs={12} md={6} lg={6} className="infoEdit">
        <InfoE/>
        </Col>
    </div>);
};

export default ProfileEditPage;