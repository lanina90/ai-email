import React from 'react';
import {Metadata} from "next";
import PricingHero from "@/app/pricing/components/PricingHero/PricingHero";
import CallToAction from "@/Components/CallToAction/CallToAction";
import PricingPlan from "@/app/pricing/components/PricingPlan/PricingPlan";
import PricingComparison from "@/app/pricing/components/PlanComparison/PricingComparison";
import Clients from "@/Components/Clients/Clients";

export const metadata: Metadata = {
  title: 'Pricing - AI Email ',
};

const Page = () => {
  return (
    <>
      <PricingHero/>
      <PricingPlan/>
      <PricingComparison/>
      <Clients title="Used by the world's most largest companies"/>
      <CallToAction h2='Get Started with Smarter'
                    span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>
    </>
  );
};

export default Page;