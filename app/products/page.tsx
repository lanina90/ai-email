import React from 'react';
import {Metadata} from "next";
import CallToAction from "@/Components/CallToAction/CallToAction";
import ProductsList from "@/app/products/components/ProductsList/ProductsList";
import PageHero from "@/Components/PageHero/PageHero";


export const metadata: Metadata = {
  title: 'Products - AI Email ',
};

const Page = () => {
  return (
    <>
      <PageHero title='Our Products' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.'/>
      <ProductsList/>
      <CallToAction h2='Get Started with Smarter'
                    span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>
    </>
  );
};

export default Page;