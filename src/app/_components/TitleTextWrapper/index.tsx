"use client";

import { type Variants, motion } from "framer-motion";
import React from "react";

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
  },
};

type TitleTextWrapperProps = React.PropsWithChildren<{
  className?: string;
  innerClassName?: string;
}>;

const TitleTextWrapper: React.FC<TitleTextWrapperProps> = ({
  children,
  className,
  innerClassName,
}) => {
  return (
    <span className={`${className} overflow-hidden block`}>
      <motion.span
        variants={titleVariants}
        className={`${innerClassName} block`}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TitleTextWrapper;
