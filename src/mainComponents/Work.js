import style from "./Work.module.css";
import Project from "../sideComponents/Project";
import { gameShop, instagram, extension } from "../utils/projects";

const Work = () => {
  return (
    <div className={style.section}>
      <h2>Work</h2>
      <span>Most recent Work</span>
      <div>
        <Project project={gameShop} />
        <Project project={instagram} />
        <Project project={extension} />
      </div>
    </div>
  );
};

export default Work;
