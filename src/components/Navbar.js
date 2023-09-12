// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add Expense</Link>
      {/* Add more links as needed */}
    </nav>
  );
}

export default Navbar;