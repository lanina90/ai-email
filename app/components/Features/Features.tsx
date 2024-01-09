'use client'

import React from 'react';
import styles from './Features.module.scss'
import Typography from "@/Components/Typography/Typography";
import FeatureCard from "@/Components/FeatureCard/FeatureCard";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Container from "@/Components/Container/Container";


const Features = () => {
  const animateClass = `${styles.fadeIn}`
  const RefForList = useObserverAnimation({
    amount: "many",
    classes: `.${styles['feature-list__item']}`,
    animateClass,
    threshold: 0.1
  })
  const RefForTitle = useObserverAnimation({
    amount: "one",
    classes: `.${styles['feature-title']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={RefForTitle}>
      <Typography component='h2' variant='h2' className={styles['feature-title']}>Get Better Result with <span>Stunning Features</span></Typography>
      <div className={styles['feature-list']} ref={RefForList}>
       <FeatureCard
         img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfadac/6576c33d271670c966b13716_Outbox.png'
         alt='security'
         title='Security Shield'
         text='Enhances cybersecurity with advanced spam and phishing detection, safeguarding users from malicious email threats.'
         link='/feature/security-shield'
       />
        <FeatureCard
          img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfadac/6576c2f95a8a12646b312510_Contact_Mail.png'
          alt='translation'
          title='Language Translation'
          text='Breaks language barriers by translating emails in real-time, fostering seamless communication across diverse languages'
          link='/feature/language-translation'
        />
        <FeatureCard
          img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfadac/6576c2d5e64ae8bdcdc87cd9_Mail_Fill.png'
          alt='insights'
          title='Attachment Insights:'
          text='Provides at-a-glance summaries of email attachments, offering quick insights without opening files.'
          link='/feature/attachment-insights'
        />
        <FeatureCard
          img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfadac/6576c2a683c24fa545451c13_Send.png'
          alt='quick reply'
          title='Quick Reply'
          text='Speeds up response time with instant, context-aware reply suggestions, improving overall communication efficiency.'
          link='/feature/quick-reply'
        />
        <FeatureCard
          img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfadac/6576c25a67e03e7cf4dd13db_Subject.png'
          alt='Smart Filtering'
          title='Smart Filtering'
          text='Utilizes AI algorithms to intelligently filter out irrelevant emails, ensuring a focused and distraction-free inbox.'
          link='/feature/smart-filtering'
        />
        <FeatureCard
          img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfadac/6576c373251a3b5b975124fa_Notification.png'
          alt='Auto-Categorization'
          title='Auto-Categorization'
          text='Streamlines organization by automatically sorting emails into relevant categories, enhancing inbox clarity.'
          link='/feature/auto-categorization'
        />


      </div>
    </Container>
  );
};

export default Features;