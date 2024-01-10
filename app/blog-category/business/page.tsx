import React from 'react';
import PageHero from "@/Components/PageHero/PageHero";
import BlogList from "@/Components/Blog/BlogList";
import {latestPosts} from "@/constants/latestPosts";
import CallToAction from "@/Components/CallToAction/CallToAction";

const Page = () => {
  return (
    <>
      <PageHero text='Step into the realm of business through our "Business" blog category. Here, we explore the intricacies of the corporate world, offering valuable insights on strategies, trends, and challenges that shape the way companies operate.'
                title='Business'/>
      <BlogList posts={latestPosts.filter(post => post.category.name === 'Business')}/>
      <CallToAction h2='Get Started with Smarter'
                    span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>
    </>
  );
};

export default Page;