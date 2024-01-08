import React from 'react';
import styles from "./BackGround.module.scss";

const BackGround = () => {
  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.backgroundGradientLine}/>
      <div className={styles.backgroundGradient}/>
      <div className={styles.circleWrapper}>
        <div className={styles.lastCircle}>
          <div className={styles.circle1n}>
            <div className={styles.circle2}>
              <div className={styles.circle3}>
                <div className={styles.circle4}/>
              </div>
            </div>
          </div>
          <div className={`${styles.circleLine} ${styles.circleLine1}`}/>
          <div className={styles.circleLine}/>
          <div className={`${styles.circleLine} ${styles.circleLine2}`}/>
          <div className={`${styles.circleLine} ${styles.circleLine3}`}/>
          <div className={`${styles.circleLine} ${styles.circleLine4}`}/>
        </div>
      </div>
    </div>
  );
};

export default BackGround;