import React, {ReactNode} from 'react';
import styles from "@/app/about/components/Beliefs/Beliefs.module.scss";
import Typography from "@/Components/Typography/Typography";


interface BeliefCardProps {
  belief: {
    id: number,
    title: string,
    text: string,
    icon: ReactNode
  }
}
const BeliefCard = ({belief} : BeliefCardProps) => {
  return (
    <div className={styles['beliefs-item']}>
      <div className={styles["beliefs-image-wrapper"]}>
        <div className={styles["icon-wrapper"]}>
          {belief.icon}
        </div>
      </div>
      <div className={styles["beliefs-content"]}>
        <Typography component='h3' variant='h5'>{belief.title}</Typography>
        <Typography component='p' variant='p'>{belief.text}</Typography>
      </div>
    </div>
  );
};

export default BeliefCard;