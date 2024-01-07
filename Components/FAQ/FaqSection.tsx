'use client'

import React, {Fragment} from 'react';
import Container from "@/Components/Container/Container";
import styles from "./FaqSection.module.scss";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Typography from "@/Components/Typography/Typography";
import FaqItem from "@/Components/FAQ/FaqItem/FaqItem";
import {faqsMain} from "@/constants/faqsMain";
import faqItem from "@/Components/FAQ/FaqItem/FaqItem";


const FaqSection = () => {
  const animateClass = `${styles.fadeIn}`
  const refForList = useObserverAnimation({
    amount: "many",
    classes: `.${styles['faq-accordion']}`,
    animateClass,
    threshold: 0.1})
  const refForTitle = useObserverAnimation({
    amount: "one",
    classes: `.${styles['faq-title']}`,
    animateClass,
    threshold: 0.1})

  return (
    <Container component='section' ref={refForTitle}>
      <div className={styles['faq-title']}>
        <Typography component='h2' variant='h2'>FAQs</Typography>
        <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Typography>
      </div>
      <div className={styles['faq-list']} ref={refForList}>
        {faqsMain.map(faqItem =>
        <Fragment key={faqItem.id}>
          <FaqItem faqItem={faqItem}/>
        </Fragment>)}

      </div>
    </Container>
  );
};

export default FaqSection;