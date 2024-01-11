'use client'

import React from 'react';
import styles from './ContactUs.module.scss'
import Container from "@/Components/Container/Container";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Typography from "@/Components/Typography/Typography";
import {Briefcase, MessageCircleMore, Users} from "lucide-react";
import Button from "@/Components/UI/Button/Button";

const ContactUs = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['contact-components']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={refForComponent}>
      <div className={styles['contact-components']}>
        <Typography component='h1' variant='h2'>Got any Questions?</Typography>
        <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in ero.</Typography>
      </div>
      <div className={styles['contact-list']}>
        <div className={styles['contact-item']}>
          <div className={styles['contact-icon']}>
            <Users />
          </div>
          <Typography component='h3' variant='h4'>Sales</Typography>
          <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in ero.</Typography>
          <Button variant='text' component='link' href='/contact#Contact-Section'>Contact sales</Button>
        </div>
        <div className={styles['contact-item']}>
          <div className={styles['contact-icon']}>
            <MessageCircleMore />
          </div>
          <Typography component='h3' variant='h4'>Live Chat</Typography>
          <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in ero.</Typography>
          <Button variant='text' component='link' href='/contact#Contact-Section'>Click for Live Chat</Button>
        </div>
        <div className={styles['contact-item']}>
          <div className={styles['contact-icon']}>
            <Briefcase />
          </div>
          <Typography component='h3' variant='h4'>Media & Press</Typography>
          <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in ero.</Typography>
          <Button variant='text' component='link' href='/contact#Contact-Section'>Get press kit</Button>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;