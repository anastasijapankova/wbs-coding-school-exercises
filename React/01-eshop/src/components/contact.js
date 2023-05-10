import { useState } from 'react'
import '../App.css'
import { ThankYou } from './thankyou'

export function Contact() {


    const [salutation, setSalutation] = useState('Mr.');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('Sales');
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [showThankYou, setShowThankYou] = useState(false)


    const handleClose = (e) => {
        setShowThankYou(false);
        setSalutation('Mr.')
        setName('')
        setEmail('')
        setTopic('Sales')
        setSubject('')
        setMessage('')
    }

    const handleSalutationChange = (e) => {
        setSalutation(e.target.value)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleTopicChange = (e) => {
        setTopic(e.target.value)
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (name.length === 0 && email.length === 0) return
        setShowThankYou(true);
    }

    return (
        <div className="card-container">
            <h1 className="card-title">Contact us</h1>
            <form className='form' onSubmit={submitForm}>
                <div className='input-field' >
                    <label for="salutation">Salutation</label>
                    <select id="salutation" defaultValue={salutation} onChange={handleSalutationChange}>
                        <option selected value="mr">Mr.</option>
                        <option value="ms">Ms.</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className='input-field'>
                    <label for="name">Name</label>
                    <input id="name" type="text" value={name} onChange={handleNameChange} required />
                </div>
                <div className='input-field'>
                    <label for="email">Email</label>
                    <input id="email" type="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div className='input-field' >
                    <label for="department">Topic</label>
                    <select id="department" defaultValue={topic} onChange={handleTopicChange}>
                        <option selected value="sales">Sales</option>
                        <option value="marketing">Marketing</option>
                        <option value="warehouse">Warehouse</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className='input-field'>
                    <label for="topic">Subject</label>
                    <input id="topic" type="text" value={subject} onChange={handleSubjectChange} required />
                </div>
                <div className='input-field'>
                    <label for="message">Message</label>
                    <input id="message" type="textarea" value={message} onChange={handleMessageChange} required />
                </div>
                <button className='send-button' type='submit' >Send</button>
            </form>


            {showThankYou && <ThankYou salutation={salutation} name={name} email={email} topic={topic} subject={subject} message={message} handleClose={handleClose} />}

        </div >
    )
}