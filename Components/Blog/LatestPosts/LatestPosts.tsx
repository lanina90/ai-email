'use client'

import React, {Fragment} from 'react';
import Container from "@/Components/Container/Container";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Typography from "@/Components/Typography/Typography";
import styles from './LatestPosts.module.scss'
import Button from "@/Components/UI/Button/Button";
import PostCard from "@/Components/Blog/PostCard/PostCard";
import {latestPosts} from "@/constants/latestPosts";

const LatestPosts = () => {
  const animateClass = `${styles.fadeIn}`
  const refForList = useObserverAnimation({
    amount: "many",
    classes: `.${styles['blog-card']}`,
    animateClass,
    threshold: 0.1
  })
  const refForTitle = useObserverAnimation({
    amount: "one",
    classes: `.${styles['posts-title']}`,
    animateClass,
    threshold: 0.2
  })

  return (
    <Container component='section' ref={refForTitle}>
      <div className={styles['posts-title']}>
        <Typography component='h2' variant='h2'>Checkout our Latest Posts</Typography>
        <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
      </div>
      <div className={styles['blog-list']} ref={refForList}>
        {latestPosts.slice(0, 3).map(post =>
          <Fragment key={post.id}>
            <PostCard post={post}/>
          </Fragment>)}
      </div>
      <div className={styles['blog-button']}>
        <Button href='blogs' component='link' variant='text'>View All</Button>
      </div>

    </Container>
  );
};

export default LatestPosts;