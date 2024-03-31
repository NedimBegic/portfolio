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
          <p className={style.soft}>Backend developer</p>
          <p>
            High level experience in software development, producing quality
            work for clients and myself.
          </p>
          <button>Download CV</button>
        </div>
        <div className={style.photo}>
          <svg
            id="sw-js-blob-svg"
            viewBox="10 15 100 100"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stopColor="rgba(223.95, 12.645, 12.645, 0.95)"
                  offset="0%"
                />
                <stop
                  id="stop2"
                  stopColor="rgba(251, 31, 32, 1)"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M20,-31.3C26.1,-27.1,31.4,-22,32.9,-15.9C34.3,-9.8,31.8,-2.8,31.7,5.3C31.7,13.3,34,22.4,30.8,27.4C27.6,32.3,18.8,33.1,10.8,34.2C2.9,35.3,-4.1,36.7,-10,34.7C-15.8,32.7,-20.5,27.2,-25.9,21.9C-31.3,16.6,-37.4,11.4,-39.2,5.1C-40.9,-1.2,-38.2,-8.7,-34.3,-14.9C-30.3,-21.1,-25.1,-26,-19.1,-30.2C-13.2,-34.5,-6.6,-38.2,0.2,-38.4C6.9,-38.6,13.8,-35.5,20,-31.3Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
              style={{ transition: "all 0.3s ease 0s" }}
              stroke="url(#sw-gradient)"
            />
            <image href="/meNoBg.png" width="100" height="50" x="0" y="40" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;
