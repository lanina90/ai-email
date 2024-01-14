import Link from 'next/link';
import React from 'react';
import Typography from "@/Components/Typography/Typography";
import styles from '../Footer.module.scss'

const FooterNavigation = () => {
  return (
    <div className={styles['footer-top-wrapper']}>
      <div data-grid='grid-area' className={styles['footer-link-list']}>
        <Link href='/'>
          <img
            src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794c9fd81b748e926422_Logo.png"
            loading="lazy" alt="Logo" width="112"/>
        </Link>
        <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.</Typography>
      </div>
      <div className={styles['footer-link-list']}>
        <p className={styles['footer-list-heading']}>Company</p>
        <div className={styles['footer-list-items']}>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/products">Products</Link>
          <Link href="/features">Features</Link>
          <Link href="/use-case">Use Case</Link>
          <Link href="/career">Career</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/integration">Integration</Link>
          <Link href="/testimonials">Testimonials</Link>
        </div>
      </div>
      <div className={styles['footer-link-list']}>
        <p className={styles['footer-list-heading']}>Resources</p>
        <div className={styles['footer-list-items']}>
          <Link href="/blogs">Blogs</Link>
          <Link href="/events">Events</Link>
        </div>
      </div>
      <div className={styles['footer-link-list']}>
        <p className={styles['footer-list-heading']}>Utility Pages</p>
        <div className={styles['footer-list-items']}>
          <Link href="/sign-up">Sign Up</Link>
          <Link href="/log-in">Log In</Link>
          <Link href="/404">404</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterNavigation;