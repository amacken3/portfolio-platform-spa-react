import { useState } from "react";
import styles from "./ProjectForm.module.css";

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
      [e.target.name]: e.target.value,
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
    <div className={styles.formCard}>
      <h2 className={styles.heading}>Add a New Project</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="title">
            Title:
          </label>
          <input
            className={styles.input}
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="description">
            Description:
          </label>
          <input
            className={styles.input}
            id="description"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="fullDescription">
            Full Description:
          </label>
          <textarea
            className={styles.textarea}
            id="fullDescription"
            name="fullDescription"
            value={formData.fullDescription}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="githubUrl">
            GitHub URL:
          </label>
          <input
            className={styles.input}
            id="githubUrl"
            type="url"
            name="githubUrl"
            value={formData.githubUrl}
            onChange={handleChange}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="liveDemoUrl">
            Live Demo URL:
          </label>
          <input
            className={styles.input}
            id="liveDemoUrl"
            type="url"
            name="liveDemoUrl"
            value={formData.liveDemoUrl}
            onChange={handleChange}
          />
        </div>

        <button className={styles.button} type="submit">
          Add Project
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;