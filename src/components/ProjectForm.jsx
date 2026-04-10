import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    fullDescription: "",
    githubUrl: "",
    liveDemoUrl: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      ...formData,
    };

    onAddProject(newProject);

    setFormData({
      title: "",
      description: "",
      fullDescription: "",
      githubUrl: "",
      liveDemoUrl: "",
    });
}

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label htmlFor="description">Description:</label>
      <input
        id="description"
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label htmlFor="fullDescription">Full Description:</label>
      <textarea
        id="fullDescription"
        name="fullDescription"
        value={formData.fullDescription}
        onChange={handleChange}
        required
        className="full-description-input"
      />

      <label htmlFor="githubUrl">GitHub URL:</label>
      <input
        id="githubUrl"
        type="url"
        name="githubUrl"
        value={formData.githubUrl}
        onChange={handleChange}
        required
      />

      <label htmlFor="liveDemoUrl">Live Demo URL:</label>
      <input
        id="liveDemoUrl"
        type="url"
        name="liveDemoUrl"
        value={formData.liveDemoUrl}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;