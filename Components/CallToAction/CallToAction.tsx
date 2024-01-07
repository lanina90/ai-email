'use client'

import React from 'react';
import Container from "@/Components/Container/Container";

import styles from './CallToAction.module.scss'
import Button from "@/Components/UI/Button/Button";
import Typography from "@/Components/Typography/Typography";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";

const CallToAction = ({h2,span, text, btnText}: { h2: string, span:string, text: string, btnText: string }) => {
  const animateClass = `${styles.fadeIn}`
  const refForTitle = useObserverAnimation({
    amount: "one",
    classes: `.${styles['cta-container']}`,
    animateClass,
    threshold: 0.1})

  return (
    <Container component='section' className={styles['cta-section']} ref={refForTitle}>
      <div className={styles["cta-circle"]}/>
      <div className={styles["background-wrapper"]}>
        <div className={styles["background-gradient-cta"]}/>
      </div>
      <div className={styles["cta-container"]}>
        <div className={styles["cta-content"]}>
          <Typography component='h2' variant='h2'>{h2} <span>{span}</span></Typography>
          <Typography component='p' variant='p'>{text}</Typography>
        </div>
        <Button variant='filled' component='link' href='/sign-up'>{btnText}</Button>
      </div>
    </Container>
  );
};

export default CallToAction;