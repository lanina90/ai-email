import React from 'react';
import Link from "next/link";
import Typography from "@/Components/Typography/Typography";
import styles  from '../LatestPosts.module.scss'

interface PostCardProps{
  post: {
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
  }
}
const PostCard = ({post} : PostCardProps) => {
  return (
    <div className={styles['blog-card']}>
      <Link className={styles['blog-image-link']} href={post.post.link}>
        <div className={styles['blog-image-wrapper']}>
          <img alt="" loading="lazy"
               src={post.post.src}
               sizes="(max-width: 479px) 100vw, (max-width: 991px) 90vw, (max-width: 1439px) 28vw, 403.3359375px"
               srcSet={post.post.srcSet}
          />
        </div>
      </Link>
      <Link className={styles['blog-category-link']}
            href={post.category.link}>
        <div className={styles['text-color-gradient']}>{post.category.name}</div>
      </Link>
      <Link className={styles['blog-title-link']}
            href={post.post.link}>
        <Typography component='h3' variant='h5'>{post.post.title}</Typography>
      </Link>
      <Typography component='p' variant='p'>{post.post.description}</Typography>

      <div className={styles['blog-author-wrapper']}>
        <div className={styles["blog-author-image-wrapper"]}>
          <img loading="lazy"
               src={post.author.src}
               alt={post.author.name}/>
        </div>
        <div className={styles['blog-author-text']}>
          <Typography component='p' variant='p' className={styles['blog-author-name']}>{post.author.name}</Typography>
          <div className={styles['blog-author-content']}>
            <Typography component='p' variant='p' className={styles['']}>{post.author.published}</Typography>
            <div>•</div>
            <Typography component='p' variant='p'>{post.author.time} min read</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;