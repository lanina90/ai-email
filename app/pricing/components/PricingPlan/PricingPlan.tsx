'use client'

import React from 'react';
import Container from "@/Components/Container/Container";
import Typography from "@/Components/Typography/Typography";
import styles from './PricingPlan.module.scss'
import Tabs from "@/app/pricing/components/PricingPlan/Tabs";
import Tab from "@/app/pricing/components/Tab";
import PricingBlock from "@/app/pricing/components/PricingPlan/PricingBlock";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";

const PricingPlan = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['pricing-plan-title']}`,
    animateClass,
    threshold: 0.1
  })


  return (
    <Container component='section' ref={refForComponent}>
      <div className={styles['pricing-plan-component']}>
        <div className={styles['pricing-plan-title']}>
          <Typography component='h2' variant='h2'>Pricing <span>Plan</span></Typography>
          <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </div>
        <Tabs>
          <Tab id="Tab 1" title="Monthly">
            <PricingBlock
              title="Basic Plan"
              price="$19/mo"
              features={['Automatic updates', 'Support Assistance', 'Customization']}
            />
            <PricingBlock
              title="Business plan"
              price="$29/mo"
              features={['Automatic updates', 'Support Assistance', 'Customization', 'Language Support', 'Collaboration']}
            />
            <PricingBlock
              title="Enterprise plan"
              price="$49/mo"
              features={['Automatic updates', 'Support Assistance', 'Customization', 'Language Support', 'Collaboration']}
            />
          </Tab>
          <Tab id="Tab 2" title="Yearly">
            <PricingBlock
              title="Basic Plan"
              price="$180/yr"
              features={['Automatic updates', 'Support Assistance', 'Customization']}
              discount
            />
            <PricingBlock
              title="Business plan"
              price="$280/yr"
              discount
              features={['Automatic updates', 'Support Assistance', 'Customization', 'Language Support', 'Collaboration']}
            />
            <PricingBlock
              title="Enterprise plan"
              price="$480/yr"
              discount
              features={['Automatic updates', 'Support Assistance', 'Customization', 'Language Support', 'Collaboration']}
            />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default PricingPlan;