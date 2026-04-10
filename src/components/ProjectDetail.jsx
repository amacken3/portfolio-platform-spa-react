import { useParams } from "react-router-dom";

function ProjectDetail({ projects }) {
  const { id } = useParams();

  const project = projects.find((project) => project.id === Number(id));

  if (!project) {
    return <div className="project-detail">Project not found.</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.fullDescription}</p>
      <a href={project.githubUrl} target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
        Live Demo
      </a>
    </div>
  );
}

export default ProjectDetail;