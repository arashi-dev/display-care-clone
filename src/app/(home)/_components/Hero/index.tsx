"use client"

import React from 'react'
import { type Variants, motion, MotionConfig } from 'framer-motion';
import Container from '~/app/_components/Container';

type FlowerSvgProps = {
  className?: string;
}

const FlowerSvg: React.FC<FlowerSvgProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 40 46"
      fill="none"
      aria-hidden="true"
      data-acsb-hidden="true"
      data-acsb-force-hidden="true"
      className={className}
    >
      <path d="M4.18 36.77a5.1 5.1 0 01-3.37-2.73 5.85 5.85 0 01-.56-4.3 6.24 6.24 0 012.81-3.6c1.69-1.05 4.45-1.72 8.29-2 3.84-.3 6.41-.78 7.72-1.45-1.4-.67-4.02-1.14-7.86-1.43-3.75-.39-6.46-1.06-8.15-2.01a5.68 5.68 0 01-2.8-3.45 5.36 5.36 0 01.55-4.45 5.57 5.57 0 013.51-2.73 5.45 5.45 0 014.36.72c1.59 1.05 3.46 3.2 5.62 6.46 2.15 3.16 3.88 5.17 5.2 6.03-.1-1.53-.99-4.07-2.67-7.61-1.69-3.54-2.53-6.32-2.53-8.33 0-1.63.51-3.02 1.54-4.17A5.49 5.49 0 0119.92 0c1.59 0 2.9.57 3.93 1.72a5.74 5.74 0 011.68 4.17c0 2.01-.84 4.79-2.52 8.33-1.69 3.54-2.58 6.08-2.67 7.61 1.3-.86 3.04-2.87 5.2-6.03 2.15-3.26 4.02-5.41 5.61-6.46a5.45 5.45 0 014.36-.72c1.59.38 2.76 1.3 3.5 2.73.76 1.43.9 2.92.43 4.45a5.65 5.65 0 01-2.67 3.45c-1.69 1.05-4.45 1.72-8.29 2-3.84.3-6.41.77-7.72 1.44 1.4.67 3.98 1.2 7.72 1.58 3.84.3 6.6.91 8.29 1.87a5.67 5.67 0 012.81 3.45 5.36 5.36 0 01-.56 4.45 5.57 5.57 0 01-3.51 2.73c-1.5.38-2.95.14-4.36-.72-1.59-1.05-3.46-3.16-5.62-6.32-2.15-3.25-3.88-5.31-5.2-6.17.1 1.53.99 4.07 2.68 7.6 1.68 3.55 2.52 6.33 2.52 8.34 0 1.63-.56 3.02-1.68 4.16a5.05 5.05 0 01-3.93 1.73c-1.6 0-2.95-.58-4.08-1.73a6.02 6.02 0 01-1.54-4.16c0-2.01.84-4.79 2.53-8.33 1.68-3.54 2.57-6.08 2.66-7.61-1.3.86-3.04 2.92-5.2 6.17-2.15 3.16-4.02 5.27-5.61 6.32-1.4.86-2.9 1.1-4.5.72z"></path>
    </svg>
  )
}

const titleVariants: Variants = {
  initial: {
    y: "100%",
    rotateX: -70,
    rotateY: 5,
  },
  animate: {
    y: 0,
    rotateX: 0,
    rotateY: 0,
  }
}

const fadeInVariants: Variants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
  }
}

const opacityVariants: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}

