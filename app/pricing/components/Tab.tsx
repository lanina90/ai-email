'use client'

import React from 'react';
import styles from './PricingPlan/PricingPlan.module.scss'

const Tab = ({ id, title, isActive, setActiveTab } : any) => {
  return (
    <>
      <a className={`${styles['pricing-tab-link']} ${isActive ? styles.current : ''}`}
         onClick={() => setActiveTab(id)}
         role="tab">
        <div>{title}</div>
      </a>
    </>
  );
};

export default Tab;