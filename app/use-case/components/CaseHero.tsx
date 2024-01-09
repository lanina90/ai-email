import React from 'react';
import BackGround from "@/Components/BackGround/BackGround";
import styles from '../Cases.module.scss';
import Typography from "@/Components/Typography/Typography";
import Container from "@/Components/Container/Container";

const CaseHero = () => {
  return (
    <Container component='section'>
      <BackGround backgroundGradient={false}/>
      <div className={styles['cases-hero']}>
        <Typography component='h1' variant='h1'>Use Case</Typography>
        <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in.
        </Typography>
      </div>
    </Container>
  );
};

export default CaseHero;