import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/PurchaseHistory.css';

class PurchasedItem extends Component {

    constructor() {
        super();
        this.state = {
            isHidden: true
        };
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }

    render() {
        const hidden = {
            visibility: 'hidden',
            opacity: 0,
            transition: 'visibility 0s linear 0.33s, opacity 0.33s linear'
        };

        const visible = {
            visibility: 'visible',
            opacity: 1,
            transition: 'visibility 0.33s linear 0s, opacity 0.33s linear'
        };

        const setStyle = () => {
            if (this.state.isHidden) {
                return hidden;
            } else {
                return visible;
            }
        };
        return (<div>
    <Container className="hisContainer">
        <Row className="hisCon">
            <Col xs={5} className="hisColL">Order ID: </Col>
            <Col xs={5} className="hisColL">Order time: </Col><Col xs={1} className="hisColL"><button className="detailsBtn" onClick={this.toggleHidden.bind(this)}>+</button></Col>
            <Col xs={5} className="hisColL">Name: </Col>
            <Col xs={5} className="hisColL">Order amount:</Col>
            <Col xs={5} className="hisColL">Status: </Col>
        </Row>
        <div className="details" style={setStyle()}>
            <Row>
                <Col xs={5} className="hisColL">Order title:</Col>
                <Col xs={5} className="hisColL">Order date:</Col>
                <Col xs={5} className="hisColL">Tracking number:</Col>
                <Col xs={5} className="hisColL">Country: </Col>
                <Col xs={5} className="hisColL">ZIP: </Col>
                <Col xs={5} className="hisColL">Adress: </Col>
            </Row>
        </div>
    </Container>
</div>);
    }
    ;
}

export default PurchasedItem;

