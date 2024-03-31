import React, { useState } from "react";
import styles from "./Skill.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faAngleDown,
  faGears,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import Tool from "./Tool";

// Assuming icons array contains strings representing icon names
import { icons } from "../utils/icons";

const Skill = ({ skillName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Define a function to render icons based on the skillName
  const renderIcons = () => {
    switch (skillName) {
      case "Languages":
        return icons.filter((icon) =>
          ["python", "javascript", "typescript", "c"].includes(icon.name)
        );
      case "Frameworks":
        return icons.filter((icon) =>
          [
            "node",
            "react",
            "next",
            "mongoose",
            "express",
            "bootstrap",
          ].includes(icon.name)
        );
      case "Databases":
        return icons.filter((icon) =>
          ["mySql", "mongoDb", "sequelize", "firebase"].includes(icon.name)
        );
      case "Other tools":
        return icons.filter((icon) =>
          ["aws", "netlify", "vercel", "postman", "github", "npm"].includes(
            icon.name
          )
        );
      default:
        return [];
    }
  };

  // Define a function to get the appropriate icon based on the skillName
  const getIcon = () => {
    switch (skillName) {
      case "Languages":
        return faCode;
      case "Frameworks":
        return faGears;
      case "Databases":
        return faDatabase;
      case "Other tools":
        return faScrewdriverWrench;
      default:
        return null; // No icon for other cases
    }
  };

  return (
    <div className={styles.skillContainer}>
      <div className={styles.skillHeader} onClick={toggleDropdown}>
        {/* Use the dynamic icon based on skillName */}
        <FontAwesomeIcon icon={getIcon()} className={styles.icon} />
        {skillName}
        <span className={`${styles.arrow} ${isOpen ? styles.rotated : ""}`}>
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {renderIcons().map((icon, index) => (
            <Tool key={index} tool={icon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Skill;
