import { type Variants, motion } from "framer-motion";
import React from "react";

const opacityVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const ScrollDownButton: React.FC = () => {
  return (
    <motion.span
      variants={opacityVariants}
      className="relative ml-auto hidden w-12 md:block"
    >
      <svg
        viewBox="0 0 16 46"
        className="absolute bottom-7 left-1/2 w-4 -translate-x-1/2"
        fill="none"
      >
        <path
          fill="#444"
          d="M7.31 45.69c.38.38 1 .38 1.38 0l6.2-6.2a.98.98 0 00-1.37-1.38L8 43.62l-5.52-5.51a.97.97 0 10-1.37 1.37l6.2 6.2zM7.03 0v45h1.94V0H7.02z"
        ></path>
      </svg>

      <span className="block aspect-square w-12 rounded-full bg-light-salmon" />
    </motion.span>
  );
};

export default ScrollDownButton;
