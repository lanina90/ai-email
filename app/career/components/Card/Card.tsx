import React, {ReactNode} from 'react';
import styles from "./Card.module.scss";
import Typography from "@/Components/Typography/Typography";


const Card = ({title, text, icon}:{title:string, text:string, icon:string | ReactNode}) => {
  return (
    <div className={styles['values-item']}>
      <div className={styles['values-icon']}>
        {icon}
      </div>
      <div className={styles['values-content']}>
        <Typography component='h3' variant='h5'>{title}</Typography>
        <Typography component='p' variant='p'>{text}</Typography>
      </div>
    </div>
  );
};

export default Card;