import React from 'react';
import PageHero from "@/Components/PageHero/PageHero";
import CallToAction from "@/Components/CallToAction/CallToAction";
import IntegrationsList from "@/app/integration/IntegrationsList/IntegrationsList";

const Page = () => {
  return (
    <>
      <PageHero title='Integrations'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.'/>
      <IntegrationsList/>
      <CallToAction h2='Get Started with Smarter'
                    span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>
    </>
  );
};

export default Page;