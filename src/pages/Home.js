import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Welcome!</h2>
        <div className="prompt">
          <p>
            I'm a software engineer with a passion for solving difficult
            problems using A.I. and machine learning.
          </p>
          <a href="https://github.com/markuskunej">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/markuskunej/">
            <LinkedInIcon />
          </a>
          <a href="mailto:kunejmarkus@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>Python, C, C++, Java, SQL</span>
          </li>
          <li className="item">
            <h2>ML Frameworks</h2>
            <span>Pytorch, TensorFlow, Mindspore</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
