import React from 'react';
import Container from "@/Components/Container/Container";
import BackGround from "@/Components/BackGround/BackGround";
import styles from "./PageHero.module.scss";
import Typography from "@/Components/Typography/Typography";

const PageHero = ({title, text}: { title: string, text: string }) => {
  return (
    <Container component='section'>
      <BackGround backgroundGradient={false}/>
      <div className={styles['hero-section']}>
        <Typography component='h1' variant='h1'>{title}</Typography>
        <Typography component='p' variant='p'>{text}</Typography>
      </div>

    </Container>
  );
};

export default PageHero;