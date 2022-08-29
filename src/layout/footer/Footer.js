import React from 'react';
import { FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <p className="left">
        Subscribe to my{' '}
        <a href="https://www.youtube.com/c/anisulislamrubel">
          <FaYoutube className="footer__icon" />
        </a>{' '}
        channel
      </p>
      <p className="right">Developed with &hearts; by Anisul Islam</p>
    </footer>
  );
};

export default Footer;
