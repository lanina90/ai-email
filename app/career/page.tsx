import React from 'react';
import {Metadata} from "next";
import CareerHero from "@/app/career/components/CareerHero/CareerHero";
import CallToAction from "@/Components/CallToAction/CallToAction";
import Values from "@/app/career/components/Values/Values";
import Vacancies from "@/app/career/components/Vacancies/Vacancies";
import {values} from "@/constants/values";
import {perks} from "@/constants/perks";

export const metadata: Metadata = {
  title: 'Career - AI Email ',
};

const Page = () => {
  return (
    <>
      <CareerHero/>
      <Values
        text='Our values serve as the foundation of everything we do. They guide our decisions, actions, and interactions with clients, partners, and each other. Our values define who we are and how we strive to make a positive impact in the world.'
        title='Our Values' data={values}/>
      <Vacancies/>
      <Values
        text='Our values serve as the foundation of everything we do. They guide our decisions, actions, and interactions with clients, partners, and each other. Our values define who we are and how we strive to make a positive impact in the world.'
        title='Perks' data={perks}/>
      <CallToAction h2='Get Started with Smarter'
                    span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>
    </>
  );
};

export default Page;