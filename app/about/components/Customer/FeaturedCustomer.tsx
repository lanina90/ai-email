'use client'

import React from 'react';
import Container from "@/Components/Container/Container";
import styles from './FeaturedCustomer.module.scss'
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Typography from "@/Components/Typography/Typography";
import Button from "@/Components/UI/Button/Button";
import FeatureCard from "@/Components/FeatureCard/FeatureCard";

const FeaturedCustomer = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['featured-list']}`,
    animateClass,
    threshold: 0.1
  })
  const refForList = useObserverAnimation({
    amount: "many",
    classes: `.${styles['feature-list__item']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={refForComponent}>
      <Typography component='h2' variant='h2'>Featured <span>Customer</span></Typography>
      <div className={styles['featured-list']} ref={refForList}>
        <FeatureCard alt='Epicurious' title='Epicurious' link='/customer/epicurios'
                     img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfadac/657720355aae29362c8a7bb2_Epicurious.png'
                     text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'/>
        <FeatureCard
          link='/customer/acme-corp'
          img='https://assets-global.website-files.com/656f1d3d61238bb5e4dfadac/6577204042d445a3018279cf_Acme%20Corp.png'
          alt='Acme Corp' title='Acme Corp'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'/>
      </div>
    </Container>
  );
};

export default FeaturedCustomer;