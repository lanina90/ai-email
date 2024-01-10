import React from 'react';
import CallToAction from "@/Components/CallToAction/CallToAction";
import ContactUs from "@/app/contact/components/ContactUs/ContactUs";
import {Metadata} from "next";
import General from "@/app/contact/components/General/General";
import ContactSales from "@/app/contact/components/ContactSales/ContactSales";
import Locations from "@/app/contact/components/Locations/Locations";

export const metadata: Metadata = {
  title: 'Contacts - AI Email ',
};


const Page = () => {
  return (
    <>
      <ContactUs/>
      <General/>
      <ContactSales/>
      <Locations/>
      <CallToAction h2='Get Started with Smarter'
                    span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>
    </>
  );
};

export default Page;