import React, { useRef } from "react";
import style from "./Contact.module.css";
import ContactWays from "../sideComponents/ContactWays";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    // Extract values of name, email, and message fields from formData
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    emailjs
      .send(
        "service_8vrats7",
        "template_sc37x1o",
        { from_name: name, email, message },
        "L-wL07daw_OG-OrMo"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          console.log(error);
          alert("Failed to send message");
        }
      );
  };

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
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" />
          <input placeholder="Email" name="email" />
          <textarea rows={7} placeholder="Message" name="message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
