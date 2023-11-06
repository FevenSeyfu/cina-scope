import React from 'react';
import '../../Assets/css/Footer.css'; 
import { Icon } from 'semantic-ui-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} CineScope. All rights reserved.</p>
        <div className="social-links">
          <a href="mailto:fevensey@gmail.com">
            <Icon circular inverted name='mail' size='large' />
          </a>
          <a href="https://www.linkedin.com/in/fevenseyfu/">
            <Icon circular inverted name='linkedin' size='large' />
          </a>
          <a href="https://wellfound.com/u/feven-seyfu">
            <Icon circular inverted name='angellist' size='large' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
