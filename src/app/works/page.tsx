import React from "react";
import Content from "./_components/Content";
import Services from "./_components/Services";
import Container from "../_components/Container";
import Featured from "../_components/Featured";

const Page = () => {
  return (
    <div>
      <Content />

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
