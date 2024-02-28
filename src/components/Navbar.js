import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <input type="text" />
        <a href="/" className="nav-item">
          Catergories
        </a>
        <a href="/about" className="nav-item">
          Website Builders
        </a>
        <a href="/contact" className="nav-item">
          Today's Deals
        </a>
      </div>
    </div>
  );
};

export default Navbar;
