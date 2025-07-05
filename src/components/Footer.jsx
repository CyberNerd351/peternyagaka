import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

// Social media links data with icons and colors
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/CyberNerd351',
    icon: '/images/github-icon.jpg', // Updated path
    hoverColor: '#333' // GitHub brand color
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/peter-n-99a0931b5/',
    icon: '/images/linkedin-icon.jpg', // Updated path
    hoverColor: '#0077b5' // LinkedIn brand color
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/nyagaka873101',
    icon: '/images/twitter-icon.jpg', // Updated path
    hoverColor: '#1da1f2' // Twitter brand color
  },
  {
    name: 'Email',
    url: 'mailto:peternyagaka5@gmail.com',
    icon: '/images/email-icon.jpg', // Updated path
    hoverColor: '#d44638' // Gmail brand color
  }
];

const Footer = () => {
  // Get current year for copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* ===== TOP SECTION ===== */}
        <motion.div 
          className={styles.footerTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Branding section */}
          <div className={styles.footerBrand}>
            <h3 className={styles.footerLogo}>CS_PORTFOLIO</h3>
            <p className={styles.footerTagline}>Building innovative solutions through code</p>
          </div>

          {/* Navigation links */}
          <div className={styles.footerLinks}>
            {/* Explore links column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.linkHeading}>Explore</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#research">Research</a></li>
              </ul>
            </div>

            {/* Connect links column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.linkHeading}>Connect</h4>
              <ul>
                <Link to="/contact">Contact</Link>
                <hr />
                <li><a href="https://www.instagram.com/rich.com68/">Blog</a></li>
                <hr />
                <Link to="/resume">Resume</Link>
                <hr />
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ===== DIVIDER LINE ===== */}
        <div className={styles.footerDivider}></div>

        {/* ===== BOTTOM SECTION ===== */}
        <div className={styles.footerBottom}>
          {/* Copyright notice */}
          <p className={styles.copyright}>
            © {currentYear} Peter Nyagaka. All rights reserved.
          </p>
          
          {/* Social media links with visible names */}
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <motion.div 
                key={link.name}
                className={styles.socialLinkContainer}
                whileHover={{ 
                  y: -3
                }}
              >
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  style={{ '--hover-color': link.hoverColor }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  <img 
                    src={link.icon} 
                    alt={`${link.name} icon`} 
                    width="24" 
                    height="24"
                    className={styles.socialIcon}
                  />
                </motion.a>
                <span className={styles.socialLinkName}>{link.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;