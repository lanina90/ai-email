'use client'

import React, {Fragment} from 'react';
import styles from '../Cases.module.scss';
import Container from "@/Components/Container/Container";
import FeatureCard from "@/Components/FeatureCard/FeatureCard";
import {cases} from "@/constants/cases";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";


const CasesList = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['cases-list']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={refForComponent} >
      <div className={styles['cases-list']}>
        {cases.map(product =>
        <Fragment key={product.id}>
          <FeatureCard icon={product.icon} alt={product.title} title={product.title} text={product.text}
                       link={product.link}/>
        </Fragment>)}
      </div>
    </Container>
  );
};

export default CasesList;