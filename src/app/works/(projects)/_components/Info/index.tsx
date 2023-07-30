"use client";

import { MotionConfig, motion } from "framer-motion";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";
import React from "react";
import Container from "~/app/_components/Container";
import TextListAnimation from "~/app/_components/TextListAnimation";
import TitleTextWrapper from "~/app/_components/TitleTextWrapper";

type InfoProps = {
  label: string;
  value: React.ReactNode;
};

const Info: React.FC<InfoProps> = ({ label, value }) => {
  return (
    <div className="flex w-full font-sans md:w-32 md:flex-col lg:w-40">
      <p className="w-1/3 text-sm text-black text-opacity-30 md:w-auto md:text-xs lg:text-base">
        {label}
      </p>
      <p className="w-2/3 text-lg/tight text-zinc-700 md:w-auto md:text-sm/tight lg:text-lg/tight">
        {value}
      </p>
    </div>
  );
};

type IntroProps = {
  title: string[];
  description: string[];
  year: number;
  role: string;
  client: string;
  productType: string;
};

const Intro: React.FC<IntroProps> = ({
  title,
  client,
  description,
  productType,
  role,
  year,
}) => {
  return (
    <Container className="flex flex-col md:flex-row md:items-end md:justify-between">
      <div>
        <motion.div
          initial="initial"
          animate="animate"
          exit="initial"
          transition={{ staggerChildren: 0.2 }}
        >
          <MotionConfig transition={{ duration: 1, ease: "easeOut" }}>
            <h1 className="font-serif text-8xl/none text-zinc-700 lg:text-10xl/none">
              {title.map((text) => (
                <TitleTextWrapper key={text}>{text}</TitleTextWrapper>
              ))}
            </h1>
          </MotionConfig>
        </motion.div>

        <TextListAnimation
          texts={description}
          className="ml-5 mt-16 md:ml-0 md:mt-20"
          innerClassName="text-base/tight md:text-xs/tight lg:text-base/tight"
        />
      </div>

      <div className="ml-5 mt-10 md:ml-0 md:mt-0 lg:mr-[10%]">
        <div className="grid h-max grid-cols-1 gap-2 md:grid-cols-2 md:gap-8">
          <Info label="Year" value={year} />
          <Info label="Role" value={role} />
          <Info label="Client" value={client} />
          <Info label="Product Type" value={productType} />
        </div>

        <Link
          href="#"
          className="mt-16 flex w-max items-center rounded-full bg-light-salmon px-5 py-3 font-sans text-base text-white md:mt-10 md:px-4 md:py-2 md:text-sm lg:mt-16 lg:px-5 lg:py-3 lg:text-base"
        >
          View website
          <ArrowRight className="ml-10 w-5 md:ml-5 lg:ml-10" />
        </Link>
      </div>
    </Container>
  );
};

export default Intro;
