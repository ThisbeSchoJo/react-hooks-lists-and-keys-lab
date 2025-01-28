import React from "react";
// import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologies.map((technology, index) => (
        <span key={index}>{technology}</span>
      ))}
      </div>
    </div>
  );
}


export default ProjectItem;

// 0: "React"
// 1: "Redux"
// 2: "Rails"

