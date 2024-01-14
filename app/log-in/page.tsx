import React from 'react';
import BackGround from "@/Components/BackGround/BackGround";
import AuthPage from "@/Components/Auth/AuthPage";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Log In - AI Email ',
};

const Page = () => {
  return (
    <>
      <BackGround backgroundGradient={false}/>
      <AuthPage page='signin' title='Log In' subtitle='Lorem ipsum dolor sit amet adipiscing elit.'/>
    </>
  );
};

export default Page;