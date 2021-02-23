import React from 'react'
import '../styling/contact.css';
import { database } from "../firebase";
import { useState } from 'react';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        database.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        })

        database.collection('mail').add({
            to: "cmatt1299@gmail.com",
            message: {
                subject: "A message from your portfolio",
                text: message,
            },
        })

        .then(() => {
            alert("Message has been sent.");
        })

        .catch((error) => {
            alert(error.message);
        })

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className="conatctDiv">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Contact me</h1>

                <label>Name</label>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>

                <label>Email</label>
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label>Message</label>
                <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact
