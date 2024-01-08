"use client"

import React, {Fragment} from 'react';
import Container from "@/Components/Container/Container";
import styles from './Beliefs.module.scss'
import Typography from "@/Components/Typography/Typography";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import {beliefs} from "@/constants/beliefs";
import BeliefCard from "@/app/about/components/Beliefs/BeliefCard/BeliefCard";

const Beliefs = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['beliefs-container']}`,
    animateClass,
    threshold: 0.1
  })
  const refForList = useObserverAnimation({
    amount: "many",
    classes: `.${styles['beliefs-item']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={refForComponent}>
      <div className={styles['beliefs-container']}>
        <Typography component='h2' variant='h2'>We believe in <span>Inspiration</span></Typography>
        <div className={styles['beliefs-list']} ref={refForList}>
          {beliefs.map(belief =>
            <Fragment key={belief.id}>
              <BeliefCard belief={belief}/>
            </Fragment>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Beliefs;