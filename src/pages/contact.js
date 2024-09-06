import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission (e.g., send data to a server)
    console.log(formData);
    setSubmitted(true); // Show success message after submission
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        Have a question or need more information about our travel planning services? Reach out to us, and we'll get back to you as soon as possible!
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="contact-button">
          Send Message
        </button>
        {submitted && <p className="success-message">Thank you! Your message has been sent.</p>}
      </form>
    </div>
  );
};

export default Contact;
