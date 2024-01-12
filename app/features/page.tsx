import React from 'react';
import {Metadata} from "next";
import PageHero from "@/Components/PageHero/PageHero";
import TestimonialSingle from "@/Components/TestimonialSingle/TestimonialSingle";
import CallToAction from "@/Components/CallToAction/CallToAction";
import Clients from "@/Components/Clients/Clients";
import Features from "@/app/features/components/Features/Features";

export const metadata: Metadata = {
  title: 'Features - AI Email ',
};

const Page = () => {
  return (
    <>
      <PageHero title='All Product Features' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.'/>
      <Features/>
      <Clients title={"Used by the world's most largest companies"}/>
      <TestimonialSingle/>
      <CallToAction h2='Get Started with Smarter'
                    span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>
    </>
  );
};

export default Page;