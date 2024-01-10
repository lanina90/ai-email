import React from 'react';
import PageHero from "@/Components/PageHero/PageHero";
import CallToAction from "@/Components/CallToAction/CallToAction";
import {Metadata} from "next";
import BlogList from "@/Components/Blog/BlogList";
import {latestPosts} from "@/constants/latestPosts";

export const metadata: Metadata = {
  title: 'Blog - AI Email ',
};
const Page = () => {
  return (
    <>
      <PageHero text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.'
                title='Latest Posts and Insights'/>
      <BlogList posts={latestPosts}/>
      <CallToAction h2='Get Started with Smarter'
                    span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>
    </>

  );
};

export default Page;