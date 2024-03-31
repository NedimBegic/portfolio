import style from "./Work.module.css";
import Project from "../sideComponents/Project";

const Work = () => {
  return (
    <div className={style.section}>
      <h2>Work</h2>
      <span>Most recent Work</span>
      <div>
        <Project />
      </div>
    </div>
  );
};

export default Work;
