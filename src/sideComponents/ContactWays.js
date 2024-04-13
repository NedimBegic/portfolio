import style from "./ContactWays.module.css";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactWays = ({ contactWay }) => {
  let info = {
    icon: "",
    way: "",
    contact: "",
  };
  if (contactWay === "call") {
    info.icon = faPhone;
    info.way = "Call Me";
    info.contact = "64-407-8534";
  } else if (contactWay === "email") {
    info.icon = faEnvelope;
    info.way = "Email Me";
    info.contact = "nedim.begic93@gmail.com";
  } else {
    info.icon = faLocationDot;
    info.way = "Location";
    info.contact = "Senad Poturak Senči 54";
  }

  return (
    <div className={style.div}>
      <FontAwesomeIcon className={style.icon} icon={info.icon} />
      <div>
        <h3>{info.way}</h3>
        <span>{info.contact}</span>
      </div>
    </div>
  );
};

export default ContactWays;
