import React, {Fragment, useState} from 'react';
import styles from "./Vacancies.module.scss";
import Typography from "@/Components/Typography/Typography";
import {ChevronDown} from "lucide-react";
import AccordionItem from "@/app/career/components/Vacancies/AccordionItem";

interface AccordionProps{
  item: {
    id: number,
    category: string,
    jobs:{
      id: number,
      title: string,
      text: string,
      link: string,
    }[],
  }
}
const Accordion = ({item}:AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const iconStyle = {
    transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${isOpen ? "180" : "0"}deg) skew(0deg, 0deg)`
  };

  const vacancyStyle = {
    width: '100%',
    maxHeight: `${isOpen ? "80rem" : "0"}`,
    marginBottom: `${isOpen ? "1.5rem" : "0"}`,
    willChange: 'height, width',
    transition: 'max-height 0.3s ease'
  };

  return (
    <div className={styles['career-accordion']}>
      <div className={styles['career-job-department']} onClick={() => setIsOpen(!isOpen)}>
        <Typography component='h3' variant='h4'>{item.category}</Typography>
        <ChevronDown style={iconStyle}/>
      </div>
      <div className={styles['career-list']} style={vacancyStyle}>
        {item.jobs.map(job =>
          <Fragment key={job.id}>
            <AccordionItem category={item.category} link={job.link} title={job.title} text={job.text}/>
          </Fragment>
        )}

      </div>
    </div>
  );
};

export default Accordion;