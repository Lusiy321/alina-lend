import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProofBar from "./components/SocialProofBar";
import Problem from "./components/Problem";
import Opportunity from "./components/Opportunity";
import WhatIsGrants from "./components/WhatIsGrants";
import Credibility from "./components/Credibility";
import Guarantee from "./components/Guarantee";
import Ownership from "./components/Ownership";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1120]">
      <Header />
      <main>
        <Hero />
        <SocialProofBar />
        <Problem />
        <Opportunity />
        <WhatIsGrants />
        <Credibility />
        <Guarantee />
        <Ownership />
        <Solution />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
