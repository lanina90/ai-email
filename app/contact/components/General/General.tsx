'use client'

import React from 'react';
import Container from "@/Components/Container/Container";
import styles from "./General.module.scss";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Typography from "@/Components/Typography/Typography";

const General = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['general-contact-block']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={refForComponent}>
      <div className={styles['general-contact-block']}>
        <Typography component='h2' variant='h5'>General enquiries</Typography>
        <Typography component='p' variant='p'>For general queries, including partnership opportunities, please email <a
          href="#" >hello@companyname.com</a></Typography>
      </div>
    </Container>
  );
};

export default General;