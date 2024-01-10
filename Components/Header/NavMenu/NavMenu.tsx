import React from 'react';
import styles from "@/Components/Header/Header.module.scss";

const NavMenu = () => {
  return (
    <nav className={`${styles["navbar-menu"]} `}>
      <div className={styles["navbar-menu-left"]}>
        <a href="/about"
           className={`${styles["navbar-link"]} ${styles["w-nav-link"]} ${styles["w--nav-link-open"]}`}>About</a>
        <a href="/products"
           className={`${styles["navbar-link"]} ${styles["w-nav-link"]} ${styles["w--nav-link-open"]}`}>Product</a>
        <a href="/use-case"
           className={`${styles["navbar-link"]} ${styles["w-nav-link"]} ${styles["w--nav-link-open"]}`}>UseCase</a>
        <a href="/pricing"
           className={`${styles["navbar-link"]} ${styles["w-nav-link"]} ${styles["w--nav-link-open"]}`}>Pricing</a>
        <a href="/career"
           className={`${styles["navbar-link"]} ${styles["w-nav-link"]} ${styles["w--nav-link-open"]}`}>Career</a>
        <a href="/blogs"
           className={`${styles["navbar-link"]} ${styles["w-nav-link"]} ${styles["w--nav-link-open"]}`}>Blogs</a>
        <a href="/contact"
           className={`${styles["navbar-link"]} ${styles["w-nav-link"]} ${styles["w--nav-link-open"]}`}>Contact</a>
      </div>
      <div className={styles["navbar-menu-right"]}>
        <a href="/log-in" className={`${styles["button"]} ${styles["is-small"]} ${styles["w-button"]}`}>Get Started</a>
      </div>
    </nav>
  );
};

export default NavMenu;