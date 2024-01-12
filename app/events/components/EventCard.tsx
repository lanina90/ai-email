import React from 'react';
import styles from './Events.module.scss'
import Typography from "@/Components/Typography/Typography";
import Link from "next/link";

interface EventCardProps{
  link:string,
  src:string,
  srcSet:string,
  title:string,
  place:string,
  date:string,
  startTime:string
  endTime:string

}
const EventCard = ({link, src, srcSet, title, place, date, startTime, endTime} : EventCardProps) => {
  return (
    <div className={styles['event-card']}>
      <div className={styles['event-wrapper']}>
        <Link href={link} className={styles['event-image-link']}>
          <div className={styles['image-wrapper']}>
            <img alt="Event Image" loading="lazy"
                 src={src}
                 sizes="(max-width: 767px) 99vw, (max-width: 1439px) 48vw, (max-width: 1919px) 685.1796875px, 36vw"
                 srcSet={srcSet}
            />
          </div>
        </Link>
        <Typography component='p' variant='p' className={styles['event-title']}>{place}</Typography>
        <Link href={link}>
          <Typography component='h3' variant='h5'>{title}</Typography>
        </Link>
      </div>
      <Typography component='p' variant='p'>{date}</Typography>
      <Typography component='p' variant='p'>{startTime} am • {endTime} pm</Typography>
    </div>
  );
};

export default EventCard;