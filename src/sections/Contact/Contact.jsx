import styles from './ContactStyles.module.css';
import gmail from '../../assets/gmail.png';
import ProjectCard from '../../common/ProjectCard';
import linkedin from '../../assets/linkedin.png';
function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
       <ProjectCard
          src={gmail}
          link="https://mail.google.com/mail/?view=cm&fs=1&to=your-nathanielrayala@gmail.com
"
          h3=""
          p=""
          demoLink=""
          githubLink=""
          googledrive=""
          linkedinLink=""
        /><br></br>
        <br></br>
        <ProjectCard
          src={linkedin}
          link="https://www.linkedin.com/in/rayala-nathaniel-213286229/"
          h3=""
          p=""
          demoLink=""
          githubLink=""
          googledrive=""
          linkedinLink=""
        />
    </section>
  );
}

export default Contact;
