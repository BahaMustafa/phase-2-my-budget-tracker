import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <p>&copy; {year} BudgetTracker. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
