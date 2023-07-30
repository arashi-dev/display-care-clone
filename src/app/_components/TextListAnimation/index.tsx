import { motion } from "framer-motion";
import React from "react";

type TextListAnimationProps = {
  texts: string[];
  className?: string;
  innerClassName?: string;
};

const TextListAnimation: React.FC<TextListAnimationProps> = ({
  texts,
  className,
  innerClassName,
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.2 }}
      className={`${className} font-sans text-xl/tight text-zinc-500 md:text-xs/tight lg:text-base/tight`}
    >
      {texts.map((text) => (
        <p key={text} className="overflow-hidden">
          <motion.span
            className={`${innerClassName} block`}
            variants={{ initial: { y: "100%" }, animate: { y: 0 } }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {text}
          </motion.span>
        </p>
      ))}
    </motion.div>
  );
};

export default TextListAnimation;
