import React, { useEffect } from "react";
import Link from "next/link";
import { MotionConfig, type MotionStyle, motion } from "framer-motion";
import { useState } from "react";
import { transition, type AnimatorProxy } from "./hooks";
import NavIcon from "./NavIcon";
import { type NavLinkData, bgVariants } from "../links";

const MotionLink = motion(Link);

export type NavItemProps = {
  link: NavLinkData;
  side: "left" | "right";
  hide: boolean;
  animator: AnimatorProxy;
  isFirstRender: boolean;
};

const NavItem: React.FC<NavItemProps> = ({
  hide,
  side,
  link,
  animator,
  isFirstRender,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(
    () => animator.on("animateStateChange", setIsAnimating),
    [animator],
  );

  useEffect(() => {
    if (isAnimating) {
      setIsHidden(false);
    } else {
      setIsHidden(hide);
    }
  }, [hide, isAnimating]);

  return (
    <MotionConfig transition={transition}>
      <MotionLink
        href={link.href}
        className={`fixed top-0 z-10 h-screen overflow-hidden py-12 ${
          isHidden ? "invisible" : "visible"
        }`}
        style={
          {
            ...animator.node(link.id)!.motionValues,
          } as MotionStyle as never
        }
        initial={
          !isFirstRender
            ? {
                x: `${side === "left" ? "-" : ""}100%`,
              }
            : undefined
        }
        animate={{ x: 0 }}
        exit={{
          x: `${side === "left" ? "-" : ""}100%`,
        }}
        onClick={(e) => isAnimating && e.preventDefault()}
      >
        <motion.div
          variants={{ initial: { scaleY: 0 }, animate: { scaleY: 1 } }}
          className={`${
            bgVariants[link.color]
          } absolute top-0 -z-10 block h-screen w-full origin-bottom`}
        />
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
      </MotionLink>
    </MotionConfig>
  );
};

export default NavItem;
