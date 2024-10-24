import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.text}>
          <h2>Contact Me</h2>
          <p>Let's connect and collaborate!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:myemail@email.com">DoDo@email.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a
              href="https://www.linkedin.com/DoDo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin.com/DoDo
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/Instagram.png")} alt="Github icon" />
            <a
              href="https://www.github.com/DoDo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram.com/DoDo
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
