import React, { useState, useEffect, useCallback } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  const getMenuIconSrc = () =>
    isSmallScreen
      ? getImageUrl(menuOpen ? "nav/closeIcon.png" : "nav/menuIcon.png")
      : "";

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 600);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    console.log("Made with ❤️ by the best software engineer Jaber!");

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        DoDo✨
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          alt="Menu"
          src={getMenuIconSrc()}
          onClick={toggleMenu}
          width="40"
          height="40"
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          {/* <li><a href="#projects">Projects</a></li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
