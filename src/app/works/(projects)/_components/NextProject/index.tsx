import { ArrowRight } from "iconsax-react";
import Link, { type LinkProps } from "next/link";
import React from "react";
import Container from "~/app/_components/Container";

type NextProjectProps = {
  label: string;
  url: LinkProps<"">["href"];
};

const NextProject: React.FC<NextProjectProps> = ({ label, url }) => {
  return (
    <Container className="pb-32 md:pb-40">
      <div className="mb-28 block h-[2px] w-full bg-black opacity-10 md:mb-36 md:h-px" />

      <div className="mt-20 flex items-center justify-between md:w-5/12">
        <Link href={url} className="flex flex-col-reverse md:flex-col">
          <p className="font-sans text-lg/none text-black text-opacity-40 md:text-xs/none md:uppercase">
            Next Project
          </p>
          <p className="mb-14 flex items-baseline font-serif text-5xl/none text-zinc-700 md:mb-0 md:mt-14 md:text-4xl/none lg:text-7xl/none">
            {label}

            <ArrowRight className="ml-14 hidden h-14 w-14 text-light-salmon md:block" />
          </p>
        </Link>

        <div className="flex aspect-square w-24 items-center justify-center rounded-full bg-light-salmon md:hidden">
          <ArrowRight className="h-12 w-12 text-white" />
        </div>
      </div>
    </Container>
  );
};

export default NextProject;
