import React from "react";
import PaperItem from "../components/PaperItem";
import { PaperList } from "../helpers/PaperList";
import "../styles/Projects.css";

function Papers() {
  return (
    <div className="projects">
      <h1>Papers</h1>
      <div className="projectList">
        {PaperList.map((paper, idx) => {
          return <PaperItem id={idx} name={paper.name} image={paper.image} />;
        })}
      </div>
    </div>
  );
}

export default Papers;
