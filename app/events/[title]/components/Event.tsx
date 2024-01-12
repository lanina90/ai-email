'use client'

import React from 'react';
import Container from "@/Components/Container/Container";
import styles from "./Event.module.scss";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Typography from "@/Components/Typography/Typography";
import Button from "@/Components/UI/Button/Button";

interface EventProps {
  event: {
    id: number,
    link: string,
    src: string,
    srcSet: string,
    title: string,
    place: string,
    date: string,
    startTime: string,
    endTime: string,
    pageDesc: string,
    description: string,
    about: string,
    highlights: string[],
    attend: string,
    register: string,
  }
}

const Event = ({event}: EventProps) => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['event-component']}`,
    animateClass,
    threshold: 0.1
  })


  return (
    <Container component='section' ref={refForComponent}>
      <div className={styles['event-component']}>
        <div className={styles['event-info']}>
          <div className={styles['event-info-block']}>
            <Typography component='p' variant='p'>Location</Typography>
            <Typography component='p' variant='h5'>{event.place}</Typography>
          </div>
          <div className={styles['event-info-block']}>
            <Typography component='p' variant='p'>Date</Typography>
            <Typography component='p' variant='h5'>{event.date}</Typography>
          </div>
          <div className={styles['event-info-block']}>
            <Typography component='p' variant='p'>Start Time</Typography>
            <Typography component='p' variant='h5'>{event.startTime}</Typography>
          </div>
          <div className={styles['event-info-block']}>
            <Typography component='p' variant='p'>End Time</Typography>
            <Typography component='p' variant='h5'>{event.endTime}</Typography>
          </div>
        </div>
        <div className={styles['event-content-wrapper']}>
          <div className={styles['event-content']}>
            <img src={event.src} srcSet={event.srcSet} alt=""/>
            <div className={styles['event-text-wrapper']}>
              <div className={styles['event-text']}>
                <Typography component='p' variant='p' className={styles['event-text-desc']}>Description:</Typography>
                <Typography component='p' variant='p'>{event.description}</Typography>
              </div>
              <div className={styles['event-text']}>
                <Typography component='p' variant='p' className={styles['event-text-desc']}>About the
                  Event:</Typography>
                <Typography component='p' variant='p'>{event.about}</Typography>
              </div>
              <div className={styles['event-text']}>
                <Typography component='p' variant='p' className={styles['event-text-desc']}>Event
                  Highlights:</Typography>
                <ul>
                  {event.highlights.map((highlight, index) =>
                    <li key={index}>
                      {highlight}
                    </li>
                  )}
                </ul>
              </div>
              <div className={styles['event-text']}>
                <Typography component='p' variant='p' className={styles['event-text-desc']}>Who Should
                  Attend:</Typography>
                <Typography component='p' variant='p'>{event.attend}</Typography>
              </div>
              <div className={styles['event-text']}>
                <Typography component='p' variant='p' className={styles['event-text-desc']}>Register Today:</Typography>
                <Typography component='p' variant='p'>{event.register}</Typography>
              </div>
            </div>
          </div>
          <div className={styles['event-register']}>
            <Typography component='p' variant='h6'>Register for this Event</Typography>
            <Typography component='p' variant='p'>Use this Form to Register for the Event</Typography>
            <div>
              <form id="email-form-Job" name="email-form" aria-label="Email Form">
                <div className={styles["content-form-wrapper"]}>
                  <input className={styles["form-input"]}
                         maxLength={256}
                         name="Name"
                         placeholder="Enter your Name"
                         type="text"
                         id="Name" required/>
                  <input className={styles["form-input"]}
                         maxLength={256}
                         name="Email"
                         placeholder="Enter your email"
                         type="email"
                         id="Email"
                         required/>
                  <Button type="submit" component='button' variant={'filled'}
                          >Register</Button>
                </div>
                <Typography component='p' variant='p' className={styles["text-size-tiny"]}>By Registering for this Event, you agree to with our <a
                  href="/policies/privacy-policy">Privacy Policy.</a></Typography>
              </form>
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default Event;