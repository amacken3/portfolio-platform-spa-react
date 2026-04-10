import { Link, useParams } from "react-router-dom";
import styles from "./ProjectDetail.module.css";

function ProjectDetail({ projects }) {
  const { id } = useParams();

  const project = projects.find((project) => project.id === Number(id));

  if (!project) {
    return <div className={styles.detailCard}>Project not found.</div>;
  }

  return (
    <div className={styles.detailCard}>
      <Link className={styles.backLink} to="/">
        ← Back to Projects
      </Link>

      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.description}>{project.fullDescription}</p>

      <div className={styles.links}>
        <a
          className={styles.link}
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          className={styles.link}
          href={project.liveDemoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectDetail;