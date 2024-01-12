import React from 'react';
import styles from './Features.module.scss'
import Typography from "@/Components/Typography/Typography";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";

const FeatureCard = ({title, text, img} : {title:string, text:string, img:string}) => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['features-title']}`,
    animateClass,
    threshold: 0.1
  })
  return (
    <div className={styles['feature-card']}>
      <div className={styles['feature-card-icon']}>
        <div className={styles['icon-wrapper']}>
          <img
            src={img}
            loading="lazy" width="32" alt=""/>
        </div>
      </div>
      <div className={styles['feature-card-content']}>
        <Typography component='h3' variant='h6'>{title}</Typography>
        <Typography component='p' variant='p'>{text}</Typography>
      </div>
    </div>
  );
};

export default FeatureCard;