import React from "react";
import Container from "~/app/_components/Container";

const HeroAnimation: React.FC = () => {
  return (
    <Container className="mt-20 md:mt-0">
      <div className="relative">
        <svg
          className="absolute bottom-0 left-0 right-0 top-0 block md:hidden"
          viewBox="0 0 337 426"
        >
          <g stroke="#000" strokeWidth=".91" opacity=".1">
            <path d="M337 .46H1M337 85.45H1M337 170.45H1M337 255.45H1M337 340.45H1M337 425.45H1M336.55 425V0M252.54 425V0M168.55 425V0M84.55 425V0M.55 425V0"></path>
          </g>
        </svg>

        <svg
          className="absolute bottom-0 left-0 right-0 top-1/2 -translate-y-1/2 hidden md:block"
          viewBox="0 0 1051 375"
        >
          <g stroke="#000" opacity=".1">
            <path d="M.5 0v373.45M95.95 0v373.45M191.41 0v373.45M286.86 0v373.45M382.32 0v373.45M477.77 0v373.45M573.23 0v373.45M668.68 0v373.45M764.14 0v373.45M859.59 0v373.45M955.04 0v373.45M1050.5 0v373.45M1050 .5H0M1050 93.86H0M1050 187.23H0M1050 280.59H0M1050 373.95H0"></path>
          </g>
        </svg>

        <video
          className="relative z-[1] hidden md:block"
          src="/videos/hero-animation.webm"
          controls={false}
          autoPlay
          muted
          loop
        />

        <video
          className="relative z-[1] md:hidden"
          src="/videos/hero-mobile-animation.webm"
          controls={false}
          autoPlay
          muted
          loop
        />
      </div>
    </Container>
  );
};

export default HeroAnimation;
