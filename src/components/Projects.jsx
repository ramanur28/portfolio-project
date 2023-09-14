import "../styles/projects.css";
import Project from "./Project";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projectData = [
  {
    key: "project1",
    imgSrc: project1,
    description: "Basic parallax website using react + framer-motion",
    githubLink: "https://github.com/ramanur28/reactXframer",
  },
  {
    key: "project2",
    imgSrc: project2,
    description: "Basic web page using react + boostrap",
    githubLink: "https://github.com/ramanur28/react-web",
  },
  {
    key: "project3",
    imgSrc: project3,
    description: "Another basic web app using react + framer-motion",
    githubLink: "https://github.com/ramanur28/learn-framer-motion",
  },
];

const Projects = () => {
  return (
    <div className="container-fluid projects">
      <h2 className="subtitle">Projects</h2>
      <div className="project-wrapper">
        {projectData.map((project) => {
          return (
            <Project
              key={project.key}
              imgSrc={project.imgSrc}
              description={project.description}
              githubLink={project.githubLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
