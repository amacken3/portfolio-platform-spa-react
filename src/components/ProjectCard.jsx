import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      {project.description && (
        <p className={styles.description}>{project.description}</p>
      )}

      <div className={styles.links}>
        {project.githubUrl && (
          <a
            className={styles.link}
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
          GitHub
        </a>
        )} 

        {project.liveDemoUrl && (
          <a
            className={styles.link}
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
)}

        <Link className={styles.link} to={`/projects/${project.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;