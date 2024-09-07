// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

function Navbar() {
  // Get cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">E-Clothing</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/products/men's clothing">Men's Clothing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products/women's clothing">Women's Clothing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products/men's footwear">Men's Footwear</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products/women's footwear">Women's Footwear</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products/accessories">Accessories</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link> {/* Correct Login Link */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Cart <span className="badge badge-pill badge-primary">{cartCount}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
