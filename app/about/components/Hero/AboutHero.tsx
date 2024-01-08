import React from 'react';
import styles from '../../styles.module.scss'
import Typography from "@/Components/Typography/Typography";
import Ellipse from "@/Components/Ellipse/Ellipse";

const AboutHero = () => {
  return (
    <div className={styles['about-hero']}>
      <div className={styles['about-hero-content']}>
        <Typography component='h1' variant='h1'>Bridging the Gap: Humans and AI with Progressive Tomorrow</Typography>
        <Typography component='p' variant='p'>From individual freelancers to multinational corporations, We empowers
          professionals to amplify their Works output, all while remaining steadfast in their core
          values.</Typography>
      </div>
      <div className={styles['about-hero-image']}>
        <Ellipse color='green'/>
        <div className={styles['about-hero-image-block']}>
          <img
            src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc7_About_Image-1.jpg"
            loading="eager" width="1232"
            sizes="(max-width: 1279px) 89vw, (max-width: 1439px) 90vw, 1273.6112060546875px" alt="People"
            srcSet="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc7_About_Image-1-p-500.jpg 500w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc7_About_Image-1-p-800.jpg 800w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc7_About_Image-1-p-1080.jpg 1080w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc7_About_Image-1-p-1600.jpg 1600w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/656f1d3d61238bb5e4dfadc7_About_Image-1.jpg 2624w"
            className="hero-header-image"/>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;