import React from 'react';
import Container from "@/Components/Container/Container";
import BackGround from "@/Components/BackGround/BackGround";
import styles from "./PricingHero.module.scss";
import Typography from "@/Components/Typography/Typography";

const PricingHero = () => {
  return (
    <Container component='section'>
      <BackGround backgroundGradient={false}/>
      <div className={styles['pricing-hero']}>
        <Typography component='h1' variant='h1'>Pricing Details</Typography>
        <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in.
        </Typography>
      </div>
    </Container>
  );
};

export default PricingHero;