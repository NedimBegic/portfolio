import style from "./Contact.module.css";
import ContactWays from "../sideComponents/ContactWays";

const Contact = () => {
  return (
    <div className={style.section}>
      <h2 id="contact">Contact Me</h2>
      <span>Get In Touch</span>
      <div>
        <div className={style.contact}>
          <ContactWays contactWay={"call"} />
          <ContactWays contactWay={"email"} />
          <ContactWays contactWay={"location"} />
        </div>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input placeholder="Email" name="emai" />
          <textarea rows={7} placeholder="Message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
