import React from 'react';
import { GrFacebook, GrTwitter, GrInstagram, GrYoutube } from 'react-icons/gr';

import './styles.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-socials">
        <GrFacebook size={25} />
        <GrInstagram size={25} />
        <GrTwitter size={25} />
        <GrYoutube size={30} />
      </section>

      <ul className="footer-links">
        <li>Audio and Subtitles</li>
        <li>Media Center</li>
        <li>Privacy</li>
        <li>Contact Us</li>
        <li>Audio Description</li>
        <li>Investor Relatinos</li>
        <li>Legal Notices</li>
        <li>Help Center</li>
        <li>Jobs</li>
        <li>Cookie Preferences</li>
        <li>Gift Cards</li>
        <li>Terms of Use</li>
        <li>Corporate Information</li>
      </ul>

      <div className="footer-service">
        <button className="service-code">Service Code</button>
      </div>

      <div className="footer-copyright">
        <span>Netflix, Inc.&lrm;</span>
      </div>
    </footer>
  );
};

export default Footer;
