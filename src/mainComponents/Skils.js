import style from "./Skils.module.css";
import Skill from "../sideComponents/Skill";

const Skils = () => {
  return (
    <div className={style.section}>
      <h2>Skills</h2>
      <span>My technical level</span>
      <div>
        <div>
          {" "}
          <Skill skillName={"Languages"} />
          <Skill skillName={"Databases"} />
        </div>
        <div>
          {" "}
          <Skill skillName={"Frameworks"} />
          <Skill skillName={"Other tools"} />
        </div>
      </div>
    </div>
  );
};

export default Skils;