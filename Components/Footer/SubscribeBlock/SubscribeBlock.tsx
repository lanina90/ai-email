import React from 'react';
import Typography from "@/Components/Typography/Typography";
import styles from '../Footer.module.scss'

const SubscribeBlock = () => {
  return (
    <div className={styles['footer-newsletter-wrapper']}>
      <div className={styles['footer-newsletter-text-wrapper']}>
        <Typography component='p' variant='p' className={styles['join-text']}>Join our newsletter</Typography>
        <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
      </div>
      <div className={styles['footer-form-block']}>
        <form id="email-form" name="email-form" data-name="Email Form"
              className={styles["footer-form"]}
              aria-label="Email Form">
          <input className={styles["form-input"]} maxLength={256} name="email-2"
                 data-name="Email 2" placeholder="Enter your email" type="email"
                 id="Subscribe-email" required/>
          <input type="submit"
                 id="Subscribe"
                 className={styles["button"]}
                 value="Subscribe"/>
        </form>
        <Typography component='p' variant='p' className={styles['text-size-tiny']}>By subscribing you agree to with
          our <a
            href="/policies/privacy-policy"><span>Privacy Policy</span></a></Typography>
      </div>
    </div>
  );
};

export default SubscribeBlock;