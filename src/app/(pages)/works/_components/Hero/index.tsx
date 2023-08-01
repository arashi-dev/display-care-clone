"use client";

import React from "react";
import { useViewportSize } from "@mantine/hooks";
import OtherPagesHero from "~/app/_components/OtherPagesHero";

const texts = [
  "A selection of long term products and",
  "projects in various stages of ongoing",
  "development.",
];

const Hero: React.FC = () => {
  const { width } = useViewportSize();

  return (
    <OtherPagesHero
      title={[width < 768 ? "Featured" : "Our", "Projects"]}
      texts={texts}
    />
  );
};

export default Hero;
