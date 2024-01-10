import React from 'react';
import Typography from "@/Components/Typography/Typography";
import Button from "@/Components/UI/Button/Button";
import styles from "./Vacancies.module.scss";

const AccordionItem = ({title, category, link, text}:{title:string, category:string, link:string, text:string}) => {
  return (
    <div className={styles['career-item']}>
      <div className={styles['career-title-wrapper']}>
        <div className={styles['career-title-heading']}>
          <Typography component='h4' variant='h5'>{title}</Typography>
          <Typography component='p' variant='p'>{category}</Typography>
        </div>
        <Button variant='text' component='link' href={link}>Apply
          Now</Button>
      </div>
      <Typography component='p' variant='p'>{text}</Typography>
    </div>
  );
};

export default AccordionItem;