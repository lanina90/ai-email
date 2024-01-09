import React, {ReactNode} from 'react';
import styles from "@/app/components/Features/Features.module.scss";
import Image from "next/image";
import Typography from "@/Components/Typography/Typography";
import Button from "@/Components/UI/Button/Button";

const FeatureCard = ({icon, img, alt, title, text, link} : {icon?:ReactNode,  img?:string , alt:string, title:string, text:string, link?:string}) => {
  return (
    <div className={styles['feature-list__item']}>
      <div className={styles['feature-list__item-icon']}>
        {icon && icon}
        {img && <Image
          src={img}
          alt={alt} width={32} height={32} quality={100}
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 800px"
        />}

      </div>
      <div className={styles['feature-list__item-info']}>
        <Typography component='h3' variant='h6'>{title}</Typography>
        <Typography component='p' variant='p'>{text}</Typography>
      </div>
      {link && <Button href={link} component='link' variant='icon'>Learn More</Button>}
    </div>
  );
};

export default FeatureCard;