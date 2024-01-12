'use client'

import React, {Fragment} from 'react';
import styles from './Events.module.scss'
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Container from "@/Components/Container/Container";
import EventCard from "@/app/events/components/EventCard";
import {events} from "@/constants/events";


const EventsList = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['events-component']}`,
    animateClass,
    threshold: 0.1
  })
  const refForList = useObserverAnimation({
    amount: "many",
    classes: `.${styles['event-card']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={refForComponent}>
      <div className={styles['events-component']} ref={refForList}>
        {events.map(event =>
        <Fragment key={event.id}>
          <EventCard title={event.title} link={event.link} date={event.date} src={event.src} srcSet={event.srcSet}
                     place={event.place} startTime={event.startTime} endTime={event.endTime}/>
        </Fragment>)}

      </div>
    </Container>
  );
};

export default EventsList;