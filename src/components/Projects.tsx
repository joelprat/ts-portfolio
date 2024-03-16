import React from "react";
import "../css/Projects.css";

interface Project {
  img: string;
  url: string;
  title: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      url: "http://5.250.190.97",
      title: "MyCinema",
      img: "/mycinema.ico",
    },
    {
      url: "https://opticasantpedor.com",
      title: "Optica Santpedor",
      img: "/opticasantpedor.ico",
    },
    {
      url: "https://www.youtube.com/watch?v=jaYQ3ElwnmU&ab_channel=CarlesCostas",
      title: "Teacher Bot",
      img: "/robot.png",
    },
  ];
  return (
    <div className="animation projects">
      {projects.map((project) => (
        <a
          href={project.url}
          target="_blank"
          className="project"
          rel="noreferrer"
        >
          <img src={project.img} alt={project.title} />
          <h3>{project.title}</h3>
        </a>
      ))}
    </div>
  );
}
