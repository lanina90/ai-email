'use client'

import React from 'react';
import Container from "@/Components/Container/Container";
import styles from './Vision.module.scss'
import Typography from "@/Components/Typography/Typography";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";

const Vision = () => {

  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['vision-container']}`,
    animateClass,
    threshold: 0.1
  })


  return (
    <Container component='section' ref={refForComponent}>
      <div className={styles['vision-container']}>
        <Typography component='p' variant='p' className={styles['text-colored']}>Our vision</Typography>
        <Typography component='p' variant='h5'>We are dedicated to harnessing the power of artificial intelligence to revolutionize the industry. Our relentless pursuit of innovation allows us to deliver exceptional, cutting-edge solutions that surpass traditional approaches.</Typography>
      </div>
    </Container>
  );
};

export default Vision;