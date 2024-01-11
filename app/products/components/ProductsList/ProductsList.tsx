import React, {Fragment} from 'react';
import {products} from "@/constants/products";
import FeatureCard from "@/Components/FeatureCard/FeatureCard";
import styles from "../../Products.module.scss";
import Container from "@/Components/Container/Container";

const ProductsList = () => {
  return (
    <Container component='section' className={styles['products-list']}>
      {products.map(product =>
        <Fragment key={product.id}>
          <FeatureCard icon={product.icon} alt={product.title} title={product.title} text={product.text}/>
        </Fragment>)}
    </Container>
  );
};

export default ProductsList;