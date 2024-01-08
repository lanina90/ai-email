import React from 'react';
import Link from "next/link";
import {Facebook, Instagram, Linkedin, Youtube} from "lucide-react";
import styles from '../Footer.module.scss'

const FooterBottom = () => {
  return (
    <div className={styles['footer-bottom']}>
      <div className={styles['footer-legal-list']}>
        <Link href="/policies/privacy-policy">Privacy Policy</Link>
        <Link href="/policies/terms-and-condition">Terms of Service</Link>
        <Link href="/policies/refund-policy">Refund Policy</Link>
      </div>
      <div className={styles['footer-social-icons']}>
        <a href="https://facebook.com" target="_blank">
          <div className={styles.icon}>
            <Facebook/>
          </div>
        </a>
        <a href="https://Instagram.com" target="_blank">
          <div className={styles.icon}>
            <Instagram/>
          </div>
        </a>
        <a href="https://linkedin.com" target="_blank">
          <div className={styles.icon}>
            <Linkedin/>
          </div>
        </a>
        <a href="https://youtube.com" target="_blank">
          <div className={styles.icon}>
            <Youtube/>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;