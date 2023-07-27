"use client";

import React from "react";
import Container from "../../Container";
import Link, { type LinkProps } from "next/link";
import {
  type Icon,
  Instagram,
  Sms,
  Twitch,
  Youtube,
  ArrowUp,
} from "iconsax-react";
import { AboutLink, ResourcesLink, WorksLink } from "../../links";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useViewportSize } from "@mantine/hooks";

const ReachOut: React.FC = () => {
  return (
    <div>
      <p className="font-serif text-5xl text-white md:text-4xl lg:text-6xl">
        Want out help
        <br />
        with something?
      </p>

      <Link
        href="#"
        className="relative mt-24 block w-max rounded-full border-[1px] border-rose-300 py-4 pl-8 pr-24 font-sans text-lg text-white md:border-zinc-500 md:py-3 md:pl-6 md:pr-16 md:text-sm lg:py-4 lg:pl-8 lg:pr-24 lg:text-lg"
      >
        Reach Out
        <span className="absolute -right-1 top-1/2 box-content flex aspect-square h-full -translate-y-1/2 items-center justify-center rounded-full bg-white p-1">
          <Sms className="w-3/5 text-zinc-600" />
        </span>
      </Link>
    </div>
  );
};

const Logo: React.FC = () => {
  return (
    <div>
      <svg
        width="52"
        height="52"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block"
      >
        <circle cx="23" cy="23" r="23" fill="white" />
        <circle cx="12.6537" cy="25.8211" r="1.88095" fill="#654062" />
        <path
          d="M16.5483 29.992C22.702 33.6569 29.662 31.2622 30.5302 24.7364"
          stroke="#654062"
          strokeWidth="1.33333"
          strokeLinecap="round"
        />
        <path
          d="M32.4035 20.1783C32.4035 19.1395 31.5614 18.2974 30.5226 18.2974C29.4837 18.2974 28.6416 19.1395 28.6416 20.1783"
          stroke="#654062"
          strokeWidth="1.33333"
          strokeLinecap="round"
        />
        <line
          x1="25.8229"
          y1="15.4763"
          x2="25.8206"
          y2="15.474"
          stroke="#654062"
          strokeWidth="1.33333"
          strokeLinecap="round"
        />
        <line
          x1="0.666667"
          y1="-0.666667"
          x2="0.663367"
          y2="-0.666667"
          transform="matrix(-0.707107 0.707107 0.707107 0.707107 37.1062 15.4763)"
          stroke="#654062"
          strokeWidth="1.33333"
          strokeLinecap="round"
        />
        <line
          x1="29.3083"
          y1="13.3215"
          x2="29.3083"
          y2="13.8691"
          stroke="#654062"
          strokeWidth="1.33333"
          strokeLinecap="round"
        />
        <line
          x1="33.0707"
          y1="13.3215"
          x2="33.0707"
          y2="13.8691"
          stroke="#654062"
          strokeWidth="1.33333"
          strokeLinecap="round"
        />
      </svg>

      <p className="relative ml-5 inline-block align-middle font-serif text-4xl font-thin text-white">
        Display
        <span className="absolute -top-1.5 inline-block align-top font-sans text-2xs font-bold">
          TM
        </span>
      </p>
    </div>
  );
};

type LinksProps = {
  label: string;
  links: { label: string; href: LinkProps<"">["href"] }[];
};

const MotionLink = motion(Link);

const Links: React.FC<LinksProps> = ({ label, links }) => {
  return (
    <div>
      <p className="font-sans text-sm uppercase text-white opacity-50 md:text-3xs lg:text-2xs">
        {label}
      </p>

      <ul className="mt-4 lg:mt-7">
        {links.map(({ href, label }) => (
          <li key={label}>
            <MotionLink
              href={href}
              className="relative font-sans text-2xl text-white md:text-base  lg:text-lg"
              initial="initial"
              whileHover="animate"
            >
              {label}
              <motion.span
                variants={{
                  initial: { left: 0, right: "100%" },
                  animate: {
                    left: 0,
                    right: 0,
                  },
                }}
                className="absolute -bottom-[3px] left-0 right-full block h-[2px] bg-white"
              />
            </MotionLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

type SocialMediaProps = {
  icon: Icon;
  href: LinkProps<"">["href"];
};

const SocialMedia: React.FC<SocialMediaProps> = ({ href, icon: Icon }) => {
  return (
    <MotionLink
      href={href}
      className="flex aspect-square min-h-max items-center justify-center rounded-full bg-white p-2"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 45 }}
    >
      <Icon className="aspect-square w-[18px] text-zinc-700 md:w-[22px]" />
    </MotionLink>
  );
};

const Copyright: React.FC = () => {
  return (
    <div className="flex items-center">
      <p className="font-sans text-sm text-white opacity-50">
        © 2022 Display, All rights reserved.
      </p>

      <div className="ml-auto md:hidden">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="block aspect-square rounded-full border-[1px] border-white border-opacity-40 bg-transparent p-3"
        >
          <ArrowUp size="20" color="white" />
        </button>
      </div>
    </div>
  );
};

const pages = [AboutLink, WorksLink, ResourcesLink];

const LinksSection: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between md:justify-normal md:gap-10 lg:gap-16 lg:pr-24">
      <Links
        label="contact"
        links={[
          { href: "#", label: "studio@display.care" },
          { href: "#", label: "+1 1234 123 123" },
        ]}
      />
      <Links
        label="pages"
        links={pages.filter((page) => page.href !== pathname)}
      />
    </div>
  );
};

const SocialMedias: React.FC = () => {
  return (
    <div className="flex items-center gap-3 md:gap-5">
      <SocialMedia href="#" icon={Instagram} />
      <SocialMedia href="#" icon={Youtube} />
      <SocialMedia href="#" icon={Twitch} />
      <SocialMedia href="#" icon={Instagram} />
    </div>
  );
};

const Footer: React.FC = () => {
  const { width } = useViewportSize();

  if (width < 768) {
    return (
      <>
        <Container className="relative z-10 -mb-[50px] w-full rounded-br-[50px] bg-rose-400 py-20">
          <ReachOut />
        </Container>
        <Container className="bg-[#654062] py-32">
          <div className="flex w-full items-center justify-between">
            <Logo />
            <SocialMedias />
          </div>

          <div className="mt-24 block" />

          <LinksSection />

          <div className="mt-36 block" />

          <Copyright />
        </Container>
      </>
    );
  }

  return (
    <Container className="flex justify-between bg-[#654062] py-32">
      <div>
        <ReachOut />
        <div className="mt-20 block" />
        <Logo />
      </div>

      <div className="flex flex-col">
        <LinksSection />

        <div className="mt-32 block" />

        <SocialMedias />

        <div className="mt-auto block" />

        <Copyright />
      </div>
    </Container>
  );
};

export default Footer;
