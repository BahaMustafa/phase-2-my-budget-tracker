// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/add">Add Expense</Link>
      <Link to="/categories">Categories</Link> 
    </nav>
  );
}

export default Navbar;
