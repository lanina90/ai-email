import React, {Fragment, ReactNode} from 'react';
import styles from './Comparison.module.scss'
import TopRow from "@/app/pricing/components/PlanComparison/TopRow";
import Typography from "@/Components/Typography/Typography";
import FeatureRow from "@/app/pricing/components/PlanComparison/FeatureRow";
import Button from "@/Components/UI/Button/Button";

export interface CompareBlockProps {
  price: {
    basic: string,
    business: string,
    enterprise: string
  },
  discount?: boolean,
  features: {
    id: number,
    name: string,
    cell1: string | ReactNode,
    cell2: string | ReactNode,
    cell3: string | ReactNode,
  }[]
}

const CompareBlock = ({price, features, discount = false}: CompareBlockProps) => {
  return (
    <div className={styles['pricing-compare-plans']}>
      <TopRow price={price} discount={discount}/>
      <div className={styles['pricing-category-wrapper']}>
        <Typography component='p' variant='h6'>Core Functionality</Typography>
        {features.map(feature =>
          <Fragment key={feature.id}>
            <FeatureRow name={feature.name} cell1={feature.cell1} cell2={feature.cell2} cell3={feature.cell3}/>
          </Fragment>
        )}
      </div>
      <div className={styles['pricing-compare-bottom-row']}>
        <div className={styles['pricing-compare-empty-space']}/>
        <Button variant='filled' component='link' href='/sign-up' className={styles['button']}>Get started</Button>
        <Button variant='filled' component='link' href='/sign-up' className={styles['button']}>Get started</Button>
        <Button variant='filled' component='link' href='/sign-up' className={styles['button']}>Get started</Button>
      </div>
    </div>
  );
};

export default CompareBlock;