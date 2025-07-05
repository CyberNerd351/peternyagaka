import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';

const Skills = () => {
  // Viewport observer for animations
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Skills data with icons and colors
  const skillsData = [
    { name: 'JavaScript', level: 90, icon: 'JS', color: '#F0DB4F' },
    { name: 'React', level: 88, icon: '⚛️', color: '#61DAFB' },
    { name: 'Python', level: 85, icon: '🐍', color: '#3776AB' },
    { name: 'Node.js', level: 82, icon: '🟢', color: '#68A063' },
    { name: 'HTML5', level: 95, icon: '📄', color: '#E34F26' },
    { name: 'CSS3', level: 90, icon: '🎨', color: '#2965F1' },
    { name: 'TypeScript', level: 80, icon: 'TS', color: '#3178C6' },
    { name: 'MongoDB', level: 78, icon: '🍃', color: '#47A248' },
    { name: 'Git', level: 85, icon: '⎇', color: '#F05032' },
    { name: 'Docker', level: 75, icon: '🐳', color: '#2496ED' },
    { name: 'AWS', level: 70, icon: '☁️', color: '#FF9900' },
    { name: 'GraphQL', level: 72, icon: '📊', color: '#E10098' }
  ];

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 0.3
      }
    })
  };

  return (
    <section id="skills" className={styles.skillsSection} ref={ref}>
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
            Technical Skills
          </h2>
          <p className={styles.sectionSubtitle}>
            Technologies I've worked with and my proficiency levels
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillsData.map((skill) => (
            <SkillCard 
              key={skill.name}
              skill={skill}
              variants={itemVariants}
              progressVariants={progressVariants}
              inView={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Skill Card Component
const SkillCard = ({ skill, variants, progressVariants, inView }) => {
  return (
    <motion.div
      className={styles.skillCard}
      variants={variants}
      whileHover={{ y: -5 }}
    >
      <div className={styles.skillHeader}>
        <div 
          className={styles.skillIcon}
          style={{ backgroundColor: skill.color }}
        >
          {skill.icon}
        </div>
        <h3 className={styles.skillName}>{skill.name}</h3>
        <span className={styles.skillLevel}>{skill.level}%</span>
      </div>
      
      <div className={styles.progressBar}>
        <motion.div
          className={styles.progressFill}
          style={{ backgroundColor: skill.color }}
          variants={progressVariants}
          custom={skill.level}
          animate={inView ? "visible" : "hidden"}
        />
      </div>
    </motion.div>
  );
};

export default Skills;