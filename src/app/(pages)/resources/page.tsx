import React from "react";
import Hero from "./_components/Hero";
import Resource from "./_components/Resource";

import FearnleyImage from "public/images/resource-fearnley.jpg";
import AccessImage from "public/images/resource-access.png";
import A11yImage from "public/images/resource-a11y.png";
import OzPlayerImage from "public/images/resource-oz-player.png";
import CodaImage from "public/images/resource-coda.png";
import PerfectlyNormalImage from "public/images/resource-perfectly-normal.png";
import Container from "~/app/_components/Container";
import { createMetadata } from "~/app/_utils/createMetadata";

export const metadata = createMetadata({
  title: "Resources",
});

const Page = () => {
  return (
    <div className="mb-20 md:mb-52">
      <Hero />

      <Container className="mt-52 flex flex-col gap-20 md:gap-40">
        <Resource
          className="md:w-1/2"
          data={{
            url: "#",
            category: "Podcast",
            title: "A Nation Changed Podcast with Kurt Fearnley",
            caption:
              "A must listen for those of us who would like to learn more about the history and implementation of the NDIS.",
            imageSrc: FearnleyImage,
          }}
        />

        <Resource
          className="md:ml-auto md:w-1/2"
          data={{
            url: "#",
            category: "Documentary",
            title: "Access – A Short Film About Accessibility",
            caption:
              "A short feature on Cory Joseph, showing how he uses technology to assist assist himself in day-to-day life.",
            imageSrc: AccessImage,
          }}
        />

        <div className="flex flex-col items-start gap-x-14 gap-y-24 md:flex-row">
          <div className="max-w-72 h-max w-3/4 flex-1 border-b-2 border-zinc-200 pb-10 md:w-auto md:border-b-0 md:border-l-2 md:pb-0 md:pl-4">
            <p className="font-sans text-base text-zinc-400">Insight/Tip</p>

            <p className="mt-2 font-sans text-xl/none text-zinc-800 md:text-2xl/none">
              Don’t use just colours to convey important information, use shapes
              as well.
            </p>
          </div>

          <Resource
            className="md:ml-auto md:w-1/2"
            data={{
              url: "#",
              category: "Organization",
              title: "The A11Y Project",
              caption:
                "The A11Y Project is a community-driven effort to make digital accessibility easier. The website has great examples of best practices on how to create beautiful, accessible, and inclusive digital experiences.",
              imageSrc: A11yImage,
            }}
          />
        </div>

        <div className="flex flex-col gap-y-20 md:flex-row md:gap-14 lg:gap-28">
          <Resource
            className="flex-1"
            data={{
              url: "#",
              category: "Software",
              title:
                "'Ozplayer' The world’s first completely accessible video player",
              caption:
                "Ozplayer integrates all accessibility features into a web player for playing video content. Ozplayer allows for keyboard navigation, audio tracking, transcripts and captioning as standard for video media.",
              imageSrc: OzPlayerImage,
            }}
          />

          <Resource
            className="flex-1"
            data={{
              url: "#",
              category: "Story",
              title: "Google ‘CODA’",
              caption:
                "Discover what a ‘CODA’ is in this very nice short video from Google accessibility.",
              imageSrc: CodaImage,
            }}
          />
        </div>

        <div className="h-max border-zinc-200 md:w-3/4 md:border-l-2 md:pl-4">
          <p className="font-sans text-base text-zinc-400">Quote</p>

          <p className="mt-2 font-sans text-3xl/none text-zinc-800 md:text-5xl/none">
            Diversity is about all of us, and about us having to figure out how
            to walk through this world together.
          </p>
          <p className="mt-2 font-sans text-lg text-zinc-400 md:text-xl">
            Jacqueline Woodson, Writer
          </p>
        </div>

        <Resource
          className="md:ml-auto md:w-1/2"
          data={{
            url: "#",
            category: "Documentary",
            title: "Perfectly normal",
            caption:
              "New York Times - Op-Doc the Story of Jordan who, through self-awareness, self-acceptance, and his ability to analyse and speak about his Asperger's Syndrome, leads a fulfilling and interesting life.",
            imageSrc: PerfectlyNormalImage,
          }}
        />
      </Container>
    </div>
  );
};

export default Page;
