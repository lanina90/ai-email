'use client'

import React, {Fragment} from 'react';
import Container from "@/Components/Container/Container";
import styles from "./Products.module.scss";
import BackGround from "@/Components/BackGround/BackGround";
import Typography from "@/Components/Typography/Typography";
import {products} from "@/constants/products";
import FeatureCard from "@/Components/FeatureCard/FeatureCard";
import CallToAction from "@/Components/CallToAction/CallToAction";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";


const ProductsHero = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['products-list']}`,
    animateClass,
    threshold: 0.03
  })

  return (
    <Container component='section' className={styles['products-container']} ref={refForComponent}>
      <BackGround backgroundGradient={false} />
      <div className={styles['products-hero']}>
        <Typography component='h1' variant='h1'>Our Products</Typography>
        <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.
        </Typography>
      </div>
      <div className={styles['products-list']}>
        {products.map(product =>
        <Fragment key={product.id}>
          <FeatureCard icon={product.icon} alt={product.title} title={product.title} text={product.text}
                       link={product.link}/>
        </Fragment>)}
      </div>
    </Container>

  );
};

export default ProductsHero;