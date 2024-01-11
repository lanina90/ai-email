'use client'

import React, {Fragment} from 'react';
import Container from "@/Components/Container/Container";
import styles from './Team.module.scss'
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Typography from "@/Components/Typography/Typography";
import Person from "@/app/about/components/Team/Person/Person";
import {team} from "@/constants/team";

const Team = () => {

  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['team-components']}`,
    animateClass,
    threshold: 0.1
  })
  const refForList = useObserverAnimation({
    amount: "many",
    classes: `.${styles['team-item']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={refForComponent}>
      <div className={styles['team-component']}>
        <div className={styles['team-title']}>
          <Typography component='h2' variant='h2'>Our team</Typography>
          <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </div>
        <div className={styles['team-list']} ref={refForList}>
          {team.map(person =>
            <Fragment key={person.id}>
              <Person person={person}/>
            </Fragment>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Team;