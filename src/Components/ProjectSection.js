import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection(props) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectSection;
