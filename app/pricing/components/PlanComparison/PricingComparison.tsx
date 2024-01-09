import React from 'react';
import Container from "@/Components/Container/Container";
import styles from "./Comparison.module.scss";
import Typography from "@/Components/Typography/Typography";
import ComparisonTabs from "@/app/pricing/components/PlanComparison/ComparisonTabs";
import Tab from "@/app/pricing/components/Tab";
import CompareBlock from "@/app/pricing/components/PlanComparison/CompareBlock";
import {pricingFeatures} from "@/constants/pricingFeatures";

const PricingComparison = () => {

  const pricesMonths = {
    basic: "$19/mo",
    business: "$29/mo",
    enterprise: "$49/mo"
  }

  const pricesYearly = {
    basic: "$180/mo",
    business: "$280/mo",
    enterprise: "$480/mo"
  }

  return (
    <Container component='section'>
      <div className={styles['pricing-comparison-component']}>
        <div className={styles['pricing-plan-title']}>
          <Typography component='h2' variant='h2'>Plan <span>Comparison</span></Typography>
          <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </div>
        <ComparisonTabs>
          <Tab id="Tab 1" title="Monthly">
            <CompareBlock
              price={pricesMonths}
              features={pricingFeatures}
              />
          </Tab>
          <Tab id="Tab 2" title="Yearly">
            <CompareBlock
              price={pricesYearly}
              features={pricingFeatures}
            />
          </Tab>

        </ComparisonTabs>


      </div>
    </Container>
  );
};

export default PricingComparison;