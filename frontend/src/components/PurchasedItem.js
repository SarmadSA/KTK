import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/PurchaseHistory.css';

class PurchasedItem extends Component {
    
    constructor () {
        super();
        this.state = {
            isHidden: true
        };
    }
    
    toggleHidden () {
        this.setState({
            isHidden:!this.state.isHidden
        });
    }
    
    render() {
    return (<div>
                <Container className="hisContainer">
                    <Row className="hisCon">
                        <Col xs={4} className="hisColL">Order: xxxx</Col>
                        <Col xs={5} className="hisColL">Status: "status"</Col>
                        <Col xs={2} className="hisColL"><button onClick={this.toggleHidden.bind(this)}>Details</button></Col>
                    </Row>
                    {!this.state.isHidden && 
                        <div className="details">
                        <Row>
                            <Col xs={6} className="hisColL">Order title</Col>
                            <Col xs={6} className="hisColR">Order date:</Col>
                        </Row>
                        <Row>
                            <Col className="hisColL">Payed price:</Col>
                        </Row>
                        </div>
                    }
                </Container>
            </div>);
    };
}

export default PurchasedItem;

