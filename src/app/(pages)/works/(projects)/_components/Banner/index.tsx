import Image, { type ImageProps } from "next/image";
import React from "react";
import Container from "~/app/_components/Container";

type BanenrProps = {
  imageSrc: ImageProps["src"];
  title: string;
  caption: string;
};

const Banner: React.FC<BanenrProps> = ({ caption, imageSrc, title }) => {
  return (
    <Container className="flex flex-col items-center justify-between md:flex-row">
      <div className="relative w-full md:w-[55%] aspect-[5/4]">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      <div className="mt-24 md:mt-0 md:w-[45%] md:pl-10 lg:pl-20">
        <h2 className="font-serif text-5xl/none text-zinc-700 md:text-3xl/none lg:text-5xl/none">
          {title}
        </h2>

        <p className="ml-5 mt-16 font-sans text-base/none text-black opacity-40 md:ml-0 md:text-xs/none lg:w-3/4 lg:text-base/none">
          {caption}
        </p>
      </div>
    </Container>
  );
};

export default Banner;
