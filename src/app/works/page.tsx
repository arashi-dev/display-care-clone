import React from "react";
import Services from "./_components/Services";
import Container from "../_components/Container";
import Featured from "../_components/Featured";
import Hero from "./_components/Hero";
import Project, { type ProjectProps } from "./_components/Project";
import PulseAssistImage from "public/images/project-pulse-assist.png";
import SdaISaintImage from "public/images/project-sda-i-saint.png";
import SpringFlatsImage from "public/images/project-spring-flats.png";

const projects: ProjectProps[] = [
  {
    color: "green",
    content: {
      title: "Pulse Assist",
      caption:
        "Custom participant reporting software that replaces paper forms and makes support data useful.",
      year: 2022,
      role: "Design & Development",
    },
    contentPosition: "right",
    imageSrc: PulseAssistImage,
    url: "/works/pulse-assist" as never,
  },
  {
    color: "salmon",
    content: {
      title: "SDA I-Saint",
      caption:
        "A fully customised CMS to manage all aspects of NDIS property sales, build, and management processes.",
      year: 2021,
      role: "Fullstack Design & Dev",
    },
    contentPosition: "left",
    imageSrc: SdaISaintImage,
    url: "/works/sda-i-saint" as never,
  },
  {
    color: "green",
    content: {
      title: "Spring Flats",
      caption:
        "Springflats stay is a Supported Independent Living (SIL) provider working with both children and adults as part of the NDIS.",
      year: 2020,
      role: "Branding & Full Tech assistance.",
    },
    contentPosition: "right",
    imageSrc: SpringFlatsImage,
    url: "/works/spring-flats" as never,
  },
];

const Page = () => {
  return (
    <div>
      <Hero />

      <div className="mt-52 flex flex-col gap-72 pb-72">
        {projects.map((project) => (
          <Project key={project.content.title} {...project} />
        ))}
      </div>

      <Container>
        <div className="mb-32 block h-[1px] w-full bg-zinc-200" />
      </Container>

      <Services />

      <div className="mt-56 block" />

      <Featured
        title="Helpful Resources"
        caption="Case studies about how we helped our clients and like minded people."
        url="/resources"
      />
    </div>
  );
};

export default Page;
