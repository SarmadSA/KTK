import React from 'react';
import Form from 'react-bootstrap/Form';

const Age = (props) => {
    return (
                <Form.Control as="select"onChange={props.handleChange}>
                    <option>Age</option>
                    <option value="0">0-3</option>
                    <option value="4">4-8</option>
                    <option value="9">9-12</option>
                    <option value="13">13-16</option>
                    <option value="17">17+</option>
                </Form.Control>);
};
export default Age;
