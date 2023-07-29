"use client";

import { MotionConfig, motion } from "framer-motion";
import React from "react";
import TitleTextWrapper from "../TitleTextWrapper";
import TextListAnimation from "../TextListAnimation";
import { ArrowDown } from "iconsax-react";
import ScrollDownButton from "../ScrollDownButton";
import Container from "../Container";
import { useScrollIntoView } from "@mantine/hooks";

type OtherPagesHeroProps = {
  title: string[];
  texts: string[];
};

const OtherPagesHero: React.FC<OtherPagesHeroProps> = ({ texts, title }) => {
  const scroll = useScrollIntoView<HTMLDivElement>({
    offset: -100,
  });

  return (
    <Container className="relative flex flex-col md:flex-row md:items-end md:justify-between">
      <motion.div initial="initial" animate="animate" exit="initial">
        <MotionConfig transition={{ duration: 1, ease: "easeOut" }}>
          <h1 className="font-serif text-8xl/none text-zinc-700 md:text-7xl/none lg:text-8xl/none xl:text-9xl/none">
            {title.map((text) => (
              <TitleTextWrapper key={text}>{text}</TitleTextWrapper>
            ))}
          </h1>
        </MotionConfig>
      </motion.div>

      <TextListAnimation
        texts={texts}
        className="ml-10 mt-20 md:m-0 xl:pr-20"
      />

      <button
        onClick={() => scroll.scrollIntoView()}
        className="ml-10 mt-16 flex aspect-square w-20 items-center justify-center rounded-full bg-orange-50 md:hidden"
      >
        <ArrowDown size="32" className="text-indigo-400" />
      </button>

      <button
        onClick={() => scroll.scrollIntoView()}
        className="absolute -bottom-32 right-10 bg-transparent lg:-bottom-40 lg:right-20"
      >
        <ScrollDownButton />
      </button>

      <div ref={scroll.targetRef} className="absolute" />
    </Container>
  );
};

export default OtherPagesHero;
