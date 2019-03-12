import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider/lib/Slider';
import Tooltip from 'rc-tooltip';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Items from './Items';
import 'rc-slider/assets/index.css';
import '../css/slider.css';


class Chooser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            minPrice: 0,
            amount: 1
        };
    }

    onSliderChange = (value) => {
        this.setState({price: value});
    }
    ;
    handleItemChange = (val) => {
        this.setState({minPrice: val * this.state.amount});
    }
    ;
    onAmountChange = (val) => {
        this.setState({amount: val});
    }
    ;
            render() {


        return (
                <div>
                    <Form onSubmit={e => {e.preventDefault();}}>
                    <Items handleChange={e => this.handleItemChange(e.target.value)}/>
                    <br/>
                    <Form.Label>Amount</Form.Label>
                        <Form.Control type="number"
                                      className="formContainer"
                                      value={this.state.amount}
                                      onChange={(e) => this.onAmountChange(e.target.value)}/>
                    <br/>
                    <p>Min price: {(this.state.minPrice * this.state.amount).toFixed(2)} USD</p>
                    <Slider step={0.01} min={Number(this.state.minPrice)} max={Number(this.state.minPrice * 10)} value={this.state.price} onChange={this.onSliderChange} />
                    <br/>
                        <Form.Row className="chooserRow">
                            <Form.Group as={Col} xs={6} md={6}>
                                <Form.Label>You will pay (USD)</Form.Label>
                                <Form.Control type="number"
                                              className="formContainer"
                                              value={(this.state.price * this.state.amount).toFixed(2)}
                                              onChange={(e) => this.onSliderChange(e.target.value)}/>
                            </Form.Group>
                            <button as={Col} className="mt-5" xs={6} md={6} type="submit" className="buyBtn">Buy</button>
                        </Form.Row>
                    </Form>
                </div>
                    );
    }
}
export default Chooser;