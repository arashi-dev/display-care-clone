import Image, { type ImageProps } from "next/image";
import React from "react";
import Container from "~/app/_components/Container";

type OutComeProps = {
  landscapeImageSrc: ImageProps["src"];
  portraitImageSrc: ImageProps["src"];
  title: string;
};

const OutCome: React.FC<OutComeProps> = ({
  landscapeImageSrc,
  portraitImageSrc,
  title,
}) => {
  return (
    <Container>
      <div className="relative aspect-[14/9] w-full md:w-3/4">
        <Image src={landscapeImageSrc} alt="" fill className="object-cover" />
      </div>

      <div className="flex flex-col-reverse justify-between md:flex-row">
        <div className="mt-20 md:m-24 md:w-5/12">
          <p className="mr-20 font-sans text-base/none md:text-xs/none uppercase text-black text-opacity-40">
            outcome
          </p>
          <h2 className="mt-5 font-serif text-6xl/none text-zinc-700 md:text-4xl/none lg:text-6xl/none">
            {title}
          </h2>
        </div>

        <div className="relative ml-auto mt-20 aspect-[3/4] w-4/5 md:-mt-[20%] md:w-1/2">
          <Image src={portraitImageSrc} alt="" fill className="object-cover" />
        </div>
      </div>
    </Container>
  );
};

export default OutCome;
