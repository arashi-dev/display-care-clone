"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "~/app/_components/Container";
import { useViewportSize } from "@mantine/hooks";
import { ArrowDown } from "iconsax-react";
import ScrollDownButton from "~/app/_components/ScrollDownButton";

const texts = [
  "A selection of long term products and",
  "projects in various stages of ongoing",
  "development.",
];

type HeroProps = {
  onBottomClick: () => void;
};

const Hero: React.FC<HeroProps> = ({ onBottomClick }) => {
  const { width } = useViewportSize();

  return (
    <Container className="relative flex flex-col md:flex-row md:items-end md:justify-between">
      <h1 className="font-serif text-8xl/none text-zinc-700 md:text-7xl/none lg:text-9xl/none">
        {width < 768 ? "Featured" : "Our"}
        <br />
        Projects
      </h1>

      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1, delayChildren: 1 }}
        className="ml-10 mt-20 font-sans text-xl/tight text-zinc-500 md:m-0 md:text-xs/tight lg:pr-20 lg:text-base/tight"
      >
        {texts.map((text) => (
          <p key={text} className="overflow-hidden">
            <motion.span
              className="block"
              variants={{ initial: { y: "100%" }, animate: { y: 0 } }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {text}
            </motion.span>
          </p>
        ))}
      </motion.div>

      <button
        onClick={onBottomClick}
        className="ml-10 mt-16 flex aspect-square w-20 items-center justify-center rounded-full bg-orange-50 md:hidden"
      >
        <ArrowDown size="32" className="text-indigo-400" />
      </button>

      <button
        onClick={onBottomClick}
        className="absolute -bottom-32 right-10 bg-transparent lg:-bottom-40 lg:right-20"
      >
        <ScrollDownButton />
      </button>
    </Container>
  );
};

export default Hero;
