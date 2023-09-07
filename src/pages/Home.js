import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import Markus from "../assets/markus.png";
import Resume from "../assets/Markus_Kunej_Resume.pdf";
import "../styles/Home.css";
import Button from "@material-ui/core/Button";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={Markus} alt="Markus" />
        <h2> Welcome!</h2>
        <div className="prompt">
          <p>
            My name's Markus and I'm a software engineer with a passion for
            solving difficult problems using A.I. and machine learning.
          </p>
          <p>
            <a
              href={Resume}
              download="Markus-Kunej-Resume"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="contained">Download Resume</Button>
            </a>
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
            <span>Python, C, C++, Java, SQL, JavaScript, Swift</span>
          </li>
          <li className="item">
            <h2>Tools / Frameworks</h2>
            <span>
              Pytorch, TensorFlow, Mindspore, React, Github, Jupyter Notebooks
            </span>
          </li>
          <li className="item">
            <h2>Hobbies & Interests</h2>
            <span>
              Soccer, Strategy Games (Catan, Diplomacy), Bikepacking (biking +
              camping), Triathlon, Rocket League
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
