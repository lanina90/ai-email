'use client'

import React from 'react';
import styles from './GetStarted.module.scss'
import Container from "@/Components/Container/Container";
import Typography from "@/Components/Typography/Typography";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Personalize from "@/app/components/GetStarted/Personalize/Personalize";
import Streamline from "@/app/components/GetStarted/Streamline/Streamline";

const GetStarted = () => {
  const animateClass = `${styles.fadeIn}`
  const RefForTitle = useObserverAnimation({
    amount: "one",
    classes: `.${styles['start-title']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <>
      <Container component='section' ref={RefForTitle}>
        <Typography component='h2' variant='h2' className={styles['start-title']}>Get
          Started <span>in Just a Few clicks</span></Typography>
      </Container>
      <Personalize/>
      <Streamline/>
    </>
  );
};

export default GetStarted;