import React, {ReactNode} from 'react';
import styles from "@/app/pricing/components/PlanComparison/Comparison.module.scss";
import Typography from "@/Components/Typography/Typography";

const FeatureRow = ({name, cell1, cell2, cell3}: { name: string,
  cell1: string | ReactNode,
  cell2: string | ReactNode,
  cell3: string | ReactNode,}) => {
  return (
    <div className={styles['pricing-category-content']}>
      <div className={styles['pricing-compare-row']}>
        <div className={styles['pricing-compare-feature']}>
          <Typography component='p' variant='p'>{name}</Typography>
        </div>
        <div className={styles['pricing-compare-row-content']}>
          {cell1}
        </div>
        <div className={styles['pricing-compare-row-content']}>
          {cell2}
        </div>
        <div className={styles['pricing-compare-row-content']}>
          {cell3}
        </div>
      </div>
    </div>
  );
};

export default FeatureRow;