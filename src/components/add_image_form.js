import { Form } from 'semantic-ui-react'
import React, { useState } from 'react';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

export default function AddForm() {
    const handleTags = (tag) => {
        setTags(tag);
    }
    const [tags, setTags] = useState([]); //For use in filtering ImgGallery
    return (
        <div>
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
            <TagsInput value={tags} onChange={handleTags} />
        </div>

    );
};