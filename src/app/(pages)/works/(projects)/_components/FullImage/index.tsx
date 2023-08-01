import Image, { type ImageProps } from "next/image";
import React from "react";

type FullImageProps = {
  imageSrc: ImageProps["src"];
};

const FullImage: React.FC<FullImageProps> = ({ imageSrc }) => {
  return (
    <div className="relative h-screen w-full">
      <Image src={imageSrc} alt="" fill className="object-cover" />
    </div>
  );
};

export default FullImage;
