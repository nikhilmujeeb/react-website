import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Your Travel Planner</h1>
            <p className="home-description">
                Ready to explore the world? Plan your next adventure with ease! Discover new destinations, find the best deals, and create your personalized travel itinerary with our all-in-one travel planning platform.
            </p>
            <p className="home-description">
                Whether you're looking for exotic beach vacations, thrilling city breaks, or relaxing countryside retreats, we've got you covered. Our platform offers comprehensive guides, travel tips, and real-time updates to help you make the most out of your travels.
            </p>
            <Link to="/countries" className="home-button">Start Planning Your Trip</Link>
        </div>
    );
};

export default Home;
