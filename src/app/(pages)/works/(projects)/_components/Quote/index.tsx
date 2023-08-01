"use client";

import { QuoteUp } from "iconsax-react";
import Image, { type ImageProps } from "next/image";
import React from "react";
import Container from "~/app/_components/Container";

type QuoteProps = {
  text: string;
  profile: {
    avatarSrc: ImageProps["src"];
    name: string;
    title: string;
  };
};

const Quote: React.FC<QuoteProps> = ({ profile, text }) => {
  return (
    <Container>
      <QuoteUp
        variant="Bold"
        className="h-20 w-20 text-sky-400 lg:h-28 lg:w-28"
      />

      <div className="mt-10 px-7 md:ml-auto md:mt-0 md:w-3/4">
        <p className="font-serif text-5xl md:text-4xl text-zinc-700 lg:text-5xl">{text}</p>

        <div className="mt-16 md:mt-24 flex items-center">
          <div className="relative aspect-square w-20 md:w-14 overflow-hidden rounded-full lg:w-20">
            <Image
              src={profile.avatarSrc}
              alt={profile.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="ml-7">
            <p className="font-serif text-xl text-zinc-700 lg:text-2xl">
              {profile.name}
            </p>
            <p className="font-sans text-sm text-zinc-500 lg:text-base">
              {profile.title}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Quote;
