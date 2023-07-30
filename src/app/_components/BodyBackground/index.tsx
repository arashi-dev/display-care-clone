"use client"

import { usePathname } from "next/navigation";
import React from "react";

const BodyBackground: React.FC = () => {
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname.startsWith("/works/")
          ? "md:bg-[#f9f5ed]"
          : "md:bg-[linear-gradient(0deg,#fff,#f9f5ed)]"
      } block w-screen h-screen fixed left-0 top-0 -z-10`}
    />
  );
};

export default BodyBackground;
