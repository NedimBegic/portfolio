import React from "react";
import style from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.socialIcons}>
        <div>
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <div>
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
      <div className={style.aboutMe}>
        <div className={style.myInfo}>
          <h2>Hi, I'am Nedim</h2>
          <p className={style.soft}>Software developer</p>
          <p>
            High level experience in software development, producing quality
            work for clients and myself.
          </p>
          <button>Download CV</button>
        </div>
        <img className={style.photo} src="/me.png" alt="my imge" />
      </div>
    </div>
  );
};

export default About;
