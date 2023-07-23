import { ArrowCircleRight2, Back } from "iconsax-react";
import React from "react";
import Container from "~/app/_components/Container";

const SmileIcon: React.FC = () => {
  return (
    <svg
      className="hidden md:block"
      width="270"
      height="207"
      viewBox="0 0 270 207"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="19.2037" cy="136.423" r="19.2037" fill="#E5E5FB" />
      <path
        d="M58.9665 179.006C121.793 216.423 192.851 191.974 201.715 125.349"
        stroke="#E5E5FB"
        strokeWidth="20.6266"
        strokeLinecap="round"
      />
      <path
        d="M220.841 78.8125C220.841 68.2067 212.243 59.6089 201.637 59.6089C191.031 59.6089 182.433 68.2067 182.433 78.8125"
        stroke="#E5E5FB"
        strokeWidth="20.6266"
        strokeLinecap="round"
      />
      <line
        x1="158.615"
        y1="30.8069"
        x2="153.632"
        y2="25.8235"
        stroke="#E5E5FB"
        strokeWidth="20.6266"
        strokeLinecap="round"
      />
      <line
        x1="10.3133"
        y1="-10.3133"
        x2="3.26573"
        y2="-10.3133"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 268.853 30.8069)"
        stroke="#E5E5FB"
        strokeWidth="20.6266"
        strokeLinecap="round"
      />
      <line
        x1="192.747"
        y1="12.3133"
        x2="192.747"
        y2="10.8903"
        stroke="#E5E5FB"
        strokeWidth="20.6266"
        strokeLinecap="round"
      />
      <line
        x1="231.159"
        y1="12.3133"
        x2="231.159"
        y2="10.8903"
        stroke="#E5E5FB"
        strokeWidth="20.6266"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Featured: React.FC = () => {
  return (
    <>
      <div className="hidden h-10 w-full bg-violet-200 md:block" />

      <Container>
        <div className="h-[3px] w-full bg-zinc-200 md:hidden" />
      </Container>

      <Container className="flex items-start justify-between gap-5 py-20 lg:py-32">
        <div className="flex flex-1 items-baseline">
          <Back
            color="#FF8A65"
            className="mr-6 hidden h-7 w-7 md:block lg:h-12 lg:w-12"
          />

          <div>
            <h2 className="font-serif text-6xl text-zinc-700 md:text-[2rem] lg:text-6xl">
              Featured Projects
            </h2>

            <p className="mt-10 w-2/3 font-sans text-2xl text-zinc-500 md:mt-3 md:text-xs lg:text-base">
              A selection of in house projects, client projects and upcoming
              projects in our area&apos;s of practice.
            </p>
          </div>
        </div>

        <SmileIcon />
        <ArrowCircleRight2
          variant="Bold"
          className="flex h-32 w-32 -rotate-45 text-light-salmon md:hidden"
        />
      </Container>
    </>
  );
};

export default Featured;
