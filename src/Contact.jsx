import React, { Component } from "react";


class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <h2>Contact Information</h2>
                <p>If you would like to get in touch, you can reach me via the following:</p>
                <ul>
                    <li>Email: <a href="#">dani@midsommar.com</a></li>
                    <li>LinkedIn: <a href="#">linkedin.com/in/fake-profile</a></li>
                </ul>
            </div>
        );
    }
}

export default Contact;