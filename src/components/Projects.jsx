import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Projects.module.css';

const Projects = () => {
  // Viewport observer for animations
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // State for filtering projects
  const [activeFilter, setActiveFilter] = useState('All');

  // Project data with actual links
  const projectsData = [
    {
      id: 1,
      title: 'Grab Hub',
      description: 'Full-featured online store with payment integration, inventory management, and admin dashboard.',
      category: 'Full-Stack',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/images/ecommerce.jpg',
      github: 'https://github.com/CyberNerd351/Grab_Hub/',
      live: 'https://grab-hub-blush.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Richwrld Fashion Collections',
      description: 'Modern, responsive website with animations and dark/light mode.',
      category: 'Frontend',
      tags: ['React', 'Framer Motion', 'CSS Modules'],
      image: '/images/portfolio.jpg',
      github: 'https://github.com/CyberNerd351/RichwrldFashionCollections',
      live: 'https://richwrld-fashion-collections.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Productivity app with drag-and-drop functionality and team collaboration.',
      category: 'Mobile',
      tags: ['React Native', 'Firebase', 'Redux'],
      image: '/images/taskapp.jpg',
      github: 'https://github.com/CyberNerd351/todo',
      live: 'https://todo-opal-phi.vercel.app/',
      featured: false
    }
  ];

  // Available project categories
  const projectCategories = ['All', 'Frontend', 'Full-Stack', 'Mobile'];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

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
      y: -10,
      boxShadow: '0 20px 30px -15px rgba(100, 255, 218, 0.3)',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const scaleVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  // Event handlers
  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  return (
    <section id="projects" className={styles.projectsSection} ref={ref}>
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
            My Projects
          </h2>
          <p className={styles.sectionSubtitle}>
            A selection of my recent work with live demos and code
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className={styles.filters}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {projectCategories.map(category => (
            <button
              key={category}
              className={`${styles.filterButton} ${activeFilter === category ? styles.active : ''}`}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              variants={itemVariants}
              hoverVariants={hoverVariants}
              scaleVariants={scaleVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, variants, hoverVariants, scaleVariants }) => {
  return (
    <motion.div
      className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
      variants={variants}
      whileHover="hover"
    >
      {/* Project Image */}
      <motion.div 
        className={styles.projectImage}
        variants={scaleVariants}
      >
        <img src={project.image} alt={project.title} />
        <div className={styles.imageOverlay} />
        {project.featured && (
          <div className={styles.featuredBadge}>Featured</div>
        )}
      </motion.div>
      
      {/* Project Content */}
      <div className={styles.projectContent}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <span className={styles.projectCategory}>{project.category}</span>
        </div>
        
        <p className={styles.projectDescription}>{project.description}</p>
        
        {/* Project Tags */}
        <div className={styles.projectTags}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        
        {/* Project Links */}
        <div className={styles.projectLinks}>
          <ProjectLink 
            href={project.github}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            }
            text="Code"
          />
          <ProjectLink 
            href={project.live}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            }
            text="Live Demo"
          />
        </div>
      </div>
    </motion.div>
  );
};

// Project Link Component
const ProjectLink = ({ href, icon, text }) => {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.link}
      whileHover={{ 
        backgroundColor: '#64ffda',
        color: '#0a192f'
      }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      {text}
    </motion.a>
  );
};

export default Projects;