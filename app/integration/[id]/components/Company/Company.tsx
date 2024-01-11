import React from 'react';
import Container from "@/Components/Container/Container";
import styles from './Company.module.scss'
import Typography from "@/Components/Typography/Typography";

const Company = ({company} : {company: {
    title: string,
    icon: string,
    description: string,
    email: string,
    website: string
  }}) => {
  return (
    <Container component='section'>
      <div className={styles['company-component']}>
        <div className={styles['company-content']}>
          <div className={styles['company-name']}>
            <img src={company.icon} alt={company.title}/>
            <Typography component='h2' variant='h2'>{company.title}</Typography>
          </div>
          <Typography component='p' variant='p'>{company.description}</Typography>
        </div>
        <div className={styles['company-info']}>
          <Typography component='p' variant='h6'>Website Link:</Typography>
          <Typography component='p' variant='p'>{company.website}</Typography>
          <Typography component='p' variant='h6'>Support Email:</Typography>
          <Typography component='p' variant='p'>{company.email}</Typography>
        </div>
      </div>
    </Container>
  );
};

export default Company;