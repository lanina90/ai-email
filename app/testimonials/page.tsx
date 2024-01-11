import React from 'react';
import PageHero from "@/Components/PageHero/PageHero";
import CallToAction from "@/Components/CallToAction/CallToAction";
import Testimonials from "@/Components/Testimonials/Testimonials";
import TestimonialSingle from "@/Components/TestimonialSingle/TestimonialSingle";

const Page = () => {
  return (
    <>
      <PageHero title='Testimonials' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.'/>
      <TestimonialSingle/>
      <Testimonials hero={false}/>
      <CallToAction h2='Get Started with Smarter'
                    span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>
    </>
  );
};

export default Page;