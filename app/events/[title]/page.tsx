import React from 'react';
import PageHero from "@/Components/PageHero/PageHero";
import Event from "@/app/events/[title]/components/Event";
import CallToAction from "@/Components/CallToAction/CallToAction";
import {events} from "@/constants/events";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Event - AI Email ',
};

const Page = ({params: {title}}: { params: { title: string } }) => {
  const event = events.filter(event => event.link.includes(title))

  return (
    <>
      <PageHero title={event[0].title}
                text={event[0].pageDesc}/>
      <Event event={event[0]}/>
      <CallToAction h2='Get Started with Smarter' span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>
    </>
  );
};

export default Page;