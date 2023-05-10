import React from 'react';


export function ThankYou(props) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Thank you!</h2>
                <p>We received the following information from you:</p>
                <p className='contact-details'>{props.salutation} {props.name}</p>
                <p className='contact-details'>{props.email}</p>
                <p className='contact-details'>My inquiry is about: {props.topic}</p>
                <p className='contact-details'>Subject: {props.subject}</p>
                <p className='contact-details message'>"Subject: {props.message}"</p>

                <button className="close-button" onClick={props.handleClose}>Close</button>
            </div>
        </div>
    );
}