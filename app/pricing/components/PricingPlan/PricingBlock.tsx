import React from 'react';
import styles from './PricingPlan.module.scss'
import Typography from "@/Components/Typography/Typography";
import Button from "@/Components/UI/Button/Button";
import {Check} from "lucide-react";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";


const PricingBlock = ({discount = false,title, price, features}: {discount?: boolean, title:string, price:string, features:string[]}) => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['pricing-content']}`,
    animateClass,
    threshold: 0.1
  })


  return (
    <div className={styles["pricing-plan"]} ref={refForComponent}>
      <div className={styles["pricing-content"]}>
        <Typography component='p' variant='h6' className={styles['title']}>{title}</Typography>
        <Typography component='p' variant='p' className={styles['title']}>Lorem ipsum dolor sit amet</Typography>
        <div className={styles["pricing-divider"]}></div>
        <Typography component='p' variant='h1' className={styles['price']}>{price}</Typography>
        {discount && <p className={styles["discount"]}>Save 20%</p>}
        <Button variant='filled' component='link' href='/sign-up' className={styles['button']}>Get started</Button>
        <div className={styles["pricing-divider"]}></div>
        <div className={styles["pricing-feature-list"]}>
          {features.map((feature: any) => (
            <div key={feature} className={styles["pricing-feature"]}>
              <div className={styles["pricing-feature-icon"]}>
                <Check/>
              </div>
              <Typography component='p' variant='p'>{feature}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingBlock;