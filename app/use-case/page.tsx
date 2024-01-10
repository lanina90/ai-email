import React from 'react';
import CasesList from "@/app/use-case/components/CasesList";
import CallToAction from "@/Components/CallToAction/CallToAction";
import Clients from "@/Components/Clients/Clients";
import {Metadata} from "next";
import PageHero from "@/Components/PageHero/PageHero";

export const metadata: Metadata = {
  title: 'Use Cases - AI Email ',
};


const Page = () => {
  return (
    <>
      <PageHero title='Use Case' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.'/>
      <CasesList/>
      <Clients title="Used by the world's most largest companies"/>
      <CallToAction h2='Get Started with Smarter'
                    span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>

    </>
  );
};

export default Page;