import React from 'react';
import styles from './Clients.module.scss'
import {logos} from "@/constants/logos";

const Clients = ({title}:{title: string}) => {

  return (
    <section className={styles.clients}>
     <h2>{title}</h2>
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