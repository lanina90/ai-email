'use client'

import React, {useEffect, useState} from 'react';
import BackGround from "@/Components/BackGround/BackGround";
import Button from "@/Components/UI/Button/Button";
import styles from './Hero.module.scss'
import Typography from "@/Components/Typography/Typography";


const Hero = () => {
  const [rotateX, setRotateX] = useState(17.6049);
  const transformStyle = {
    transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(${rotateX}deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const newRotateX = Math.max(0, 17.6049 - scrollPosition * 0.3);
      setRotateX(newRotateX);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section style={{overflow: 'hidden', position: 'relative'}}>
      <BackGround/>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.hero}>
            <div className={styles["gradient-circle"]}/>
            <div className={styles["hero-text"]}>
              <Typography component='h1' variant='h1'>Supercharge Your Business Reach with <span>AI-Optimized Cold Email Campaigns</span></Typography>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
              <div className={styles.buttons}>
                <Button variant='filled' component="link" href="/sign-up">Get Started</Button>
                <Button variant='text' component="link" href="#Feature">Learn More</Button>
              </div>
            </div>
            <div className={styles["hero-image"]} style={transformStyle}>
              <div className={styles["hero-image-wrapper"]}>
                <div className={styles.ellipse}/>
                <div className={styles["hero-image-block"]}>
                  <img
                    src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/657879726889d53a5fb8bb31_Hero_Header.jpg"
                    loading="eager" sizes="(max-width: 479px) 88vw, (max-width: 1439px) 89vw, 1271.609375px" alt="Frame"
                    width="1312"
                    srcSet="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/657879726889d53a5fb8bb31_Hero_Header-p-500.jpg 500w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/657879726889d53a5fb8bb31_Hero_Header-p-800.jpg 800w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/657879726889d53a5fb8bb31_Hero_Header-p-1080.jpg 1080w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/657879726889d53a5fb8bb31_Hero_Header-p-1600.jpg 1600w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/657879726889d53a5fb8bb31_Hero_Header.jpg 2624w"
                    className={styles["hero-image"]}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

