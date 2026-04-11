import React, { useState } from 'react'
import ProjectForm from './ProjectForm.jsx'
import SearchBar from './SearchBar.jsx'
import ProjectList from './ProjectList.jsx'
import styles from "./HomePage.module.css";

function HomePage ({ projects, onAddProject }) {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSearchChange(e) {
        setSearchTerm(e.target.value);
    }

    const filteredProjects = projects.filter((project) => {
        const matchesTitle = project.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesDescription = project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        
        return matchesTitle || matchesDescription;
    });

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <ProjectForm onAddProject={onAddProject} />

                <div className={styles.projectsSection}>
                    <SearchBar
                        searchTerm={searchTerm}
                        onSearchChange={handleSearchChange}
                    />
                    <ProjectList projects={filteredProjects} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;