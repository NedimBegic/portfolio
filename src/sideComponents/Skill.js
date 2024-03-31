// Skill.js

import React, { useState } from "react";
import styles from "./Skill.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Skill = ({ skillName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.skillContainer}>
      <div className={styles.skillHeader} onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faCode} className={styles.icon} />
        {skillName}
        <span className={`${styles.arrow} ${isOpen ? styles.rotated : ""}`}>
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <p>Dropdown Content</p>
        </div>
      )}
    </div>
  );
};

export default Skill;
