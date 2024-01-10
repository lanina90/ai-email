import React from 'react';
import PageHero from "@/Components/PageHero/PageHero";
import BlogList from "@/Components/Blog/BlogList";
import {latestPosts} from "@/constants/latestPosts";
import CallToAction from "@/Components/CallToAction/CallToAction";

const Page = () => {
  return (
    <>
      <PageHero text='In this blog category, we delve into the world of ideas – the seeds that have the power to transform industries, businesses, and lives.'
                title='Ideas'/>
      <BlogList posts={latestPosts.filter(post => post.category.name === 'Ideas')}/>
      <CallToAction h2='Get Started with Smarter'
                    span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>
    </>
  )
};

export default Page;