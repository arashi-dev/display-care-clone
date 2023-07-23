import React from "react";
import type { SetOptional } from "type-fest";
import Link from "next/link";
import NavIcon from "./NavIcon";
import {
  MotionConfig,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { type NavLinkData, bgVariants } from "../links";
import { usePathname } from "next/navigation";

type MobileNavLinkProps = {
  link: SetOptional<NavLinkData, "iconComponent">;
  order: number;
  onClose: () => void
};

const MotionLink = motion(Link);

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ link, order, onClose }) => {
  const pathname = usePathname()
  const rotateX = useMotionValue(0);
  const contentRotateX = useMotionValue(0);

  useMotionValueEvent(rotateX, "change", (value) =>
    contentRotateX.set(90 - value),
  );

  return (
    <MotionLink
      href={link.href}
      className={`${
        bgVariants[link.color]
      } fixed -right-[17%] z-50 h-[136vw] w-[80vw] origin-bottom-right`}
      style={{
        top: `calc(${order + 1} * 14vh + 1vh)`,
        rotateZ: 0,
      }}
      initial={{
        x: "100%",
      }}
      animate={{
        x: order === 0 ? 50 : (order + 1) * 10,
        rotateZ: -(order * 7) || -4,
      }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      onUpdate={(values) =>
        "rotateZ" in values && contentRotateX.set(-values.rotateZ)
      }
      transition={{
        delay: order * 0.2,
        type: "spring",
        damping: 30,
      }}
      onClick={() => {
        if(link.href === pathname) {
          onClose()
        }
      }}
    >
      <motion.div
        className="ml-10 overflow-hidden"
        style={{
          marginTop: `calc(${order * 10}px + 2.5rem)`,
          rotate: contentRotateX,
        }}
      >
        <MotionConfig transition={{ duration: 0.5, delay: order * 0.2 + .5 }}>
          <motion.div
            className="flex items-center gap-5"
            style={{ transformOrigin: `${link.iconComponent ? "24px" : "0px"} 24px` }}
            initial={{
              rotateZ: -20,
              opacity: 0,
            }}
            animate={{
              rotateZ: 0,
              opacity: 1,
            }}
          >
            {link.iconComponent && (
              <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
                <NavIcon
                  color={link.color}
                  iconComponent={link.iconComponent}
                />
              </motion.div>
            )}

            <p className="font-serif text-2xl text-white">{link.label}</p>
          </motion.div>
        </MotionConfig>
      </motion.div>
    </MotionLink>
  );
};

export default MobileNavLink;
