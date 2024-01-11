'use client'

import React, {useState} from 'react';
import styles from './PricingPlan.module.scss'

const Tabs = ({ children } : any ) => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  return (
    <div className={styles["pricing-components"]}>
      <div className={styles['pricing-tabs-menu']} role="tablist">
        {React.Children.map(children, child => (
          React.cloneElement(child, { isActive: child.props.id === activeTab, setActiveTab })
        ))}
      </div>
      <div className={styles["w-tab-content"]}>
        {React.Children.map(children, child => (
          child.props.id === activeTab && child.props.children
        ))}
      </div>
    </div>
  );
};

export default Tabs;