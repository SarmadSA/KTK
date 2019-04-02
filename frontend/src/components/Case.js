import React from 'react';
import Form from 'react-bootstrap/Form';

const Case = (props) => {
    return (
        <Form.Control as="select" onChange={e => props.handleChange(e)}>
            <option>Item...</option>
            <option value="16.95">iPhone 6</option>
            <option value="16.95">iPhone 6s</option>
            <option value="16.95">iPhone 6+</option>
            <option value="16.95">iPhone 6s+</option>
            <option value="16.95">iPhone 7</option>
            <option value="16.95">iPhone 7+</option>
            <option value="16.95">iPhone 8</option>
            <option value="16.95">iPhone 8+</option>
            <option value="16.95">iPhone x</option>
            <option value="16.95">iPhone xx</option>
            <option value="16.95">iPhone xsMax</option>
            <option value="16.95">Samsung Galaxy S7</option>
            <option value="16.95">Samsung Galaxy S7 Edge</option>
            <option value="16.95">Samsung Galaxy S8</option>
            <option value="16.95">Samsung Galaxy S8+</option>
            <option value="16.95">Samsung Galaxy S9</option>
            <option value="16.95">Samsung Galaxy S9+</option>
            <option value="16.95">Samsung Galaxy S10</option>
            <option value="16.95">Samsung Galaxy S10e</option>
            <option value="16.95">Samsung Galaxy S10+</option>
        </Form.Control>);
};
export default Case;
