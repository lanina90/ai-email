'use client'

import React from 'react';
import styles from './Testimonial.module.scss'
import Container from "@/Components/Container/Container";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import {Star} from "lucide-react";
import Typography from "@/Components/Typography/Typography";

const TestimonialSingle = () => {
  const animateClass = `${styles.fadeIn}`
  const refForTitle = useObserverAnimation({
    amount: "one",
    classes: `.${styles['testimonial-component']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={refForTitle}>
      <div className={styles['testimonial-component']}>
        <div className={styles['testimonial-single']}>
          <img
            src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc6_Testimonial.jpg"
            loading="lazy" width="616" sizes="(max-width: 767px) 90vw, (max-width: 1439px) 42vw, 600px" alt="People"
            srcSet="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc6_Testimonial-p-500.jpg 500w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc6_Testimonial.jpg 1232w"
            className={styles["testimonial-client-image"]}/>
          <div className={styles['testimonial-single-content']}>
            <div className={styles['testimonial-single-stars']}>
              <Star color='yellow' fill='yellow'/>
              <Star color='yellow' fill='yellow'/>
              <Star color='yellow' fill='yellow'/>
              <Star color='yellow' fill='yellow'/>
              <Star color='yellow' fill='yellow'/>
            </div>
            <Typography component='p' variant='h5'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
              interdum nulla, ut commodo diam libero vitae erat.&quot;</Typography>
            <div className={styles['testimonial-single-client']}>
              <div>
                <Typography component='p' variant='p' className={styles['client-name']}>James Cameron</Typography>
                <Typography component='p' variant='p'>CEO, Cardbox</Typography>
              </div>
              <div className={styles["divider"]}></div>
              <img
                src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6576c06763d9e80a5661e235_FeatherDev.png"
                loading="lazy" width="170" alt="Logo" className="testimonial-single-logo"/>
            </div>
          </div>
        </div>

      </div>

    </Container>
  );
};

export default TestimonialSingle;