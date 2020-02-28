import { Form } from 'semantic-ui-react'
import React from 'react';

export default function AddForm() {
    return (
        <Form.Group widths='equal'>
            <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                label='Doctor Name'
                placeholder='Dr. Lastname'
            />
            <br></br>
            <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
                label='Last name'
                placeholder='Last name'
            />
        </Form.Group>
    );
};