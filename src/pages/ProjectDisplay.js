import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Description:</b> {project.description}
      </p>
      <p className="skills">
        <b>Skills</b> {project.skills}
      </p>
      {project.link !== "" && (
        <a href={project.link}>
          <GithubIcon />
        </a>
      )}
    </div>
  );
}

export default ProjectDisplay;
