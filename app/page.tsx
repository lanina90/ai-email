import Hero from "@/app/components/Hero/Hero";
import Clients from "@/app/components/Clients/Clients";
import Services from "@/app/components/Services/Services";
import Features from "@/app/components/Features/Features";
import GetStarted from "@/app/components/GetStarted/GetStarted";
import Results from "@/app/components/Results/Results";


export default function Home() {
  return (
    <>
      <Hero/>
      <Clients/>
      <Services/>
      <Features/>
      <GetStarted/>
      <Results/>
    </>
  )
}
