import React from 'react';
import BackGround from "@/Components/BackGround/BackGround";
import {Metadata} from "next";
import AuthPage from "@/Components/Auth/AuthPage";

export const metadata: Metadata = {
  title: 'Sign Up - AI Email ',
};


const Page = () => {
  return (
    <>
      <BackGround backgroundGradient={false}/>
      <AuthPage  page='signup' title='Sign Up' subtitle='Lorem ipsum dolor sit amet adipiscing elit.'/>
    </>
  );
};

export default Page;