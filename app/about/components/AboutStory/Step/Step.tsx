import React, {ReactNode} from 'react';
import styles from "@/app/about/components/AboutStory/AboutStory.module.scss";
import {MoveDiagonal} from "lucide-react";
import Typography from "@/Components/Typography/Typography";

interface StepProps {
  step: {
    id: number,
    date: string[],
    title: string,
    text: string,
    icon: ReactNode
  }
}
const Step = ({step}:StepProps) => {
  return (
    <div className={styles['story-timeline-step']}>
      <div className={styles['timeline-left']}>
        <div className={styles['icon-wrapper']}>
          <div className={styles.icon}>
            {step.icon}
          </div>
        </div>
      </div>
      <div className={styles['timeline-right']}>
        <div className={styles['text-wrapper']}>
          <div className={styles['text-wrapper-top']}>
            <Typography component='p' variant='p'>{step.date[0]} • {step.date[1]}</Typography>
            <Typography component='h2' variant='h5'>{step.title}</Typography>
          </div>
          <Typography component='p' variant='p'>{step.text}</Typography>
        </div>
      </div>
    </div>
  );
};

export default Step;