const Hero = () => {
  return (
    <motion.div initial="initial" animate="animate" exit="initial">
      <MotionConfig transition={{ delay: 1, duration: 1, ease: "easeOut" }}>
        <Container>
          <h1 className="font-serif text-[10vw]/none text-zinc-700">
            <span className="flex items-baseline">
              <span className="overflow-hidden">
                <motion.span variants={titleVariants} className="block h-[12vw]">Shaping</motion.span>
              </span>

              <span className="ml-11 overflow-hidden">
                <motion.svg
                  variants={fadeInVariants}
                  className="fill-light-salmon w-[5vw]"
                  viewBox="0 0 75 52"
                  fill="none"
                  aria-hidden="true"
                  data-acsb-hidden="true"
                  data-acsb-force-hidden="true"
                ><path d="M1.1 43c-.99 4.84.65 7.46 5.56 7.85 3.86-2.03 5.3-3.34 9.5-6.09l-.27-.4c-3.73 2.17-5.04 3.15-6.48 3.68-1.77.2-3.34-1.38-2.23-5.7L14.2 20.8l5.7-.2 2.55-.2.26-1.3-7.99.06 2.3-8.05-.72-.07-5.57 4-2.03 4.12-5.3.07-.27 1.3 1.25-.12 3.8.13L1.1 42.99zm14.86 7.46l6.68-.46.59-1.44c5.04-11 14.47-26 17.15-27.1 1.18.39 1.7.98 1.7 2.09 0 2.29-6.6 20.62-6.6 24.42a8.02 8.02 0 003.8 3.27l9.29-4.78-.26-.39-7.2 3.47c.13-2.1 7.65-21.67 7.65-25.6 0-3.01-1.83-5.63-5.76-5.7-4.38.4-15.32 18.93-20.36 30.32h-.2L37.9 2.07c-.14-.39-.72-.91-1.05-1.18L24.28 6.33v.52l6.61-2.75-14.93 46.36zm34.35-9.63c-.13 4.72 2.69 9.37 8.32 10.15 2.95-1.18 8.64-5.04 10.6-6.22l-.26-.78c-2.03 1.3-4.84 3.07-7.79 4.78-3.27-.4-4.51-3.6-4.51-8.78 0-.72 0-1.5.06-2.35 1.18 0 10.08-4.98 12.05-6.36 2.81-1.9 6.22-5.95 6.22-8.31 0-2.23-2.75-4-3.47-4-9.3-.71-20.89 10.68-21.22 21.87zm6.49-3.99c.26-7.33 6.54-17.09 11.78-17.09.79 0 1.11.59 1.11 1.57 0 4.26-9.95 15.52-12.9 15.52z"></path></motion.svg>
              </span>
            </span>

            <span className="flex">
              <span className="overflow-hidden">
                <motion.span variants={opacityVariants} className="block">
                  <FlowerSvg className="fill-light-salmon w-[2.5vw] inline-block ml-14" />
                </motion.span>
              </span>

              <span className="overflow-hidden">
                <motion.span variants={titleVariants} className="block ml-14">Care Sector</motion.span>
              </span>
            </span>
          </h1>

          <p className="text-left text-base/tight font-sans text-zinc-500 ml-[17vw] mt-20">
            <span className="overflow-hidden block"><motion.span variants={fadeInVariants} className="block">We research, plan, design and innovate</motion.span></span>
            <span className="overflow-hidden block"><motion.span variants={fadeInVariants} className="block">to provide better outcomes for those in</motion.span></span>
            <span className="overflow-hidden block"><motion.span variants={fadeInVariants} className="block">care.</motion.span></span>
          </p>

          <motion.span variants={opacityVariants} className="ml-auto relative block w-12">
            <svg viewBox="0 0 16 46" className="w-4 absolute bottom-7 left-1/2 -translate-x-1/2" fill="none">
              <path fill="#444" d="M7.31 45.69c.38.38 1 .38 1.38 0l6.2-6.2a.98.98 0 00-1.37-1.38L8 43.62l-5.52-5.51a.97.97 0 10-1.37 1.37l6.2 6.2zM7.03 0v45h1.94V0H7.02z"></path>
            </svg>

            <span className="bg-light-salmon rounded-full w-12 aspect-square block" />
          </motion.span>
        </Container>
      </MotionConfig>
    </motion.div >
  )
}

export default Hero