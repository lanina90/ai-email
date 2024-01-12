'use client'

import React from 'react';
import Container from "@/Components/Container/Container";
import styles from './Features.module.scss'
import Typography from "@/Components/Typography/Typography";
import FeatureCard from "@/app/features/components/Features/FeatureCard";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";


const Features = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['features-title']}`,
    animateClass,
    threshold: 0.1
  })

  const refForList = useObserverAnimation({
    amount: "many",
    classes: `.${styles['feature-card']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={refForComponent}>
      <div className={styles['features-title']}>
        <Typography component='h2' variant='h2'>Revolutionize Your Workflow with Cutting-edge Features</Typography>
        <div className={styles['features-text']}>
          <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
            faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique
            quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</Typography>
          <Typography component='p' variant='p'>Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
            eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper
            nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla
            arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta.
          </Typography>
        </div>
      </div>
      <div className={styles['features-list']} ref={refForList}>
        <FeatureCard img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfadac/6576c33d271670c966b13716_Outbox.png'
                     title='Security Shield'
                     text='Enhances cybersecurity with advanced spam and phishing detection, safeguarding users from malicious email threats.'
        />
        <FeatureCard
          img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfadac/6576c2f95a8a12646b312510_Contact_Mail.png'
          title='Language Translation'
          text='Breaks language barriers by translating emails in real-time, fostering seamless communication across diverse languages'
        />
        <FeatureCard
          img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfadac/6576c2d5e64ae8bdcdc87cd9_Mail_Fill.png'
          title='Attachment Insights:'
          text='Provides at-a-glance summaries of email attachments, offering quick insights without opening files.'
        />
        <FeatureCard
          img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfadac/6576c2a683c24fa545451c13_Send.png'
          title='Quick Reply'
          text='Speeds up response time with instant, context-aware reply suggestions, improving overall communication efficiency.'
        />
        <FeatureCard
          img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfadac/6576c25a67e03e7cf4dd13db_Subject.png'
          title='Smart Filtering'
          text='Utilizes AI algorithms to intelligently filter out irrelevant emails, ensuring a focused and distraction-free inbox.'
        />
        <FeatureCard
          img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfadac/6576c373251a3b5b975124fa_Notification.png'
          title='Auto-Categorization'
          text='Streamlines organization by automatically sorting emails into relevant categories, enhancing inbox clarity.'
        />

      </div>
    </Container>
  );
};

export default Features;