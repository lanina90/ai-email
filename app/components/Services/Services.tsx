'use client'

import React from 'react';
import styles from './Services.module.scss'
import Typography from "@/Components/Typography/Typography";
import classNames from "classnames";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Container from "@/Components/Container/Container";

const Services = () => {
  const animateClass = `${styles.fadeIn}`
  const RefForList = useObserverAnimation({
    amount: "many",
    classes: `.${styles['service-item']}`,
    animateClass,
    threshold: 0.1})
  const RefForTitle = useObserverAnimation({
    amount: "one",
    classes: `.${styles['service-title']}`,
    animateClass,
    threshold: 0.1})

  return (
    <Container component='section' ref={RefForTitle}>
      <Typography component='h2' variant='h2' className={styles['service-title']}>Beyond Templates: <span>Your Personal Assistant</span></Typography>
      <div className={styles['service-list']}  ref={RefForList}>
        <div data-area="grid-area" className={styles['service-item']}>
          <div className={styles['service-image-wrapper']}>
            <img
              src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794d6b9f04041285ecd6_Service_Frame_2.png"
              loading="lazy" height="" alt="Frame" width="624"
              srcSet="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794d6b9f04041285ecd6_Service_Frame_2-p-500.png 500w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794d6b9f04041285ecd6_Service_Frame_2.png 1248w"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 81vw, (max-width: 991px) 23vw, (max-width: 1439px) 24vw, 344.6640625px"
              className={styles['service-image']}/>
          </div>
          <div className={styles['service-info']}>
            <Typography component='h3' variant='h5'>Minimize Project Delays and Accelerate Process</Typography>
            <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
              nulla.</Typography>
          </div>
        </div>
        <div className={classNames(styles['service-item'], styles['box-bg'])}>
          <div className={styles['service-image-wrapper']}>
            <img
              src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/65770cfc0ddf6e8399da64f0_Service_Frame_4.png"
              loading="lazy" height="" alt="Frame" width="265" className="service-image"/>
          </div>
          <div className={styles['service-info']}>
            <Typography component='h3' variant='h5'>Enhance Workflow </Typography>
            <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Typography>
          </div>
        </div>
        <div className={styles['service-item']}>
          <div className={styles['service-image-wrapper']}>
            <img
              src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794caaedf9d2fe0b608c_Service_Frame_1.png"
              loading="lazy" height="" alt="Frame" width="265" className="service-image"/>
          </div>
          <div className={styles['service-info']}>
            <Typography component='h3' variant='h5'>Loaded Commands </Typography>
            <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Typography>
          </div>
        </div>
        <div data-area="grid-area" className={styles['service-item']}>
          <div className={styles['service-image-wrapper']}>
            <img
              src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794bc2b9a20365e3039f_Service_Frame_3.png"
              loading="lazy" height="" alt="Frame" width="624" className="service-image"/>
          </div>
          <div className={styles['service-info']}>
            <Typography component='h3' variant='h5'>Broaden Services for Diverse Client Needs </Typography>
            <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
              nulla. </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;