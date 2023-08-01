"use client";

import React, { useCallback, useState } from "react";
import LogoSvg from "./LogoSvg";
import Link from "next/link";
import { ArrowRight } from "iconsax-react";
import HeaderContainer from "./Container";
import MobileNavLink from "../LayoutNavbar/MobileNavLink";
import { ContactLink, HomeLink, ResourcesLink, WorksLink } from "../links";
import { AnimatePresence, motion } from "framer-motion";

const links = [ContactLink, ResourcesLink, WorksLink, HomeLink];

const Header: React.FC = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);

  const navCloseHandler = useCallback(() => setIsNavOpened(false), []);

  return (
    <HeaderContainer isNavOpened={isNavOpened}>
      <div className="mt-14 flex items-center">
        <div>
          <LogoSvg className="inline-block" />

          <p className="relative ml-5 inline-block align-middle font-serif text-3xl font-thin text-zinc-700">
            Display
            <span className="absolute -top-1.5 inline-block align-top font-sans text-3xs font-bold">
              TM
            </span>
          </p>
        </div>

        <div className="ml-36 hidden font-sans text-2xs/tight font-thin uppercase text-gray-500 md:block">
          a care oriented
          <br />
          designs studio
        </div>

        <Link
          href="#"
          className="ml-auto hidden w-max items-center rounded-full bg-light-salmon px-6 py-3 font-sans text-white md:flex"
        >
          Contact
          <ArrowRight className="ml-10" size="24" color="white" />
        </Link>

        <button
          type="button"
          className="ml-auto flex flex-col gap-2 border-none bg-transparent md:hidden"
          onClick={() => setIsNavOpened((prev) => !prev)}
        >
          <motion.span
            className="block h-[2px] w-8 bg-zinc-600"
            animate={
              isNavOpened ? { rotate: 45, y: ".3rem" } : undefined
            }
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
          <motion.span
            className="block h-[2px] w-8 bg-zinc-600"
            animate={
              isNavOpened ? { rotate: -45, y: "-.3rem" } : undefined
            }
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isNavOpened && (
          <motion.div className="absolute top-0 left-0">
            {links.map((link, i) => (
              <MobileNavLink
                key={i}
                link={link}
                order={i}
                onClose={navCloseHandler}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
