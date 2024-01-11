import React from 'react';
import PageHero from "@/Components/PageHero/PageHero";
import {integration} from "@/constants/integration";
import Company from "@/app/integration/[id]/components/Company/Company";
import CallToAction from "@/Components/CallToAction/CallToAction";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Integration - AI Email ',
};

const Page = ({params: {id}}:{params: {id:string}}) => {
  const company = integration.filter(item => item.title.toLowerCase() === id)

  return (
    <>
     <PageHero title="Epicurious" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis, tellus eget finibus sollicitudin."/>
      <Company company={company[0]}/>

      <CallToAction h2='Get Started with Smarter'
                    span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>
    </>
  );
};

export default Page;