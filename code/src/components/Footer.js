import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-media-container">
        <a className="icon" href="https://www.linkedin.com/in/fridanordenlow/" aria-label="Link to Fridas Linked In page">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a className="icon" href="https://github.com/fridanordenlow" aria-label="Link to Fridas Github page">
          <i className="fa-brands fa-github" />
        </a>
        <a className="icon" href="mailto:frida.nordenlow@hotmail.com" aria-label="Link to send an email to Frida">
          <i className="fa-solid fa-envelope" />
        </a>
      </div>
      <p className="footer-text">Designed by Frida Nordenlöw</p>
      <p className="footer-text">Technigo Web Development Boot Camp 2023</p>
    </div>
  )
}

export default Footer;