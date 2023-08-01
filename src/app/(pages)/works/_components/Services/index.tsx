import React from "react";
import Container from "~/app/_components/Container";
import {
  AccessibilityIcon,
  ArchitecturalIcon,
  AssistiveTechnologiesIcon,
} from "./icons";

type ServiceProps = {
  title: string;
  caption: string;
  icon: React.ReactNode;
};

const Service: React.FC<ServiceProps> = ({ caption, icon, title }) => {
  return (
    <div className="w-full md:w-[30%]">
      <div className="ml-[10%] h-64 w-1/4 md:m-auto md:h-28 md:w-2/5 lg:h-44">
        {icon}
      </div>

      <h3 className="font-sans text-4xl md:text-lg lg:text-3xl">{title}</h3>

      <p className="mt-2 font-sans text-2xl text-zinc-400 md:text-xs lg:mt-5 lg:text-sm">
        {caption}
      </p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <Container>
      <h2 className="font-serif text-5xl text-zinc-700 lg:text-6xl">
        Services
        <br />
        <span className="text-indigo-400">we provide</span>
      </h2>

      <div className="mt-32 flex flex-col justify-between gap-y-32 md:flex-row">
        <Service
          icon={<ArchitecturalIcon />}
          title="Architectural"
          caption="Design of specialist spaces and environments that consider the needs of those with accessibility needs."
        />
        <Service
          icon={<AccessibilityIcon />}
          title="Accessibility"
          caption="Research, testing, design and implementation for accessibility in the areas of UX UI, web design, application design, usability testing."
        />
        <Service
          icon={<AssistiveTechnologiesIcon />}
          title="Assistive Technologies"
          caption="We research, design and implement products (both physical and digital) that reduce limitations and assist people in accessing the information and services they need."
        />
      </div>
    </Container>
  );
};

export default Services;
