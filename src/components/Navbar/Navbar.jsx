import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <h3 className={styles.logo}>Finite</h3>

      <div className={styles.right}>
        <div className={styles.searchbar}>
          <img src="/icons/icon-search.svg" alt="search" />
          <input type="text" placeholder={`Search for "crypto punks"`} />
        </div>
        <ul className={styles["nav-links"]}>
          <li>Explore</li>
          <li>Create</li>
          <li>Blog</li>
          <li className="button">Connect Wallet</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
