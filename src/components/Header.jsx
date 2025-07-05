import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Effect for scroll behavior
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Research', path: '/research' },
    { name: 'Contact', path: '/contact' }
  ];

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' }
  };

  const linkVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        {/* Logo with subtle animation */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <Link to="/" className={styles.logo}>
            <span className={styles.logoPrimary}>PeterNyagaka</span>
            <span className={styles.logoSecondary}>DEV</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to={link.path}
                    className={`${styles.navLink} ${
                      location.pathname === link.path ? styles.active : ''
                    }`}
                  >
                    {link.name}
                    <motion.span 
                      className={styles.navUnderline}
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: location.pathname === link.path ? 1 : 0,
                        backgroundColor: location.pathname === link.path ? 
                          'var(--primary-color)' : 'var(--text-color)'
                      }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className={`${styles.menuButton} ${mobileMenuOpen ? styles.open : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className={styles.menuButtonBar}
              animate={
                mobileMenuOpen 
                  ? i === 0 
                    ? { rotate: 45, y: 7 } 
                    : i === 1 
                      ? { opacity: 0 } 
                      : { rotate: -45, y: -7 }
                  : {}
              }
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className={styles.mobileNav}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: 'tween', ease: 'easeInOut' }}
            >
              <ul className={styles.mobileNavList}>
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    variants={linkVariants}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link 
                      to={link.path}
                      className={`${styles.mobileNavLink} ${
                        location.pathname === link.path ? styles.active : ''
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                      {location.pathname === link.path && (
                        <motion.span 
                          className={styles.mobileNavActiveIndicator}
                          layoutId="mobileActiveIndicator"
                          transition={{ type: 'spring', stiffness: 500 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;