import React from "react";
import Hero from "./_components/Hero";
import HeroAnimation from "./_components/HeroAnimation";
import About from "./_components/About";
import Vision from "./_components/Vision";
import Principles from "./_components/Principles";
import Featured from "../_components/Featured";

const Page = () => {
  return (
    <div>
      <Hero />

      <HeroAnimation />

      <About />

      <Vision />

      <Principles />

      <Featured
        title="Featured Projects"
        caption="A selection of in house projects, client projects and upcoming projects in our area's of practice."
        url="/works"
      />
    </div>
  );
};

export default Page;
