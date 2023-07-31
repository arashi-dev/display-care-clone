import React, { useEffect } from "react";
import Link from "next/link";
import { MotionConfig, motion, useAnimation } from "framer-motion";
import type { Promisable } from "type-fest";
import { useState } from "react";
import { useNavItemAnimation } from "./hooks";
import NavIcon from "./NavIcon";
import { type NavLinkData, bgVariants } from "../links";

const MotionLink = motion(Link);

export type NavItemProps = {
  link: NavLinkData;
  order: number;
  side: "left" | "right";
  addAnimation: (
    key: string | number,
    animation: (next: () => Promise<void>) => Promisable<void>,
  ) => void;
  isAnimating: boolean;
  hide: boolean;
  pathname: string;
};

const NavItem: React.FC<NavItemProps> = ({
  hide,
  isAnimating,
  addAnimation,
  side,
  order,
  link,
  pathname
}) => {
  const controls = useAnimation();

  const [isHidden, setIsHidden] = useState(false);

  useNavItemAnimation({
    addAnimation,
    controls,
    hide,
    order,
    side,
    id: link.id,
    pathname: "",
  });

  useEffect(() => {
    if (isAnimating) {
      setIsHidden(false);
    } else {
      setIsHidden(hide);
    }
  }, [hide, isAnimating]);

  return (
    <MotionLink
      initial={{ y: "100%" }}
      href={link.href}
      className={`fixed top-0 z-10 h-screen overflow-hidden py-12 ${
        bgVariants[link.color]
      } ${isHidden ? "invisible" : "visible"}`}
      animate={controls}
      exit={{
        x: `${side === "left" ? "-" : ""}100%`,
        transition: { bounce: 0.15, damping: 20, type: "spring" },
      }}
      onClick={(e) => isAnimating && e.preventDefault()}
    >
      <MotionConfig transition={{ duration: 0.5 }}>
        <motion.div
          className="flex h-full flex-col items-center justify-between"
          initial="hidden"
          animate={isAnimating ? "hidden" : "visible"}
        >
          {link.iconComponent && (
            <NavIcon color={link.color} iconComponent={link.iconComponent} />
          )}

          <div className="overflow-hidden">
            <motion.p
              className={`vertical-text rotate-180 font-serif text-4xl/none text-white`}
              variants={{
                hidden: {
                  x: "100%",
                  rotate: 180,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  rotate: 180,
                  opacity: 1,
                },
              }}
            >
              {link.label}
            </motion.p>
          </div>
        </motion.div>
      </MotionConfig>
    </MotionLink>
  );
};

export default NavItem;
