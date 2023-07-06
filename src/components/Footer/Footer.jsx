import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaEnvelope, FaGithub, FaTelegram, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://www.linkedin.com/in/shivam-pandey-a99296213/">
        <FaLinkedin className={styles.socialicon} />
      </a>
      <a href="https://t.me/+XnYVyy58nNtkMTg1">
        <FaTelegram className={styles.socialicon} />
      </a>
      <a href="mailto:shivampandey2903@gmail.com">
        <FaEnvelope className={styles.socialicon} />
      </a>
      <a href="https://github.com/shivam201483101">
        <FaGithub className={styles.socialicon} />
      </a>
      <a href="https://instagram.com/shivam_.2915?igshid=zguzmzm3nwjioq==">
        <FaInstagram className={styles.socialicon} />
      </a>
      <p>
        Designed &amp; Developed with ❤️ by 
        <a href="https://www.linkedin.com/in/shivam-pandey-a99296213/"> Shivam Pandey </a>
      </p>
    </div>
  );
};

export default Footer;
