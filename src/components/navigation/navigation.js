import React from "react";
import styles from "./navigation.css";

const Navigation = () => (
  <div>
    <ul className={styles.navBar}>
      <li>Home</li>
      <li>About</li>
      <li>Gallery</li>
      <li>Contact us</li>
    </ul>
  </div>
);

export default Navigation;
