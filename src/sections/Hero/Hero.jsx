import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf'; 
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <>
      <img
        className={styles.colorMode}
        src={themeIcon}
        alt="Color mode icon"
        onClick={toggleTheme}
      />
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            src={heroImg}
            className={styles.hero}
            alt="Profile picture of Faisal Nur"
          />
        </div>
        <div className={styles.info}>
          <h1>
            Faisal
            <br />
            Nur
          </h1>
          <h2>Aspiring Software Engineer</h2>
          <span>
            <a href="https://github.com/Faisalkn" target="_blank" rel="noopener noreferrer">
              <img className={styles.githubIcon} src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/faisalnur/" target="_blank" rel="noopener noreferrer">
              <img className={styles.linkedinIcon} src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </span>
          <p className={styles.description}>
            I am a junior at the University of Washington, majoring in Computer Science. I am passionate about solving real-world problems with technology and enhancing user experiences through innovative development.
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
