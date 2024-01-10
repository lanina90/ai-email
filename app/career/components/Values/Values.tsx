'use client'

import React, {Fragment, ReactNode} from 'react';
import styles from "./Values.module.scss";
import Typography from "@/Components/Typography/Typography";
import Container from "@/Components/Container/Container";
import Card from "@/app/career/components/Card/Card";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import {useCombinedRefs} from "@/hooks/useCombinedRefs";

interface ValuesProps {
  title: string,
  text: string,
  data: {
    id: number,
    title: string,
    icon:  ReactNode,
    text: string,
  }[]
}


const Values = ({title, text, data}: ValuesProps) => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['values-section']}`,
    animateClass,
    threshold: 0.1
  })

  const refForList = useObserverAnimation({
    amount: "one",
    classes: `.${styles['values-content']}`,
    animateClass,
    threshold: 0.1
  })

  const combinedRefs = useCombinedRefs(refForComponent, refForList)


  return (
    <Container component='section' ref={combinedRefs}>
      <div className={styles['values-section']}>
        <Typography component='h2' variant='h2'>{title}</Typography>
        <Typography component='p' variant='p'>{text}</Typography>
      </div>
      <div className={styles['values-content']}>
        {data.map(item =>
          <Fragment key={item.id}>
            <Card icon={item.icon} title={item.title} text={item.text}/>
          </Fragment>
        )}
      </div>
    </Container>
  );
};

export default Values;