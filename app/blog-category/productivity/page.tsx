import React from 'react';
import PageHero from "@/Components/PageHero/PageHero";
import BlogList from "@/Components/Blog/BlogList";
import {latestPosts} from "@/constants/latestPosts";
import CallToAction from "@/Components/CallToAction/CallToAction";

const Page = () => {
  return (
    <>
      <PageHero text='Welcome to the "Productivity" blog category, where we delve into the art and science of optimizing efficiency and achieving more with less'
                title='Productivity'/>
      <BlogList posts={latestPosts.filter(post => post.category.name === 'Productivity')}/>
      <CallToAction h2='Get Started with Smarter'
                    span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>
    </>
  );
};

export default Page;