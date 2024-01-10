import React from 'react';
import Container from "@/Components/Container/Container";
import BackGround from "@/Components/BackGround/BackGround";
import styles from "./CareerHero.module.scss";
import Typography from "@/Components/Typography/Typography";

const CareerHero = () => {
  return (
    <Container component='section'>
      <BackGround backgroundGradient={false}/>
      <div className={styles['career-hero']}>
        <Typography component='h1' variant='h1'>Join the team and make a difference</Typography>
        <Typography component='p' variant='p'>We are committed to empowering businesses with cutting-edge technology that streamlines their content creation process and enables them to communicate effectively, authentically, and at scale.
        </Typography>
      </div>

    </Container>
  );
};

export default CareerHero;