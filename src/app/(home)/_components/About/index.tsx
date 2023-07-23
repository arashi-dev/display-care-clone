"use client";

import { useElementSize } from "@mantine/hooks";
import { type Variants, motion } from "framer-motion";
import React from "react";
import Container from "~/app/_components/Container";

const fadeUpVariants: Variants = {
  initial: {
    y: "100%",
    rotateX: 45,
    skew: -45,
  },
  animate: {
    y: 0,
    rotateX: 0,
    skew: 0,
  },
};

const textLines = [
  "       We work with select",
  "service providers in the",
  "disability sector to develop",
  "inclusive products tailored to",
  "their needs.",
];

const About: React.FC = () => {
  const animationBackgroundSize = useElementSize();

  return (
    <Container className="mt-36 bg-[#645577] py-28">
      <div className="flex justify-between">
        <motion.div
          initial="initial"
          whileInView="animate"
          exit="initial"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.1, delayChildren: 1 }}
        >
          {textLines.map((line) => (
            <p key={line} className="overflow-hidden">
              <motion.span
                variants={fadeUpVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="block whitespace-pre-wrap font-serif text-[3.5rem]/none text-white"
              >
                {line}
              </motion.span>
            </p>
          ))}
        </motion.div>

        <p className="min-w-max font-sans uppercase text-white opacity-50">
          About Us
        </p>
      </div>

      <div className="mt-20 flex items-start justify-between md:mt-44">
        <span className="aspect-square w-[10vw] rounded-full bg-light-salmon" />

        <div className="w-full md:w-3/4">
          <div className="relative">
            <div
              ref={animationBackgroundSize.ref}
              className={`absolute mt-16 block h-[calc(100%-theme(spacing.16))] w-full bg-[#f8f1f1]`}
              style={{
                borderBottomRightRadius: animationBackgroundSize.height / 2,
              }}
            />

            <video
              className="relative z-[1]"
              src="/videos/about-us-animation.webm"
              controls={false}
              autoPlay
              muted
              loop
            />
          </div>

          <div className="mt-16 flex flex-col justify-between md:flex-row">
            <p className="md:full w-3/4 flex-1 font-sans text-lg/snug text-white opacity-80 md:mr-24 md:text-base/tight">
              Designing for inclusivity, not only assists people with
              disabilities but benefits everyone. Through our practice,
              ‘Display’ creates person centred products and services that are
              accessible for people of all abilities.
            </p>

            <p className="md:full mt-10 w-3/4 flex-1 font-sans text-lg/snug text-white opacity-80 md:mr-24 md:mt-0 md:text-base/tight">
              Every person differs in the way they comprehend, communicate, see,
              and handle the world. We strive for our work to reflect this
              diversity. We research extensively and collaborate closely only
              with those who share a vision of inclusivity and accessibility for
              all.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
