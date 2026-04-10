import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProjectDetail from "./components/ProjectDetail";
import projectsData from "./data/projects";

function App() {
  //state
  const [projects, setProjects] = useState(projectsData);


  function handleAddProject(newProject) {
    setProjects([...projects, newProject]);
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              projects={projects}
              onAddProject={handleAddProject}
            />
          }
        />
        <Route
          path="/projects/:id"
          element={<ProjectDetail projects={projects} />}
        />
      </Routes>
    </div>
  );
}

export default App;