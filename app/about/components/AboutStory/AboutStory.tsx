'use client'

import React, {Fragment, useEffect, useRef, useState} from 'react';
import Container from "@/Components/Container/Container";
import styles from './AboutStory.module.scss'
import Typography from "@/Components/Typography/Typography";
import Step from "@/app/about/components/AboutStory/Step/Step";
import {steps} from "@/constants/steps";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";

const AboutStory = () => {
  const [height, setHeight] = useState(0)
  const componentRef = useRef <HTMLDivElement>(null);
  const isComponentVisible = useRef(false);
  const lastScrollTop = useRef(0);

  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['story']}`,
    animateClass,
    threshold: 0.1
  })




  const handleScroll = () => {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (isComponentVisible.current) {
      if (currentScrollTop > lastScrollTop.current) {
           setHeight((prevHeight) => (prevHeight + 1));
      } else {
        setHeight((prevHeight) => (prevHeight - 1));
      }
    }

    lastScrollTop.current = currentScrollTop;
  };

  useEffect(() => {
    const currentRef = componentRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isComponentVisible.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll);
        } else {
          window.removeEventListener('scroll', handleScroll);
          setHeight(0);
        }
      });
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <Container component='section' ref={refForComponent}>
      <div className={styles['story']}>
        <div className={styles['content-left']}>
          <span className={styles['text-colored']}>Our story</span>
          <Typography component='h2' variant='h2'>
            Let&apos;s embark on the journey of <span>how it all started...</span>
          </Typography>
        </div>
        <div className={styles['content-right']} >
          <div className={styles['progress-bar-wrapper']} ref={componentRef}>
            <div className={styles['progress-bar']} style={{height: `${height}%`, maxHeight: '100%'}}/>
          </div>
          {steps.map(step  =>
          <Fragment key={step.id}>
            <Step step={step}/>
          </Fragment>)}
        </div>
      </div>
    </Container>
  );
};

export default AboutStory;