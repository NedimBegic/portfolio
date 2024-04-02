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
    <div className={style.aboutContainer} id="about">
      <div className={style.socialIcons}>
        <a
          href="https://www.linkedin.com/in/nedim-begic-a42210245/"
          target="_blank"
        >
          <div>
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </a>
        <a href="https://github.com/NedimBegic" target="_blank">
          <div>
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>
        <a href="https://www.facebook.com/nedim.b.begic/" target="_blank">
          <div>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </a>
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
