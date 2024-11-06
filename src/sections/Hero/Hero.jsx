import styles from './HeroStyles.module.css';

import heroImg from '../../assets/fotor-20241102201223.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/myresume_final_final.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (



   
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Rayala Nathaniel"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Rayala
          <br />
          Nathaniel
        </h1>
        
        <span>
          <a href="https://github.com/nathaniel733" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/rayala-nathaniel-213286229/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <div className={styles.descriptionContainer}>
  <p className={styles.description}>
    Passionate Tech Creator | Full-Stack Developer | 
    Passionate about Machine Learning & Hardware Integration | 
    Bridging Software and Smart Devices
  </p>
</div>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
