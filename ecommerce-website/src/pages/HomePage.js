// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to Our E-Clothing Site</h1>
      <p className="site-description">
        Discover a world of fashion, footwear, and accessories at unbeatable prices. 
        Whether you're shopping for the latest trends or timeless classics, we've got 
        you covered. Our store offers a curated selection of men's and women's clothing, 
        footwear, and accessories to match your style. Start exploring now and enjoy a 
        seamless shopping experience with us!
      </p>
      <p>Explore our categories:</p>
      <ul>
        <li><Link to="/products/men's clothing">Men's Clothing</Link></li>
        <li><Link to="/products/women's clothing">Women's Clothing</Link></li>
        <li><Link to="/products/men's footwear">Men's Footwear</Link></li>
        <li><Link to="/products/women's footwear">Women's Footwear</Link></li>
        <li><Link to="/products/accessories">Accessories</Link></li>
      </ul>
    </div>
  );
}

export default HomePage;
