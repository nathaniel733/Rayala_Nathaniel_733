import styles from './ProjectsStyles.module.css';
import sleepdetector from '../../assets/Sleep_Detector.jpg';
import defencevehicle from '../../assets/Autonomous_TargetStriking_Vehicle.jpg';
import cropsyn from '../../assets/Crop_Sync.jpg';
import voicesentiment from '../../assets/Voice_Sentiment_Analysis.jpg';
import edvise from '../../assets/Edvise.jpg';
import coverletter from '../../assets/Voice_Cover_Letter_Analyzer.jpg';
import fertilizer from '../../assets/Fertilizer_Spraying_Vehicle.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  



  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={sleepdetector}
          link="https://www.linkedin.com/posts/rayala-nathaniel-213286229_techjourney-innovation-firstproject-activity-7201544576434647040-AD39?utm_source=share&utm_medium=member_desktop"
          h3="Sleep Detector"
          p="The Sleep Detector is a driver assistance system designed to prevent accidents caused by drowsiness. It uses sensors to monitor the driver's eye movements and head position, identifying signs of fatigue or sleep. When drowsiness is detected, the system triggers alerts to help the driver stay awake or safely pull over. This project aims to improve road safety by reducing the risk of accidents due to driver inattention, especially during long trips or late-night driving."
          demoLink="https://sleep-detector.demo.com"
          githubLink="https://github.com/nathaniel733/Sleep-Detector-.git"
          googledrive=""
          linkedinLink="https://www.linkedin.com/posts/rayala-nathaniel-213286229_techjourney-innovation-firstproject-activity-7201544576434647040-AD39?utm_source=share&utm_medium=member_desktop"
          
        />
          <ProjectCard
          src={defencevehicle}
          link="https://www.linkedin.com/posts/rayala-nathaniel-213286229_proud-to-announce-that-our-project-autonomous-activity-7249788072375001088-aph5?utm_source=share&utm_medium=member_desktop"
          h3="Autonomous Target Striking Vehicle"
          p="The Autonomous Target Striking Vehicle is an unmanned vehicle prototype designed for military and defense applications. Equipped with advanced sensors, navigation systems, and target-detection technology, the vehicle can autonomously identify and engage specified targets. It uses computer vision and real-time data processing to ensure precision and reliability in various environments. This project demonstrates the potential for autonomous vehicles to assist in strategic defense operations, reducing the need for direct human involvement in high-risk zones."
          demoLink="https://sleep-detector.demo.com"
          githubLink="https://github.com/nathaniel733/Autonomous-Target-Striking-Vehicle.git"
          googledrive=""
          linkedinLink="https://www.linkedin.com/posts/rayala-nathaniel-213286229_proud-to-announce-that-our-project-autonomous-activity-7249788072375001088-aph5?utm_source=share&utm_medium=member_desktop"
          
        />
        <ProjectCard
          src={fertilizer}
          link="https://www.linkedin.com/posts/rayala-nathaniel-213286229_passionate-about-revolutionizing-agriculture-activity-7079133001405640704-lnaf?utm_source=share&utm_medium=member_desktop"
          h3="Autonomous Fertilizer Spraying Vehicle"
          p="The Autonomous Fertilizer Spraying Vehicle is an innovative agricultural machine designed to optimize the fertilization process without human intervention. This vehicle navigates through crop fields autonomously, using sensors and GPS to maintain precise positioning. Equipped with a smart spraying mechanism, it detects areas that need fertilization and applies the appropriate amount, reducing waste and enhancing crop health. This project aims to support sustainable farming by automating a crucial aspect of crop management, thereby saving time, labor, and resources for farmers."
          demoLink="https://sleep-detector.demo.com"
          githubLink="https://github.com/nathaniel733/Autonomous-Fertilizer-Spraying-Vehicle.git"
          googledrive=""
          linkedinLink="https://www.linkedin.com/posts/rayala-nathaniel-213286229_passionate-about-revolutionizing-agriculture-activity-7079133001405640704-lnaf?utm_source=share&utm_medium=member_desktop"
          
        />
        <ProjectCard
          src={cropsyn}
          link="https://github.com/nathaniel733/CropSync.git"
          h3="Crop Sync"
          p="The Soil Nutrition Management and Smart Drip Irrigation system is a comprehensive agricultural solution that monitors and maintains soil health. This system includes sensors to measure soil nutrient levels and moisture, feeding real-time data to an integrated web interface. The data allows for accurate assessment of soil fertility, enabling predictive analysis to maintain nutrient balance. Additionally, a smart drip irrigation setup is employed, automatically adjusting water delivery based on soil moisture needs. This project aims to enhance crop yield, promote efficient water usage, and reduce manual effort, supporting sustainable and data-driven farming practices."
          demoLink="https://sleep-detector.demo.com"
          githubLink="https://github.com/nathaniel733/CropSync.git"
          googledrive=""
          linkedinLink="https://www.linkedin.com/posts/rayala-nathaniel-213286229_agriculturetechnology-sustainablefarming-activity-7247291464026574850-hn-N?utm_source=share&utm_medium=member_desktop"
          
        />
        <ProjectCard
          src={voicesentiment}
          link="https://github.com/nathaniel733/Voice_Sentiment_Analysis.git"
          h3="Voice Sentiment Analysis System"
          p="The Voice Sentiment Analysis System is an advanced tool designed to analyze audio data and determine the emotional sentiment conveyed. By utilizing speech processing and natural language techniques, the system detects tonal cues like pitch, pace, and intensity to classify emotions such as happiness, sadness, anger, and more. This technology has applications in customer service, mental health analysis, and user experience improvement, where understanding emotional context is key. This project demonstrates the potential of audio sentiment analysis to enhance human-computer interaction by recognizing and responding to users' emotions accurately."
          demoLink=""
          githubLink="https://github.com/nathaniel733/Voice_Sentiment_Analysis.git"
          googledrive=""
          linkedinLink=""
        
        />
        <ProjectCard
          src={edvise}
          link="https://github.com/rohitprofc/edvice-app"
          h3="Edvise"
          p="Edvise is a web application designed to connect skilled students with enthusiastic learners, fostering a collaborative educational environment. This platform allows students to enroll, showcase their skills, and share knowledge with peers who wish to learn. By creating a space exclusively for students, Edvise promotes peer-to-peer learning, skill development, and mentorship among students across various fields. The project aims to empower students to become both learners and mentors, enhancing their skills through mutual support and knowledge sharing within an interactive online community."
          demoLink="https://sleep-detector.demo.com"
          githubLink="https://github.com/rohitprofc/edvice-app"
          googledrive=""
          linkedinLink=""
        />
        <ProjectCard
          src={coverletter}
          link="https://github.com/nathaniel733/Voice_Cover_letter_Analyzer.git"
          h3="Video Cover Letter Analyser and Resume Parser"
          p="The Video Cover Letter Analyzer and Resume Parser is a web-based tool designed to assist recruiters in efficiently screening candidates. In this platform, candidates upload a video cover letter, from which the audio is extracted and converted to text. The system then uses natural language processing to identify key points and generate a concise summary of the candidate's message. Alongside this, the Resume Parser extracts essential information from resumes, such as contact details, skills, experience, and project highlights. This tool provides recruiters with a streamlined view of each candidate's qualifications and communication style, enhancing the effectiveness of the initial screening process by automating analysis and summarization."
          demoLink="https://sleep-detector.demo.com"
          githubLink="https://github.com/nathaniel733/Voice_Cover_letter_Analyzer.git"
          googledrive=""
          linkedinLink=""
        />
        
      </div>
    </section>
  );
}

export default Projects;
