'use client'

import React, {Fragment} from 'react';
import Container from "@/Components/Container/Container";
import styles from "./Vacancies.module.scss";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Typography from "@/Components/Typography/Typography";
import Accordion from "@/app/career/components/Vacancies/Accordion";
import {vacancies} from "@/constants/vacancies";


const Vacancies = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['vacancies-section']}`,
    animateClass,
    threshold: 0.1
  })
  const refForList = useObserverAnimation({
    amount: "many",
    classes: `.${styles['career-accordion']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={refForComponent}>
      <div className={styles['vacancies-section']}>
        <Typography component='h2' variant='h2'>Job Openings</Typography>
        <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.</Typography>
      </div>
      <div className={styles['vacancies-list']} ref={refForList}>
        {vacancies.map(item =>
          <Fragment key={item.id}>
            <Accordion item={item}/>
          </Fragment>
        )}
      </div>
    </Container>
  );
};

export default Vacancies;