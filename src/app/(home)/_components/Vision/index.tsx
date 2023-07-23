"use client";

import { type Variants, motion } from "framer-motion";
import { QuoteUp } from "iconsax-react";
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
  "Born with a vision to innovate",
  "where it matters the most.",
];

const Vision: React.FC = () => {
  return (
    <Container className="my-32">
      <div className="ml-auto md:w-3/4">
        <QuoteUp
          size={120}
          className="mx-auto text-teal-500 md:mx-0"
          variant="Bold"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          exit="initial"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.1, delayChildren: 1 }}
          className="mt-6"
        >
          {textLines.map((line) => (
            <p key={line} className="overflow-hidden">
              <motion.span
                variants={fadeUpVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="block whitespace-pre-wrap text-center font-serif text-5xl/none text-zinc-700 md:text-left md:text-[3.5rem]/none"
              >
                {line}
              </motion.span>
            </p>
          ))}
        </motion.div>
      </div>

      <div className="mt-32 flex flex-col md:flex-row">
        <div className="relative mb-24 flex-1 bg-[#f9f5ed] md:mb-0">
          <video
            className="scale-75"
            src="/videos/vision-animation.webm"
            controls={false}
            autoPlay
            muted
            loop
          />
        </div>

        <div className="mb-16 flex gap-5 md:w-1/3 md:flex-col md:pl-20">
          <p className="font-serif text-6xl font-semibold text-zinc-700 md:text-8xl">
            15%
          </p>

          <div className="md:w-auto">
            <p className="font-sans text-[.9rem] text-zinc-500">
              Of the world’s population experience some form of disability. This
              number will double by 2050.
            </p>

            <span className="mt-12 block h-px w-full md:my-16 md:bg-zinc-200" />

            <p className="mt-5 font-sans text-[.9rem] text-zinc-500">
              Innovation in the care and disability sectors can have a direct
              impact on a person&apos;s quality of life.
              <br />
              <br />
              We do what we do because we believe design and technology can
              improve outcomes for those who need it most.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Vision;
