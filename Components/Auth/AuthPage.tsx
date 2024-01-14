import React from 'react';
import styles from "./Auth.module.scss";
import Typography from "@/Components/Typography/Typography";
import AuthForm from "@/Components/Auth/AuthForm/AuthForm";
import Container from "@/Components/Container/Container";

const AuthPage = ({page, title, subtitle}: {page: "signup" | "signin", title:string, subtitle:string}) => {

  return (
    <Container component='section'>
      <div className={styles['auth-component']}>
        <div className={styles['auth-heading']}>
          <Typography component='h1' variant='h2'>{title}</Typography>
          <Typography component='p' variant='p'>{subtitle}</Typography>
        </div>
        <AuthForm page={page}/>
      </div>
    </Container>
  );
};

export default AuthPage;