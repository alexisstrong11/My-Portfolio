// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2023 Alexis Strong</p>
          <div className="footer-links">
            <a href="https://github.com/alexisstrong11" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span className="link-space">|</span> 
            <a href="https://linkedin.com/in/alexis-strong3/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span className="link-space">|</span> 
            <a href="mailto:alexis.strong11@yahoo.com">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
