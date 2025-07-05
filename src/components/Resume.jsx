import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Resume.module.css';

const Resume = () => {
  // Viewport observer for animations
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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

  const progressVariants = (level) => ({
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 0.3
      }
    }
  });

  // Skills data
  const skills = [
    { name: 'React.js', level: 85, color: '#61DAFB' },
    { name: 'JavaScript', level: 80, color: '#F0DB4F' },
    { name: 'Python', level: 75, color: '#3776AB' },
    { name: 'Flask', level: 70, color: '#000000' },
    { name: 'MySQL', level: 75, color: '#4479A1' },
    { name: 'HTML5', level: 90, color: '#E34F26' },
    { name: 'CSS3', level: 85, color: '#2965F1' },
    { name: 'Kotlin', level: 65, color: '#7F52FF' }
  ];

  // Personal info data
  const personalInfo = [
    { label: 'Gender', value: 'Male' },
    { label: 'Marital Status', value: 'Single' },
    { label: 'Languages', value: 'English, Kiswahili' }
  ];

  // Contact info data
  const contactInfo = [
    { label: 'Email', value: 'peternyagaka5@gmail.com' },
    { label: 'Phone', value: '+254 705558627' },
    { label: 'Location', value: 'Nairobi, Kenya' }
  ];

  // Experience data
  const experience = {
    title: 'Full Stack Engineer Intern',
    period: '2024 - Present',
    company: 'Modcom Institute of Technology',
    responsibilities: [
      'Developed and maintained web applications using React.js and Flask',
      'Collaborated with team members to implement new features',
      'Optimized application performance and user experience',
      'Participated in code reviews and debugging sessions'
    ]
  };

  // Education data
  const education = [
    {
      title: 'Full Stack Development Certificate',
      period: '2024 - 2025',
      company: 'Modcom Institute of Technology',
      details: [
        'Completed intensive training in web development',
        'Learned frontend (HTML, CSS, JavaScript, React) and backend (Python, Flask, MySQL) technologies',
        'Developed multiple projects showcasing full stack capabilities'
      ]
    },
    {
      title: 'High School (KCSE B-)',
      period: '2021 - 2024',
      company: '',
      details: []
    }
  ];

  // Reference data
  const reference = {
    name: 'Bridgit Amakove',
    position: 'Trainer, Modcom Institute of Technology',
    contact: 'Phone: +254 XXX XXX XXX'
  };

  return (
    <section id="resume" className={styles.resumeSection} ref={ref}>
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
            My Resume
          </h2>
          <p className={styles.sectionSubtitle}>
            Education, Experience & Skills
          </p>
        </motion.div>

        <div className={styles.resumeGrid}>
          {/* Left Column */}
          <motion.div
            className={styles.resumeColumn}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Personal Info Card */}
            <ResumeCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
              }
              title="Personal Info"
              variants={itemVariants}
            >
              {personalInfo.map((info, index) => (
                <InfoItem key={index} label={info.label} value={info.value} />
              ))}
            </ResumeCard>

            {/* Contact Card */}
            <ResumeCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              }
              title="Contact"
              variants={itemVariants}
            >
              {contactInfo.map((info, index) => (
                <InfoItem key={index} label={info.label} value={info.value} />
              ))}
            </ResumeCard>

            {/* Skills Card */}
            <ResumeCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              }
              title="Skills"
              variants={itemVariants}
            >
              {skills.map((skill) => (
                <SkillItem 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  progressVariants={progressVariants}
                  inView={inView}
                />
              ))}
            </ResumeCard>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className={styles.resumeColumn}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Experience Card */}
            <ResumeCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
              }
              title="Experience"
              variants={itemVariants}
            >
              <TimelineItem 
                title={experience.title}
                period={experience.period}
                company={experience.company}
                items={experience.responsibilities}
              />
            </ResumeCard>

            {/* Education Card */}
            <ResumeCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              }
              title="Education"
              variants={itemVariants}
            >
              {education.map((edu, index) => (
                <TimelineItem 
                  key={index}
                  title={edu.title}
                  period={edu.period}
                  company={edu.company}
                  items={edu.details}
                />
              ))}
            </ResumeCard>

            {/* References Card */}
            <ResumeCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              }
              title="References"
              variants={itemVariants}
            >
              <ReferenceItem 
                name={reference.name}
                position={reference.position}
                contact={reference.contact}
              />
            </ResumeCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Sub-components
const ResumeCard = ({ icon, title, children, variants }) => (
  <motion.div className={styles.resumeCard} variants={variants}>
    <div className={styles.cardHeader}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
    <div className={styles.cardContent}>
      {children}
    </div>
  </motion.div>
);

const InfoItem = ({ label, value }) => (
  <div className={styles.infoItem}>
    <span className={styles.infoLabel}>{label}:</span>
    <span className={styles.infoValue}>{value}</span>
  </div>
);

const SkillItem = ({ name, level, color, progressVariants, inView }) => (
  <div className={styles.skillItem}>
    <div className={styles.skillInfo}>
      <span className={styles.skillName}>{name}</span>
      <span className={styles.skillPercent}>{level}%</span>
    </div>
    <div className={styles.progressBar}>
      <motion.div
        className={styles.progressFill}
        style={{ backgroundColor: color }}
        variants={progressVariants(level)}
        animate={inView ? "visible" : "hidden"}
      />
    </div>
  </div>
);

const TimelineItem = ({ title, period, company, items }) => (
  <div className={styles.timelineItem}>
    <div className={styles.timelineMarker}></div>
    <div className={styles.timelineContent}>
      <h4 className={styles.timelineTitle}>{title}</h4>
      <div className={styles.timelinePeriod}>{period}</div>
      {company && <div className={styles.timelineCompany}>{company}</div>}
      {items.length > 0 && (
        <ul className={styles.timelineList}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const ReferenceItem = ({ name, position, contact }) => (
  <div className={styles.referenceItem}>
    <h4 className={styles.referenceName}>{name}</h4>
    <div className={styles.referencePosition}>{position}</div>
    <div className={styles.referenceContact}>{contact}</div>
  </div>
);

export default Resume;