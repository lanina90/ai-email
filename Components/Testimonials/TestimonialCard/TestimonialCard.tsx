import React from 'react';
import Typography from "@/Components/Typography/Typography";
import styles from '../Testimonials.module.scss'

const TestimonialCard = ({text, name, role, src}:{text:string, name:string, role:string, src:string}) => {
  return (
    <div className={styles['testimonials-content']}>
      <Typography component='p' variant='p'>{text}</Typography>
      <div className={styles['testimonials-client']}>
        <div className={styles['testimonials-client-image-wrapper']}>
          <img
            src={src}
            loading="lazy" width="100" alt={name}/>
        </div>
        <div className={styles['testimonials-client-info']}>
          <Typography component='p' variant='p' className={styles.name}>{name}</Typography>
          <Typography component='p' variant='p'>{role}</Typography>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;