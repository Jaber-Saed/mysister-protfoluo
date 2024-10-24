import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const {
  container,
  title,
  content,
  aboutImage,
  aboutItems,
  aboutItem,
  aboutItemText,
  aboutItemImage,
} = styles;

const renderAboutItem = (icon, title, description) => (
  <li className={aboutItem}>
    <img
      src={getImageUrl(`about/${icon}`)}
      alt={`${title} - ${icon}`}
      className={aboutItemImage}
    />
    <div className={aboutItemText}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </li>
);

export const About = () => {
  return (
    <section className={container} id="about">
      <h2 className={title}>About</h2>
      <div className={content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={aboutImage}
        />
        <ul className={aboutItems}>
          {renderAboutItem(
            "writer.png",
            "Creative Writer",
            "I excel at crafting engaging stories, articles, and creative content that captivates readers. From fiction to non-fiction, I use language to evoke emotion, build narratives, and bring ideas to life...."
          )}
          {renderAboutItem(
            "teach.png",
            "Educator",
            "I have experience teaching English concepts, including grammar, writing, and literary analysis. Whether in a classroom setting or through tutoring, I guide students in developing their skills and confidence in reading and writing...."
          )}
          {renderAboutItem(
            "translator.png",
            "Translator",
            "Fluent in translating texts between [insert language pair], I ensure that meaning, tone, and nuance are preserved across languages. I specialize in translating literary works, articles, and other written materials with accuracy and cultural sensitivity...."
          )}
        </ul>
      </div>
    </section>
  );
};
