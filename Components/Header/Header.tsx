'use client'

import React, {useState} from 'react';
import styles from './Header.module.scss'
import NavMenu from "@/Components/Header/NavMenu/NavMenu";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`${styles.navbar} ${styles['w-nav']}`} data-collapse="medium">
      <div className={styles.container}>
        <a href="/" className={`${styles['navbar-logo-link']} ${styles['w-nav-brand']} ${styles['w--current']}`}>
          <img
            src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794c9fd81b748e926422_Logo.png"
            loading="lazy" width="105" alt="Logo" className="logo-image"/>
        </a>
        <div className={`${styles['navbar-menu-button']} ${styles['w-nav-button']}`} aria-label="menu"
             role="button" onClick={() => setIsOpen(!isOpen)}>
          <div className={styles["menu-icon"]}>
            <div className={`${styles["menu-icon-line-top"]} ${isOpen ? styles.open : ""}`}/>
            <div className={`${styles["menu-icon-line-middle"]} ${isOpen ? styles.open : ""}`}>
              <div className={styles["menu-icon-line-middle-inner"]}/>
            </div>
            <div className={`${styles["menu-icon-line-bottom"]} ${isOpen ? styles.open : ""}`}/>
          </div>
        </div>
        <div className={`${styles["w-nav-desktop"]}`}>
          <NavMenu/>
        </div>
      </div>

      <div className={`${styles["w-nav-overlay"]} ${isOpen ? styles.open : ""}`}>
        <NavMenu/>
      </div>

    </header>
  );
};

export default Header;