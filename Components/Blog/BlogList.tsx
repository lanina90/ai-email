import React, {Fragment} from 'react';
import Container from "@/Components/Container/Container";
import styles from './Blog.module.scss'
import Button from "@/Components/UI/Button/Button";
import {blogLinks} from "@/constants/blogLinks";
import PostCard from "@/Components/Blog/PostCard/PostCard";

interface BlogListProps{
  posts: {
    id: number,
    post: {
      link: string,
      title: string,
      description: string,
      text: string,
      src: string,
      srcSet: string,
    },
    category: {
      name: string,
      link: string,
    },
    author: {
      name: string,
      src: string,
      published: string,
      time: string,
    }
  }[],
}
const BlogList = ({posts}:BlogListProps) => {
  return (
    <Container component='section'>
      <div className={styles['blog-component']}>
        <div className={styles['blog-menu']}>
          {blogLinks.map(link =>
          <Fragment key={link.id}>
            <Button href={link.link} component='link' variant='blog'>{link.anchor}</Button>
          </Fragment>
          )}
        </div>
        {posts.length === 0 && <div className={styles['empty-state']}>No items found.</div>}
        <div className={styles['blog-list']}>

          {posts.map(post =>
          <Fragment key={post.id}>
            <PostCard post={post}/>
          </Fragment>
          )}
        </div>
      </div>
    </Container>
  );
};

export default BlogList;