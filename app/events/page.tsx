import React from 'react';
import PageHero from "@/Components/PageHero/PageHero";
import EventsList from "@/app/events/components/EventsList";
import CallToAction from "@/Components/CallToAction/CallToAction";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Join our Events - AI Email ',
};

const Page = () => {
  return (
    <>
      <PageHero text='Join our events with industry leaders, and learn how businesses leverage their cloud products.' title='Join our Events'/>
      <EventsList/>
      <CallToAction h2='Get Started with Smarter' span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>

    </>
  );
};

export default Page;