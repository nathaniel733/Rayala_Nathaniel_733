import styles from './AchievementsStyles.module.css';
import patent from '../../assets/patent.jpg';
import sih from '../../assets/sih.jpg';
import startup from '../../assets/startup.jpeg';
import klstartup from '../../assets/klstartup.jpg';
import ProjectCard from '../../common/ProjectCard';
function Achievements() {
  return (
    <section id="footer" className={styles.container}>
      <h1 className="sectionTitle">Achievements</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={patent}
          link="https://www.linkedin.com/posts/rayala-nathaniel-213286229_proud-to-announce-that-our-project-autonomous-activity-7249788072375001088-aph5?utm_source=share&utm_medium=member_desktop"
          h3="Patent publication on Autonomous Target Striking Vehicle [Application No.202441068604]"
          p=""
          demoLink=""
          githubLink=""
          googledrive=""
          linkedinLink="https://www.linkedin.com/posts/rayala-nathaniel-213286229_proud-to-announce-that-our-project-autonomous-activity-7249788072375001088-aph5?utm_source=share&utm_medium=member_desktop"
        />
        <ProjectCard
          src={sih}
          link="https://www.linkedin.com/posts/rayala-nathaniel-213286229_innovation-agriculture-nutrition-activity-7109059647067623425-AVFP?utm_source=share&utm_medium=member_desktop"
          h3="Participated and won 2
nd prize in SRGEC INTERNAL SMART INDIA HACKATHON(SIH-2023)"
          p=""
          demoLink=""
          githubLink=""
          googledrive=""
          linkedinLink="https://www.linkedin.com/posts/rayala-nathaniel-213286229_innovation-agriculture-nutrition-activity-7109059647067623425-AVFP?utm_source=share&utm_medium=member_desktop"
        />
        <ProjectCard
          src={startup}
          link=""
          h3="I held a leadership role in the Startup and Innovation Club. This position involved driving initiatives and fostering a culture of innovation on campus"
          p=""
          demoLink=""
          githubLink=""
          googledrive=""
          linkedinLink=""
        />
        <ProjectCard
          src={klstartup}
          link="https://www.linkedin.com/posts/rayala-nathaniel-213286229_i-really-thank-our-department-coordinators-activity-7054494811927564289--q9C?utm_source=share&utm_medium=member_desktop"
          h3="Participated and won 3rd prize in IDEATHON 2023 conducted by KL Startup Foundation"
          p=""
          demoLink=""
          githubLink=""
          googledrive=""
          linkedinLink="https://www.linkedin.com/posts/rayala-nathaniel-213286229_i-really-thank-our-department-coordinators-activity-7054494811927564289--q9C?utm_source=share&utm_medium=member_desktop"
        />
        </div>
        
    </section>
  );
}

export default Achievements;
