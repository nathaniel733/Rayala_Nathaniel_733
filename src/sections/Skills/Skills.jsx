import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h3>Programming Languages</h3><br></br>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Java" />
        
      </div>
      <hr />
      <h3>Database and Language</h3><br></br>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
     
      </div>
      <hr />
      <h3>Frameworks</h3><br></br>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="NumPy" />
        <SkillList src={checkMarkIcon} skill="Matplotlib" />
        <SkillList src={checkMarkIcon} skill="MysqlConnector" />
        <SkillList src={checkMarkIcon} skill="Pandas" />
        <SkillList src={checkMarkIcon} skill="React(Basic)" />
        <SkillList src={checkMarkIcon} skill="Node.js(Basic)" />
      </div><br></br>
      <hr/>
      <h3>Design</h3><br></br>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="CSS3" />
        <SkillList src={checkMarkIcon} skill="HTML5" />
        
      </div><br></br>
      <hr/>
      <h3>Soft Skills</h3><br></br>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Collaboration" />
        <SkillList src={checkMarkIcon} skill="Communication" />
        <SkillList src={checkMarkIcon} skill="Planning" />
        <SkillList src={checkMarkIcon} skill="Teamwork" />
        <SkillList src={checkMarkIcon} skill="Time Manage" />
        <SkillList src={checkMarkIcon} skill="Leadership" />
        
      </div>
    </section>
  );
}

export default Skills;
