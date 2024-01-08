import React from 'react';
import Container from "@/Components/Container/Container";
import styles from './Footer.module.scss'
import SubscribeBlock from "@/Components/Footer/SubscribeBlock/SubscribeBlock";
import FooterNavigation from "@/Components/Footer/FooterNavigation/FooterNavigation";

const Footer = () => {
  return (
    <Container component='footer'>
      <div className={styles['footer-component']}>
        <SubscribeBlock/>
        <FooterNavigation/>
        <div className={styles["line-divider"]}/>

      </div>
    </Container>
  );
};

export default Footer;