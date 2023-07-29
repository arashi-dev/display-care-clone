"use client";

import { motion } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import Link, { type LinkProps } from "next/link";
import React from "react";

type ResourceData = {
  category: string;
  title: string;
  caption: string;
  imageSrc: ImageProps["src"];
  url: LinkProps<"">["href"];
};

type ResourceProps = {
  className?: string;
  data: ResourceData;
};

const MotionImage = motion(Image);
const MotionLink = motion(Link);

const Resource: React.FC<ResourceProps> = ({ data, className }) => {
  return (
    <MotionLink
      whileHover="animate"
      href={data.url}
      className={`${className} flex flex-col gap-y-7`}
    >
      <div className="relative block aspect-[4/3] w-full overflow-hidden">
        <MotionImage
          variants={{ animate: { scale: 1.05 } }}
          src={data.imageSrc}
          alt={data.title}
          fill
          objectFit="cover"
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="h-max border-zinc-200 font-sans md:border-l-2 md:px-4">
        <p className="text-base text-zinc-400 sm:text-lg md:text-base">
          {data.category}
        </p>

        <p className="mt-2 text-2xl/none text-zinc-800 sm:text-3xl/none md:text-2xl/none">
          {data.title}
        </p>

        <p className="sx:text-base/tight mt-2 text-sm/tight text-zinc-400 md:text-sm/tight">
          {data.caption}
        </p>
      </div>
    </MotionLink>
  );
};

export default Resource;
