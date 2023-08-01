import Image, { type ImageProps } from "next/image";
import React from "react";
import Container from "~/app/_components/Container";

type OverviewProps = {
  imageSrc: ImageProps["src"];
  title: string;
  caption: string;
};

const Overview: React.FC<OverviewProps> = ({ caption, imageSrc, title }) => {
  return (
    <Container>
      <Image src={imageSrc} alt={title} className="w-full" />

      <div className="mt-20 flex flex-col justify-between md:flex-row">
        <div className="md:w-5/12">
          <p className="mr-20 font-sans text-xs/none uppercase text-black text-opacity-40">
            overview
          </p>
          <h2 className="mt-5 font-serif text-6xl/none text-zinc-700">
            {title}
          </h2>
        </div>

        <p className="ml-7 mt-14 font-sans text-base/none text-black opacity-40 md:m-0 md:w-5/12">
          {caption}
        </p>
      </div>
    </Container>
  );
};

export default Overview;
