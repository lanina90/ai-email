import React from 'react';
import styles from './Clients.module.scss'
import {logos} from "@/constants/logos";

const Clients = () => {

  return (
    <section className={styles.clients}>
     <h2>Trusted by Professionals and Teams</h2>
      <div className={styles['logo-component']}>
        <div className={styles['logo-list']}>
          {logos.map((logo, index) =>
            <div key={index} className={styles['logo-wrapper']}>
              <img src={logo} alt="logo" loading='lazy' className={styles.logo}/>
            </div>
          )}
        </div>
        <div className={styles['logo-list']}>
          {logos.map((logo, index) =>
            <div key={index} className={styles['logo-wrapper']}>
              <img src={logo} alt="logo" loading='lazy' className={styles.logo}/>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Clients;