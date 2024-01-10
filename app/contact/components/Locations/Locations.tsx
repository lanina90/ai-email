'use client'

import React from 'react';
import Container from "@/Components/Container/Container";
import styles from "./Locations.module.scss";
import Typography from "@/Components/Typography/Typography";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Button from "@/Components/UI/Button/Button";

const Locations = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['location-section']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={refForComponent}>
      <div className={styles['location-section']}>
        <Typography component='h2' variant='h2'>Our locations</Typography>
        <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        <div className={styles['locations-component']}>
          <div className={styles['location']}>
            <div className={styles['location-image']}><img
              src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc5_Contact_1.jpg"
              loading="lazy"
              sizes="(max-width: 767px) 90vw, (max-width: 1279px) 42vw, (max-width: 1439px) 43vw, 608.0034790039062px"
              srcSet="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc5_Contact_1-p-500.jpg 500w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc5_Contact_1-p-800.jpg 800w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc5_Contact_1.jpg 1248w"
              alt="Bridge"/>
            </div>
            <div className={styles['location-content']}>
              <Typography component='h3' variant='h5'>Silicon Valley</Typography>
              <Typography component='p' variant='p'>123 Sample St, Valley NSW 2034 AU</Typography>
            </div>
          </div>
          <div className={styles['location']}>
            <div className={styles['location-image']}><img
              src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc1_Contact_2.jpg"
              loading="lazy"
              sizes="(max-width: 767px) 90vw, (max-width: 1279px) 42vw, (max-width: 1439px) 43vw, 608.0034790039062px"
              srcSet="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc1_Contact_2-p-500.jpg 500w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc1_Contact_2-p-800.jpg 800w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc1_Contact_2.jpg 1248w"
              alt="Bridge"/>
            </div>
            <div className={styles['location-content']}>
              <Typography component='h3' variant='h5'>New York</Typography>
              <Typography component='p' variant='p'>123 Sample St, Valley NSW 2034 AU</Typography>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default Locations;