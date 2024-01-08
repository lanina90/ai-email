'use client'

import React from 'react';
import Container from "@/Components/Container/Container";
import styles from "./Vacancies.module.scss";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Typography from "@/Components/Typography/Typography";
import Button from "@/Components/UI/Button/Button";

const Vacancies = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['hiring']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={refForComponent}>
      <div className={styles['hiring']}>
        <div className={styles['hiring-content']}>
          <Typography component='h3' variant='h4'>We&apos;re hiring!</Typography>
          <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </div>
        <Button variant='text' component='link' href='/career'>Open positions</Button>
      </div>
    </Container>
  );
};

export default Vacancies;