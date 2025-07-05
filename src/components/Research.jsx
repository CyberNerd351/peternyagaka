import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Research.module.css';

const Research = () => {
  // Viewport observer for animations
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // State for active tab
  const [activeTab, setActiveTab] = useState('current');

  // Research data organized by tabs
  const researchData = {
    current: [
      {
        id: 1,
        title: 'AI-Powered Web Development Tools',
        description: 'Exploring how artificial intelligence can streamline frontend development workflows and automate repetitive tasks.',
        status: 'Ongoing',
        technologies: ['AI/ML', 'React', 'Python'],
        image: '/images/ai-web.jpg',
        link: '#',
        date: '2023 - Present'
      },
      {
        id: 2,
        title: 'Progressive Web Apps in Emerging Markets',
        description: 'Investigating the performance and user adoption of PWAs in areas with limited internet connectivity.',
        status: 'Data Collection',
        technologies: ['PWA', 'React', 'Firebase'],
        image: '/images/pwa-research.jpg',
        link: '#',
        date: '2023 - Present'
      }
    ],
    past: [
      {
        id: 3,
        title: 'Blockchain for Digital Identity Verification',
        description: 'Researched decentralized identity solutions using blockchain technology for secure user authentication.',
        status: 'Completed',
        technologies: ['Blockchain', 'Solidity', 'Web3.js'],
        image: '/images/blockchain-id.jpg',
        link: '#',
        date: '2022',
        findings: 'Published paper in IEEE Transactions'
      },
      {
        id: 4,
        title: 'Accessibility in Modern Web Frameworks',
        description: 'Comparative analysis of accessibility features across React, Vue, and Angular applications.',
        status: 'Completed',
        technologies: ['React', 'Vue', 'Angular', 'a11y'],
        image: '/images/ally-research.jpg',
        link: '#',
        date: '2021',
        findings: 'Presented at Nairobi Tech Conference'
      }
    ]
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -5,
      boxShadow: '0 15px 30px -10px rgba(100, 255, 218, 0.3)',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  // Event handlers
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="research" className={styles.researchSection} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}></span>
            Research & Exploration
          </h2>
          <p className={styles.sectionSubtitle}>
            My ongoing and past investigations into emerging technologies
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className={styles.tabs}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            className={`${styles.tabButton} ${activeTab === 'current' ? styles.active : ''}`}
            onClick={() => handleTabChange('current')}
          >
            Current Research
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'past' ? styles.active : ''}`}
            onClick={() => handleTabChange('past')}
          >
            Past Projects
          </button>
        </motion.div>

        {/* Research Grid */}
        <motion.div
          className={styles.researchGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {researchData[activeTab].map((research) => (
            <ResearchCard 
              key={research.id}
              research={research}
              variants={itemVariants}
              hoverVariants={hoverVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Research Card Component
const ResearchCard = ({ research, variants, hoverVariants }) => {
  return (
    <motion.div
      className={styles.researchCard}
      variants={variants}
      whileHover="hover"
    >
      {/* Research Image */}
      <div className={styles.cardImage}>
        <img src={research.image} alt={research.title} />
        <div className={styles.imageOverlay} />
        <div className={styles.statusBadge} data-status={research.status.toLowerCase()}>
          {research.status}
        </div>
      </div>
      
      {/* Research Content */}
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.researchTitle}>{research.title}</h3>
          <span className={styles.researchDate}>{research.date}</span>
        </div>
        
        <p className={styles.researchDescription}>{research.description}</p>
        
        {/* Technology Tags */}
        <div className={styles.techTags}>
          {research.technologies.map(tech => (
            <span key={tech} className={styles.techTag}>{tech}</span>
          ))}
        </div>

        {/* Research Findings */}
        {research.findings && (
          <div className={styles.findings}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span>{research.findings}</span>
          </div>
        )}
        
        {/* Learn More Link */}
        <a 
          href={research.link} 
          className={styles.researchLink}
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn More →
        </a>
      </div>
    </motion.div>
  );
};

export default Research;