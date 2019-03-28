import React from 'react';
import Form from 'react-bootstrap/Form';

const Case = (props) => {
    return (
        <Form.Control as="select" onChange={e => props.handleChange(e)}>
            <option>Item...</option>
            <option value="45.95">iPhone 4 45.95 USD</option>
            <option value="21">iPhone 5 21 USD</option>
            <option value="21">iPhoneX 21 USD</option>
            <option value="12.95">Coffee Mug 12.95 USD</option>
            <option value="23">Pillow 23 USD</option>
            <option value="18">Pillow case 18 USD</option>
            <option value="18">Poster 18 USD</option>
            <option value="23.5">Framed poster 23.50 USD</option>
            <option value="30">Towel 30 USD</option>
            <option value="15">Placemat 15 USD</option>
        </Form.Control>);
};
export default Case;
