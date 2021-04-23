/**
 *  components/Contact/Contact.js - Contact component 
 * */

/* Imports */
import { useState } from "react";
import "./contact.css";
import 'bootstrap/dist/css/bootstrap.css';
/**
 *  Contact component */
function Contact() {

    /*create state for each input*/
    const [contactName, setContact] = useState(" ");
    const [contactEmail, setEmail] = useState(" ");
    const [textSubmitted, setTextSubmitted] = useState(" ");

/*    let contactPage = await fetch("http://localhost:8000/contact");
 */    console.log(textSubmitted);

    const handleSubmitButton = async (e) => {
        e.preventDefault();
        /**
         * Send an async request to the server
         * Wait for fetch to get a response
         */
        const message = await fetch ("http://localhost:8000/contact", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({
                contactName: contactName, 
                textSubmitted: textSubmitted,
                contactEmail: contactEmail
            }),
        });
        /* Now we have a response */
        console.log(message);
        /* Wait for json() method to parse response data from JSON to plain JS object */
        const data = await message.json();
        console.log(data);
    };

    return (
        <div className="contactForm">
            {/* Form to submit new Message */}
            <h2 className="addNewMessage">
                Send me a message
                </h2>
            <form className="submitMessage">
                {/* Contact Input */}
                <div className="form-group">
                    <label>Your name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactName"
                        placeholder="Your name"
                        value={contactName}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>

                {/* Contact Input */}
                <div className="form-group">
                    <label for="email">Your email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"/* 
                        placeholder="Your email" */
                        value={contactEmail}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Message Text Input */}
                <div className="form-group">
                    <label>Message:</label>
                    <textarea
                        className="form-control"
                        id="textSubmitted"
                        value={textSubmitted}
                        placeholder="Write your Message here"
                        onChange={(e) => setTextSubmitted(e.target.value)}
                        rows="10"
                        cols="30"
                    >
                    </textarea>
                </div>

                {/* Submit Button  */}
                <div className="buttonSubmit">
                    <button
                        type="submit"
                        className="btn btn-block buttonSubmit"
                        onClick={handleSubmitButton}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>

    );
}

/* Export */
export default Contact;