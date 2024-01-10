import React from 'react';
import PageHero from "@/Components/PageHero/PageHero";
import BlogList from "@/Components/Blog/BlogList";
import {latestPosts} from "@/constants/latestPosts";
import CallToAction from "@/Components/CallToAction/CallToAction";

const Page = () => {
  return (
    <>
      <PageHero text='Welcome to our "Tools" blog category, where we unlock the virtual toolbox that empowers modern endeavors'
                title='Tools'/>
      <BlogList posts={latestPosts.filter(post => post.category.name === 'Tools')}/>
      <CallToAction h2='Get Started with Smarter'
                    span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>
    </>
  );
};

export default Page;