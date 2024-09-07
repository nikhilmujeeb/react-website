import React from "react";
import "./about.css"; 
const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                Welcome to Your Travel Planner, your ultimate companion for planning unforgettable journeys around the world!
            </p>
            <p className="about-text">
                Our mission is to make travel planning simple, fun, and personalized. Whether you are a seasoned traveler or a first-time explorer, our platform offers everything you need to craft the perfect itinerary. Discover top destinations, find hidden gems, compare the best deals, and create a detailed plan tailored just for you.
            </p>
            <h2 className="about-subtitle">Why Choose Us?</h2>
            <ul className="about-list">
                <li>Comprehensive Destination Guides</li>
                <li>Personalized Itinerary Planning Tools</li>
                <li>Exclusive Travel Deals and Discounts</li>
                <li>24/7 Customer Support</li>
                <li>User-Friendly Interface</li>
            </ul>
            <p className="about-text">
                Join thousands of satisfied travelers who have trusted us to plan their perfect trips. Let's make your next adventure the most memorable one yet!
            </p>
        </div>
    );
};

export default About;
