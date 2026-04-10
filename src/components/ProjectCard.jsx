import { Link } from "react-router-dom";

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
            </a>

            <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
                Live Demo
            </a>

            <Link to={`/projects/${project.id}`}>View Details</Link>
        </div>
  );
}

export default ProjectCard;