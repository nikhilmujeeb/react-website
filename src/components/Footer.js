import React from "react";
import "./Footer.css"; // Import the footer CSS

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Travel Planner. All rights reserved.</p>
            <div>
                <a href="/index" className="footer-link">Home</a> | 
                <a href="/about" className="footer-link">About Us</a> | 
                <a href="/contact" className="footer-link">Contact Us</a>
            </div>
        </footer>
    );
};

export default Footer;
