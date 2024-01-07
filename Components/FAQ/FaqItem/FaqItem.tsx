'use client'

import React, {useState} from 'react';
import Typography from "@/Components/Typography/Typography";
import {Plus} from "lucide-react";
import styles from "../FaqSection.module.scss";

interface FaqItemProps {
  faqItem: {
    id: number,
    question: string,
    answer:string
  }
}
const FaqItem = ({faqItem}:FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const iconStyle = {
    transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${isOpen ? "45" : "0"}deg) skew(0deg, 0deg)`
  };

  const answerStyle = {
    width: '100%',
    maxHeight: `${isOpen ? "6rem" : "0"}`,
    marginBottom: `${isOpen ? "1.5rem" : "0"}`,
    willChange: 'height, width',
    transition: 'max-height 0.3s ease'
  };

  return (
    <div className={styles["faq-accordion"]}>
      <div className={styles["faq-question"]}>
        <Typography component='h3' variant='h3'>{faqItem.question}</Typography>
        <div className={styles["faq-icon"]} style={iconStyle} onClick={() => setIsOpen(!isOpen)}>
          <Plus color={'#606c85'}/>
        </div>
      </div>
      <div className={styles["faq-answer"]} style={answerStyle}>
        <Typography component='p' variant='p'>{faqItem.answer}</Typography>
      </div>
    </div>
  );
};

export default FaqItem;