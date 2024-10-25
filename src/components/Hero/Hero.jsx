import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.magic}>Hi, I'm Ghada Mohmmad</span>
        </h1>
        <p className={styles.description}>
          Welcome to my corner of the internet, where words come alive. With a
          degree in English and a deep love for storytelling, I explore language
          in all its forms. Whether it’s crafting engaging narratives,
          reflecting on life’s moments, or analyzing the power of literature,
          I’m here to share my thoughts and connect through the beauty of words
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage-pc.webp")}
        alt="Hero image of me"
        className={styles.heroImg}
        srcSet={`
        ${getImageUrl("hero/heroImage-mob.webp")} 600w,
        ${getImageUrl("hero/heroImage-pc.webp")} 1200w`}
        sizes="(max-width: 600px) 100vw, 
           (min-width: 601px) 1200px"
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
