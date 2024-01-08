import React from 'react';
import Link from "next/link";
import Typography from "@/Components/Typography/Typography";
import {Linkedin, Mail, Twitter} from "lucide-react";
import styles from '../Team.module.scss'

interface PersonProps{
  person:{
    id: number,
    img: string,
    name: string,
    role: string,
    text: string,

  }
}
const Person = ({person}:PersonProps) => {
  return (
    <div className={styles['team-item']}>
      <Link href="/team/sarah-thompson" className={styles['team-link']}>
        <div className={styles['team-image-wrapper']}>
          <img loading="lazy"
               src={person.img}
               alt={person.name}/>
        </div>
        <div>
          <Typography component='h3' variant='h5' className={styles['person-name']}>{person.name}</Typography>
          <Typography component='p' variant='p' className={styles['person-role']}>{person.role}</Typography>
        </div>
        <Typography component='p' variant='p' className={styles['person-about']}>{person.text}</Typography>
      </Link>
      <div className={styles['team-social']}>
        <a href="http://linkedin.com" className={styles['team-social-link']}>
          <div className={styles['team-social-icon']}>
            <Linkedin/>
          </div>
        </a>
        <a href="http://twitter.com" className={styles['team-social-link']}>
          <div className={styles['team-social-icon']}>
            <Twitter/>
          </div>
        </a>
        <a href="mailto:teammember@email.com" className={styles['team-social-link']}>
          <div className={styles['team-social-icon']}>
            <Mail/>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Person;