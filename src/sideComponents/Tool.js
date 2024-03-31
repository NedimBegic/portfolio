// Tool.js
import React from "react";
import style from "./Tool.module.css";

const Tool = (props) => {
  const toolStyle =
    props.tool.name === "mongoose" ? style.mongoose : style.toolImage;
  return (
    <div className={style.toolContainer}>
      <img className={toolStyle} src={props.tool.url} alt={props.tool.name} />
      <span className={style.toolName}>{props.tool.name}</span>
    </div>
  );
};

export default Tool;
