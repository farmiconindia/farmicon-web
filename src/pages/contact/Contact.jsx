import React, { useState, useEffect } from "react";
import contactimg from "../../assets/contact.png";
import "./contact.scss";
import AOS from 'aos';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };
    useEffect( () => {
      AOS.init({
        duration: 1000, 
        easing: 'ease-in-out', 
      });
    }, []);
 

  return (
    <div className="contact">
      <div className="container">
        <div className="left" data-aos="fade-right">
          <img src={contactimg} />
        </div>
        <div className="right">
          <div className="contact-form">
            <h2 data-aos="fade-right">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group" data-aos="fade-up">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group" data-aos="fade-up">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group" data-aos="fade-up">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" data-aos="fade-up" >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
