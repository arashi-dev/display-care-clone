"use client";

import { type Variants, motion } from "framer-motion";
import { type Icon as IconSaxType } from "iconsax-react";
import React from "react";
import { type NavLinkColors, textVariants } from "../links";

type IconProps = {
  iconComponent: IconSaxType;
  color: NavLinkColors;
};

const motionVariants: Variants = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const NavIcon: React.FC<IconProps> = ({ iconComponent: IconComponent, color }) => {
  return (
    <motion.div
      className={`rounded-full bg-white p-3`}
      variants={motionVariants}
    >
      <IconComponent size="24" className={textVariants[color]} />
    </motion.div>
  );
};

export default NavIcon;
