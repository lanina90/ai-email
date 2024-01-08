import React from 'react';
import Container from "@/Components/Container/Container";
import styles from './styles.module.scss'
import BackGround from "@/Components/BackGround/BackGround";
import AboutHero from "@/app/about/components/Hero/AboutHero";
import AboutStory from "@/app/about/components/AboutStory/AboutStory";
import Vision from "@/app/about/components/Vision/Vision";
import Beliefs from "@/app/about/components/Beliefs/Beliefs";
import Team from "@/app/about/components/Team/Team";
import Vacancies from "@/app/about/components/Vacancies/Vacancies";
import FeaturedCustomer from "@/app/about/components/Customer/FeaturedCustomer";
import CallToAction from "@/Components/CallToAction/CallToAction";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'About - AI Email ',
};

const Page = () => {
  return (
    <>
      <Container component='section' className={styles['section-hero']}>
        <BackGround/>
        <AboutHero/>
      </Container>
      <AboutStory/>
      <Vision/>
      <Beliefs/>
      <Team/>
      <Vacancies/>
      <FeaturedCustomer/>
      <CallToAction h2='Get Started with Smarter' span='AI Email Solutions Today'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                    btnText='Start 14 Day Free Trial'/>

    </>
  );
};

export default Page;