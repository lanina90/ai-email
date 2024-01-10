'use client'

import React from 'react';
import styles from "./ContactSales.module.scss";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Container from "@/Components/Container/Container";
import Typography from "@/Components/Typography/Typography";
import ContactForm from "@/app/contact/components/ContactSales/ContactForm";

const ContactSales = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['contact-sales-component']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={refForComponent}>
      <div className={styles['contact-sales-component']}>
        <Typography component='h2' variant='h2'>Contact Sales</Typography>
        <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
      </div>
      <ContactForm/>
    </Container>
  );
};

export default ContactSales;