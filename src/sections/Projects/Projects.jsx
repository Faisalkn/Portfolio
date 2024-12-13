import styles from './ProjectsStyles.module.css';
import dungeon from '../../assets/dungeon.png';
import employee from '../../assets/team.png'
import dice from '../../assets/dice.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={dungeon}
          link="https://github.com/Faisalkn/DungeonAdventureGame"
          h3="Dungeon Adeventurer"
          p="Adventurer Game"
        />
        <ProjectCard
          src={employee}
          link="https://github.com/Faisalkn/EmployeeManagement"
          h3="Employee Management"
          p="Employee Management System"
        />
        <ProjectCard
          src={dice}
          link="https://github.com/Faisalkn/DiceGame"
          h3="Craps Game"
          p="Game Of Craps"
        />
       
      </div>
    </section>
  );
}

export default Projects;
