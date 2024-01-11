import React, {Fragment} from 'react';
import Container from "@/Components/Container/Container";
import styles from './IntegrationList.module.scss'
import FeatureCard from "@/Components/FeatureCard/FeatureCard";
import {integration} from "@/constants/integration";

const IntegrationsList = () => {
  return (
    <Container component='section' >
      <div className={styles['integration-components']}>
        {integration.map(item =>
        <Fragment key={item.id}>
          <FeatureCard alt={item.title} title={item.title} text={item.text} img={item.icon} link={item.link}/>
        </Fragment>
        )}
      </div>
    </Container>
  );
};

export default IntegrationsList;