import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {

    const [text, setText] = useState(''); // initial input text is an empty string

    const handleTextChange = (event) => { // changes state once something was types in input field
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.length > 0) { // specifies that the input text should be longer than 0
            const thought = {
                id: generateId(),
                text: text,
                expiresAt: getNewExpirationTime(),
            };
            props.addThought(thought);
            setText(''); // clears the input field after every submissions
        }
    };



    return (
        <form className="AddThoughtForm" onSubmit={handleSubmit} >
            <input
                type="text"
                aria-label="What's on your mind?"
                placeholder="What's on your mind?"
                value={text}
                onChange={handleTextChange}
            />
            <input type="submit" value="Add" />
        </form>
    );
}
