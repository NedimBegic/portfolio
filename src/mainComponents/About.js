import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.socialIcons}>
        <div>
          <i className="fab fa-linkedin"></i>
        </div>
        <div>
          <i className="fab fa-github"></i>
        </div>
        <div>
          <i className="fab fa-codewars"></i>
        </div>
      </div>
      <div className={style.aboutMe}>
        <div>
          <h2>Your Name</h2>
          <p>A sentence about yourself being a software developer.</p>
        </div>
        <div className={style.photo}>
          <img src="/meNoBg.png" alt="me" />
        </div>
      </div>
    </div>
  );
};

export default About;
