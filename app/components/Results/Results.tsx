'use client'

import React from 'react';
import Container from "@/Components/Container/Container";
import styles from './Results.module.scss'
import Typography from "@/Components/Typography/Typography";
import FeatureCard from "@/Components/FeatureCard/FeatureCard";
import Button from "@/Components/UI/Button/Button";
import classNames from "classnames";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";

const Results = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['results-components']}`,
    animateClass,
    threshold: 0.1
  })


  return (
    <Container component='section' ref={refForComponent} >
      <div className={styles['results-component']}>
        <div className={styles['results-text']} >
          <Typography component='h2' variant='h2' className={styles['feature-title']}>Get Better Result with <span>Real World Use Cases</span></Typography>
          <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat.</Typography>
          <Button href='/use-case' variant='text' component='link'>All Use Case</Button>
        </div>
        <div className={styles['results-cards']} >
         <div className={classNames(styles['results-item'], styles['item-1'])}>
           <FeatureCard
             img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6576c4072bd40c43869f4c54_Mail_Fill.png'
             alt='security'
             title='Business Productivity'
             text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
           />
         </div>
          <div className={classNames(styles['results-item'], styles['item-1'])}>
            <FeatureCard
              img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6576c4072bd40c43869f4c54_Mail_Fill.png'
              alt='Customer Engagement'
              title='Customer Engagement'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
            />
          </div>
          <div className={classNames(styles['results-item'], styles['item-1'])}>
            <FeatureCard
              img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6576c4075a8a12646b319191_Contact_Mail.png'
              alt='Remote Collaboration'
              title='Remote Collaboration'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
            />
          </div>
          <div className={classNames(styles['results-item'], styles['item-1'])}>
            <FeatureCard
              img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6576c4082dfb1e7af18020ee_Outbox.png'
              alt='Security Defense'
              title='Security Defense'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Results;