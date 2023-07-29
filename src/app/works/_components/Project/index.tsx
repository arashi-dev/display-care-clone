import { MotionConfig, motion } from "framer-motion";
import { ArrowRight } from "iconsax-react";
import Image, { type ImageProps } from "next/image";
import Link, { type LinkProps } from "next/link";
import React from "react";
import Container from "~/app/_components/Container";

type ContentProps = {
  title: string;
  caption: string;
  year: number;
  role: string;
};

const Content: React.FC<ContentProps> = ({ caption, role, title, year }) => {
  return (
    <div className="md:w-1/3">
      <h2 className="font-serif text-5xl text-zinc-700 md:text-4xl lg:text-6xl">
        {title}
      </h2>

      <p className="mt-3 font-sans text-base/tight text-zinc-400 md:text-xs/tight lg:mt-5 lg:text-base/tight">
        {caption}
      </p>

      <div className="mt-16 flex gap-4 font-sans md:mt-3 md:flex-col lg:mt-6 lg:gap-8">
        <div>
          <p className="text-sm text-black text-opacity-30 lg:text-base">
            Year
          </p>
          <p className="text-lg text-zinc-700 md:text-base lg:text-lg">
            {year}
          </p>
        </div>

        <div className="ml-16 md:ml-0">
          <p className="text-sm text-black text-opacity-30 lg:text-base">
            Role
          </p>
          <p className="text-lg text-zinc-700 md:text-base lg:text-lg">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export type ProjectProps = {
  contentPosition: "right" | "left";
  color: keyof typeof bgVariants;
  content: ContentProps;
  imageSrc: ImageProps["src"];
  url: LinkProps<"">["href"];
};

const MotionLink = motion(Link);
const MotionImage = motion(Image);

const bgVariants = {
  green: "bg-emerald-500",
  salmon: "bg-light-salmon",
} as const;

const Project: React.FC<ProjectProps> = ({
  color,
  content,
  contentPosition,
  imageSrc,
  url,
}) => {
  return (
    <Container
      className={`flex flex-col items-center justify-between gap-10 md:gap-0 ${
        contentPosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <MotionLink
        initial="initial"
        whileHover="animate"
        href={url}
        className="relative block w-full md:w-3/5"
      >
        <MotionConfig transition={{ duration: 0.5, ease: "easeOut" }}>
          <div className="overflow-hidden">
            <MotionImage
              variants={{ animate: { scale: 1.05 }, initial: { scale: 1 } }}
              src={imageSrc}
              alt={content.title}
              className="block h-full w-full"
            />
          </div>

          <motion.div
            variants={{ animate: { scale: 0.95 }, initial: { scale: 1 } }}
            className={`${bgVariants[color]} ${
              contentPosition === "right" ? "md:right-12" : "md:left-12"
            } absolute -bottom-14 right-8 flex aspect-square w-28 flex-col items-center justify-center gap-2 rounded-full text-white lg:-bottom-20 lg:w-40 lg:gap-4`}
          >
            <ArrowRight color="white" className="md:w-[16px] lg:w-[20px]" />
            <p className="font-sans text-2xs uppercase md:text-3xs lg:text-2xs">
              Case Study
            </p>
          </motion.div>
        </MotionConfig>
      </MotionLink>

      <Content {...content} />
    </Container>
  );
};

export default Project;
