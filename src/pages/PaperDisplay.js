import React from "react";
import { useParams } from "react-router-dom";
import { PaperList } from "../helpers/PaperList";
import GithubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";

import "../styles/ProjectDisplay.css";

function PaperDisplay() {
  const { id } = useParams();
  const paper = PaperList[id];
  return (
    <div className="project">
      <h1>{paper.name}</h1>
      <img src={paper.image} />
      <p>
        <b>Description:</b> {paper.description}
      </p>
      <p>
        <a href={paper.file} target="_blank" rel="noreferrer">
          <Button variant="contained">View Paper</Button>
        </a>
      </p>
    </div>
  );
}

export default PaperDisplay;
