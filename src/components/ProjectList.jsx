import ProjectCard from "./ProjectCard.jsx";
import styles from "./ProjectList.module.css";

function ProjectList({ projects }) {
  return (
    <div className={styles.list}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;