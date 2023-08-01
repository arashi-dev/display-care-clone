import React from "react";
import Hero from "./_components/Hero";
import HeroAnimation from "./_components/HeroAnimation";
import About from "./_components/About";
import Vision from "./_components/Vision";
import Principles from "./_components/Principles";
import { createMetadata } from "~/app/_utils/createMetadata";
import Featured from "~/app/_components/Featured";

export const metadata = createMetadata({
  title: "A disability oriented design studio",
});

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
