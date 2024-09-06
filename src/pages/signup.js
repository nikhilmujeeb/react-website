import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        console.log("Form Data Submitted: ", formData);
    };

    return (
        <div className="signup-container">
            <h1 className="signup-title">Create Your Account</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                />
                <button type="submit" className="signup-button">
                    Sign Up
                </button>
            </form>
            {formSubmitted && <p className="success-message">Thank you for signing up!</p>}
        </div>
    );
};

export default SignUp;
