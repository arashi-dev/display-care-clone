import React from "react";
import Intro from "../_components/Info";
import Overview from "../_components/Overview";
import Banner from "../_components/Banner";
import FullImage from "../_components/FullImage";
import OutCome from "../_components/OutCome";
import NextProject from "../_components/NextProject";
import Wrapper from "../_components/Wrapper";
import Quote from "../_components/Quote";

import OverviewImage from "public/images/projects/sda-overview.png";
import BannerOneImage from "public/images/projects/sda-banner-1.png";
import BannerTwoImage from "public/images/projects/sda-banner-2.png";
import FullImageImage from "public/images/projects/sda-full-image.png";
import OutComeLandscapeImage from "public/images/projects/sda-outcome-landscape.png";
import OutComePortraitImage from "public/images/projects/sda-outcome-portrait.png";
import BruceAllomImage from "public/images/projects/sda-bruce-allom.jpg";
import { createMetadata } from "~/app/_utils/createMetadata";

export const metadata = createMetadata({
  title: "SDA I-saint",
});

const Page = () => {
  return (
    <Wrapper>
      <Intro
        title={["SDA", "I-saint"]}
        description={[
          "A fully customised CMS to manage all aspects of NDIS",
          "property sales, build, and management processes.",
        ]}
        year={2021}
        role="Fullstack Design & Dev"
        client="SDA Smart Homes"
        productType="Custom Web App/CMS"
      />

      <Overview
        title="A CMS to gather, organise, and manage complex build processes."
        caption="SDA Smart Homes Australia builds high-support, disability-first housing for participants on the NDIS. We are working with them to build a fully customised CMS to manage all aspects of their property sales, build, and NDIS tenant management processes."
        imageSrc={OverviewImage}
      />

      <Banner
        title="Four Departments Unified."
        caption="Managing the build of property can be complex, to say the least, with many moving parts, stakeholders, and raw data required to take a project from initial inquiry to a completed home. Throw into the mix the extra compliance and design needs of high-care participants on the NDIS and you have a process that needs to be, where possible, systemised for effective management. We worked with SDASHA from initial planning to a custom-built web application that turns complex data sets into a streamlined system to manage the build process, from the first investor inquiry all the way through to completed tenanted homes."
        imageSrc={BannerOneImage}
      />

      <FullImage imageSrc={FullImageImage} />

      <Banner
        title="Custom built functions and features:"
        caption="STOCK BUILDER APPLICATION. A fully customised stock list creator built on the NDIS SDA housing calculator. SALES MANAGER APPLICATION A call and lead management application that manages all aspects of the sales process. BUILD MANAGEMENT APPLICATION A custom built project management application to manage the build of properties. NDIS TENANT APPLICATION A custom built application for staff to manage tenant leads and store sensitive tenant files and rental information related to NDIS housing. PERFORMANCE DASHBOARDS. The software is integrated in such a way that management is easily able to login to performance dashboards and view performance across all sectors of their organisation."
        imageSrc={BannerTwoImage}
      />

      <OutCome
        landscapeImageSrc={OutComeLandscapeImage}
        portraitImageSrc={OutComePortraitImage}
        title="SDASHA now has a foundational platform to become the market-leading, tech-centric NDIS housing provider."
      />

      <Quote
        text="The app is even easier to use than you are to work with."
        profile={{
          name: "Bruce Allom",
          title: "Acquisition Manager, SDA Smart Homes Australia.",
          avatarSrc: BruceAllomImage,
        }}
      />

      <NextProject label="Spring Flats" url="/works/spring-flats" />
    </Wrapper>
  );
};

export default Page;
