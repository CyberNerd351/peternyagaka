import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Body.module.css';
import Header from './Header';
import Footer from './Footer';

const Body = () => {
  // Animation triggers
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [researchRef, researchInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Project data with external URLs
  const projects = [
    {
      title: "GRAB HUB — Quick Orders. Tasty Rewards",
      description: "Your favorite food, delivered in a snap. Order now and enjoy!",
      tags: ["Reactjs", "Python", "MySql"],
      link: "https://grab-hub-blush.vercel.app/",
      accentColor: "#FF6B6B"
    },
    {
      title: "Richwrld Fashion Collections",
      description: "Fashion is more than just clothing; it's a reflection of who you are",
      tags: ["HTML 5", "CSS", "Bootstrap"],
      link: "https://richwrld-fashion-collections.vercel.app/",
      accentColor: "#4ECDC4"
    }
  ];

  // Skills data
  const skills = [
    { name: "JavaScript", level: 90, icon: "🚀" },
    { name: "Python", level: 95, icon: "🐍" },
    { name: "Kotlin", level: 85, icon: "📱" },
    { name: "Java", level: 88, icon: "☕" }
  ];

  // Personal images
  const personalImages = [
    {
      src: "/images/laptop.jpg",
      alt: "Peter working on laptop",
      position: "left",
      caption: "Developing innovative solutions"
    },
    {
      src: "/images/knowledge.jpg",
      alt: "Peter presenting at conference",
      position: "right",
      caption: "Sharing knowledge with peers"
    },
    {
      src: "/images/peter.jpg",
      alt: "Peter in casual setting",
      position: "center",
      caption: "Enjoying creative thinking"
    }
  ];

  // Animation config
  const fadeInAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  // Function to handle external link clicks
  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Header />
      <main className={styles.body}>
        {/* Background elements */}
        <motion.div 
          className={styles.backgroundCircle1}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            transition: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
        />
        <motion.div 
          className={styles.backgroundCircle2}
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        />

        {/* Hero Section */}
        <section className={styles.hero} id="home">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <motion.div animate={{
              rotate: [0, 2, -2, 0],
              transition: { duration: 10, repeat: Infinity }
            }}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitlePrimary}>Innovating</span>
                <span className={styles.heroTitleSecondary}>Through Code</span>
              </h1>
            </motion.div>
            <motion.p 
              className={styles.heroSubtitle}
              variants={fadeInAnimation}
              transition={{ delay: 0.2 }}
            >
              Computer Scientist specializing in distributed systems and machine learning infrastructure
            </motion.p>
            <motion.div 
              className={styles.heroButtons}
              variants={fadeInAnimation}
              transition={{ delay: 0.4 }}
            >
              <motion.a 
                href="#about"
                className={styles.primaryButton}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(100, 255, 218, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Me
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className={styles.heroIllustration}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className={styles.codeSnippet}>
              <div className={styles.codeLines}>
                {[1, 2, 3, 4, 5].map(i => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                  />
                ))}
              </div>
              <pre>
                {`// Distributed Key-Value Store\n`}
                {`async fn handle_request(&self) -> Result<()> {\n`}
                {`  let consensus = Raft::new(config);\n`}
                {`  consensus.start().await?;\n`}
                {`  Ok(())\n`}
                {`}`}
              </pre>
              <div className={styles.codeGlow} />
            </div>
          </motion.div>
        </section>

        {/* About Me Section */}
        <section id="about" className={styles.section} ref={aboutRef}>
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInAnimation}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionTitleNumber}>01.</span>
              About Me
              <motion.span 
                className={styles.sectionTitleUnderline}
                initial={{ scaleX: 0 }}
                animate={aboutInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </h2>

            <div className={styles.aboutContent}>
              <motion.div
                className={styles.aboutText}
                variants={fadeInAnimation}
                transition={{ delay: 0.2 }}
              >
                <h3>Who I Am</h3>
                <p>
                  Passionate computer scientist with expertise in building scalable systems 
                  and machine learning solutions. I thrive at the intersection of 
                  technology and creativity, solving complex problems with elegant code.
                </p>
                <h3>My Approach</h3>
                <p>
                  I believe in continuous learning and collaboration. Whether working on 
                  personal projects or team initiatives, I focus on creating solutions 
                  that are both technically robust and user-friendly.
                </p>
              </motion.div>

              <div className={styles.imageGallery}>
                {personalImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    className={`${styles.imageContainer} ${styles[image.position]}`}
                    variants={
                      image.position === 'left' ? slideInFromLeft : 
                      image.position === 'right' ? slideInFromRight : fadeInAnimation
                    }
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className={styles.profileImage}
                      whileHover={{ scale: 1.03 }}
                    />
                    <motion.p 
                      className={styles.imageCaption}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {image.caption}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.section} ref={projectsRef}>
          <motion.div
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={fadeInAnimation}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionTitleNumber}>02.</span>
              Featured Projects
            </h2>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  className={styles.projectCard}
                  initial="hidden"
                  animate={projectsInView ? "visible" : "hidden"}
                  variants={fadeInAnimation}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  style={{ '--accent-color': project.accentColor }}
                >
                  <div className={styles.projectHeader}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className={styles.projectTags}>
                    {project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <motion.button
                    className={styles.projectLink}
                    onClick={() => handleProjectClick(project.link)}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    View Details →
                  </motion.button>
                  <div className={styles.projectHoverEffect} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={styles.section} ref={skillsRef}>
          <motion.div
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            variants={fadeInAnimation}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionTitleNumber}>03.</span>
              Technical Skills
            </h2>
            <div className={styles.skillsContainer}>
              <motion.div 
                className={styles.skillsRadar}
                initial={{ rotate: 0 }}
                animate={skillsInView ? { rotate: 360 } : {}}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className={styles.radarSweep} />
                {skills.map((skill, i) => (
                  <div 
                    key={skill.name}
                    className={styles.radarPoint}
                    style={{
                      '--angle': `${i * 90}deg`,
                      '--distance': '70px'
                    }}
                  >
                    <span>{skill.icon}</span>
                  </div>
                ))}
              </motion.div>
              <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    initial="hidden"
                    animate={skillsInView ? "visible" : "hidden"}
                    variants={fadeInAnimation}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={styles.skillIcon}>{skill.icon}</div>
                    <div className={styles.skillInfo}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        style={{ backgroundColor: `hsl(${index * 90}, 80%, 60%)` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Research Section */}
        <section id="research" className={styles.section} ref={researchRef}>
          <motion.div
            initial="hidden"
            animate={researchInView ? "visible" : "hidden"}
            variants={fadeInAnimation}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionTitleNumber}>04.</span>
              Research & Publications
            </h2>
            <div className={styles.papersList}>
              <motion.div 
                className={styles.paperCard}
                whileHover={{ scale: 1.02 }}
              >
                <h3>"Optimizing Neural Networks for Edge Devices"</h3>
                <p className={styles.paperMeta}>
                  <span>NeurIPS 2023</span>
                  <span>Doe, J., et al.</span>
                </p>
                <p className={styles.paperAbstract}>
                  Presented a novel quantization technique reducing model size by 60% while maintaining 98% accuracy...
                </p>
                <div className={styles.paperLinks}>
                  {['PDF', 'BibTeX', 'Code'].map((link, i) => (
                    <motion.a 
                      key={link}
                      href="#"
                      whileHover={{ y: -3 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                      style={{ transitionDelay: `${i * 0.1}s` }}
                    >
                      {link}
                    </motion.a>
                  ))}
                </div>
                <div className={styles.paperCorner} />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Body;