import React from "react";
import style from "./Project.module.css";
import { icons } from "../utils/icons";
import Tool from "./Tool";

const Project = ({ project }) => {
  const gameTools = icons.filter((e) => project.tools.includes(e.name));

  const lastProject =
    project.name === "Productive Browser" ? style.lastProject : "";

  return (
    <div className={`${style.project} ${lastProject}`}>
      <h3>{project.name}</h3>
      <span>{project.type}</span>
      <img src={project.img} alt={project.name} />
      <div className={style.tools}>
        {gameTools.map((item, index) => (
          <Tool key={index} tool={item} />
        ))}
      </div>
      <p>{project.desc}</p>
      <div className={style.buttons}>
        <a href={project.live} target="_blank">
          <button>
            {project.name === "Productive Browser"
              ? "Presentation"
              : "Visit Page"}
          </button>
        </a>
        <a
          className={project.name === "Productive Browser" ? style.hide : ""}
          href={project.backend}
          target="_blank"
        >
          <button>Backend Code</button>
        </a>
        <a href={project.frontend} target="_blank">
          <button>
            {project.name === "Productive Browser"
              ? "Visit Code"
              : "Frontend Code"}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
