import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="social-links">
          <h3>Connect with Me</h3>
          <div className="social-icon">
            <a href="https://twitter.com/jksharma_jatin" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://github.com/mrtitaniumj" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/jatin-sharma-82121217a/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Jatin Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
