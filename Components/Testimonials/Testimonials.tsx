'use client'

import React, {Fragment} from 'react';
import Container from "@/Components/Container/Container";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Typography from "@/Components/Typography/Typography";
import styles from './Testimonials.module.scss'
import {testimonialsMain} from "@/constants/testimonials";
import TestimonialCard from "@/Components/Testimonials/TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const animateClass = `${styles.fadeIn}`
  const refForList = useObserverAnimation({
    amount: "many",
    classes: `.${styles['testimonials-content']}`,
    animateClass,
    threshold: 0.1
  })
  const refForTitle = useObserverAnimation({
    amount: "one",
    classes: `.${styles['testimonials-title']}`,
    animateClass,
    threshold: 0.2
  })

  return (
    <Container component='section' ref={refForTitle}>
      <div className={styles['testimonials-title']}>
        <Typography component='h2' variant='h2'>You&apos;re in<span> Good Company</span></Typography>
        <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
      </div>
      <div className={styles['testimonials-component']} ref={refForList}>
        {testimonialsMain.map(item =>
          <Fragment key={item.id}>
            <TestimonialCard text={item.text} name={item.name} role={item.role} src={item.src}/>
          </Fragment>
        )}
      </div>
    </Container>
  );
};

export default Testimonials;