import React from "react";
import OtherPagesHero from "~/app/_components/OtherPagesHero";

const texts = [
  "Below is a selection of great resources and",
  "stories from around the web. If you have",
  "an idea or something you would like to",
  "share, please get in touch.",
];

const Hero: React.FC = () => {
  return <OtherPagesHero title={["Helpful", "Resources"]} texts={texts} />;
};

export default Hero;
