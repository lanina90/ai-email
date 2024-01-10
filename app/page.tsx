import Hero from "@/app/components/Hero/Hero";
import Clients from "@/Components/Clients/Clients";
import Services from "@/app/components/Services/Services";
import Features from "@/app/components/Features/Features";
import GetStarted from "@/app/components/GetStarted/GetStarted";
import Results from "@/app/components/Results/Results";
import Solutions from "@/app/components/Solutions/Solutions";
import Testimonials from "@/Components/Testimonials/Testimonials";
import LatestPosts from "@/Components/Blog/LatestPosts/LatestPosts";
import FaqSection from "@/Components/FAQ/FaqSection";
import CallToAction from "@/Components/CallToAction/CallToAction";
import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'AI Email ',
};
export default function Home() {
  return (
    <>
      <Hero/>
      <Clients title='Trusted by Professionals and Teams'/>
      <Services/>
      <Features/>
      <GetStarted/>
      <Results/>
      <Solutions/>
      <Testimonials/>
      <LatestPosts/>
      <FaqSection/>
      <CallToAction
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
        btnText='Start 14 Day Free Trial'
        h2={"Get Started with Smarter"}
        span="AI Email Solutions Today"
      />
    </>
  )
}
