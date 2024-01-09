import React from 'react';
import styles from './Comparison.module.scss'
import Typography from "@/Components/Typography/Typography";
import Button from "@/Components/UI/Button/Button";

const TopRow = ({price, discount = false}: {price: {
    basic: string,
    business: string,
    enterprise: string
  },
  discount?: boolean,}) => {
  return (
    <div className={styles['pricing-compare-top-row']}>
      <div className={styles["pricing-compare-empty-space"]}/>
      <div className={styles["top-row-content"]}>
        <div className={styles["top-row-wrapper"]}>
          <Typography component='p' variant='h6'>Basic</Typography>
          <Typography component='p' variant='p' className={styles.price}>{price.basic}</Typography>
          {discount && <Typography component='p' variant='p' className={styles.discount}>Save 20%</Typography>}
        </div>
        <Button variant='filled' component='link' href='/sign-up'>Get Started</Button>
      </div>
      <div className={styles["top-row-content"]}>
        <div className={styles["top-row-wrapper"]}>
          <Typography component='p' variant='h6'>Basic</Typography>
          <Typography component='p' variant='p' className={styles.price}>{price.business}</Typography>
          {discount && <Typography component='p' variant='p' className={styles.discount}>Save 20%</Typography>}
        </div>
        <Button variant='filled' component='link' href='/sign-up'>Get Started</Button>
      </div>
      <div className={styles["top-row-content"]}>
        <div className={styles["top-row-wrapper"]}>
          <Typography component='p' variant='h6'>Basic</Typography>
          <Typography component='p' variant='p' className={styles.price}>{price.enterprise}</Typography>
          {discount && <Typography component='p' variant='p' className={styles.discount}>Save 20%</Typography>}
        </div>
        <Button variant='filled' component='link' href='/sign-up'>Get Started</Button>
      </div>
    </div>
  );
};

export default TopRow;