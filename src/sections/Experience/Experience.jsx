import styles from './ExperienceStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import nic from '../../assets/nic.png';
import smart from '../../assets/smartinternz_thumb.png';
function Experience() {
  return (
    <section id="Experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={nic}
          link="https://www.linkedin.com/posts/rayala-nathaniel-213286229_techjourney-innovation-firstproject-activity-7201544576434647040-AD39?utm_source=share&utm_medium=member_desktop"
          h3="NIC (National Informatics Centre) – Web Development Intern - May 2023 – June 2023"
          p="Completed an internship at NIC, gaining hands-on experience in cybersecurity and web development. My role involved
raisingawareness about cyber threats and educating the public on cybersecurity measures.
• Web Interface Development
• Detailed Presentation and Awareness on Cyber Threats"
          demoLink=""
          githubLink=""
          googledrive=""
          linkedinLink="https://www.linkedin.com/posts/rayala-nathaniel-213286229_techjourney-innovation-firstproject-activity-7201544576434647040-AD39?utm_source=share&utm_medium=member_desktop"
        />
         <ProjectCard
          src={smart}
          link="https://drive.google.com/file/d/1UeZ6--GYqlsutO5NH4E16utIi2ugK3EZ/view?usp=sharing"
          h3="SmartInternz – MERN Stack Developer Intern - May 2024 – June 2024"
          p="Completed an internship at SmartInternz, where I worked on full-stack web development using the MERN stack.
Gainedproficiency in building dynamic and responsive web applications and received certification in MongoDB.<br>
• Full-Stack Development
• MongoDB Certification (Beginner)"
          demoLink=""
          githubLink=""
          googledrive="https://drive.google.com/file/d/1UeZ6--GYqlsutO5NH4E16utIi2ugK3EZ/view?usp=sharing"
          linkedinLink=""
        />
        </div>
    </section>
  );
}

export default Experience;
