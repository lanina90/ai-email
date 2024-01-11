import React from 'react';
import Container from "@/Components/Container/Container";
import styles from './NotFound.module.scss'
import BackGround from "@/Components/BackGround/BackGround";
import Typography from "@/Components/Typography/Typography";
import Button from "@/Components/UI/Button/Button";

const NotFound = () => {
  return (
    <Container component='section' className={styles['not-found-components']}>
      <BackGround/>
      <div className={styles['not-found-section']}>
        <Typography component='h2' variant='h2'>Page Not Found</Typography>
        <Typography component='p' variant='p'>The page you are looking for doesn&apos;t exist or has been
          moved</Typography>
        <Button variant='filled' component='link' href='/'>Back Home</Button>
      </div>
    </Container>
  );
};

export default NotFound;