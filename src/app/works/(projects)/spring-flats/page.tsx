import React from "react";
import Intro from "../_components/Info";
import Overview from "../_components/Overview";
import Banner from "../_components/Banner";
import FullImage from "../_components/FullImage";
import NextProject from "../_components/NextProject";
import Wrapper from "../_components/Wrapper";
import Quote from "../_components/Quote";

import OverviewImage from "public/images/projects/spring-flats-overview.png";
import BannerOneImage from "public/images/projects/spring-flats-banner-1.png";
import BannerTwoImage from "public/images/projects/spring-flats-banner-2.png";
import BannerThreeImage from "public/images/projects/spring-flats-banner-3.png";
import FullImageImage from "public/images/projects/spring-flats-full-image.png";
import DavidJohnsonImage from "public/images/projects/spring-flats-david-johnson.png";

const Page = () => {
  return (
    <Wrapper>
      <Intro
        title={["Spring", "Flats"]}
        description={[
          "Springflats stay is a Supported Independent Living (SIL)",
          "provider working with both children and adults as part",
          "of the NDIS.",
        ]}
        year={2020}
        role="Branding & Full Tech assistance."
        client="Spring Flats Stay"
        productType="Full service branding."
      />

      <Overview
        title="Branding, systems and launch for a family provider."
        caption="Springflats stay required a full suite of services including branding, web design & development, policy process and documentation creation, implementation of information systems hardware and related staff training, audit planning and support."
        imageSrc={OverviewImage}
      />

      <Banner
        title="Website and Branding, doing it all."
        caption="Display designed and built a fully customised contemporary website for SFS to showcase the type of services they offer, participant stories, and the beautiful property they operate from. We managed the photoshoot and filming of the property for website collateral and provided colour scheme and branding services for the organisation on items such as ID cards, fire evacuation diagrams, branded stationery."
        imageSrc={BannerOneImage}
      />

      <Banner
        title="Technology and system integrations"
        caption="SFS is a new organisation open to trialing and implementing technology to enhance the standard of care for its participants, staff, and stakeholders. 1. Design and implementation of fully integrated cloud based operating system and data management system. 2. Set up of Slack for all internal communications including various automations with G-suite 3. Trial with staff, participants and families for fully customised documentation and behaviour support software ‘Pulse’ currently in Beta 4. Installation and integration of smart home technologies, Google smart home, light bulbs, voice command Android televisions, smart lighting automation."
        imageSrc={BannerTwoImage}
      />

      <FullImage imageSrc={FullImageImage} />

      <Banner
        title="Docs"
        caption="We custom designed all stationary and reporting forms in line with NDIS best practices and digitally linking each form to the relevant policy and process."
        imageSrc={BannerThreeImage}
      />

      <Quote
        text="Communication amongst all team members and stakeholders is now instant, making service delivery so much easier"
        profile={{
          name: "David Johnson",
          title: "Support Coordinator, Spring Flats",
          avatarSrc: DavidJohnsonImage,
        }}
      />

      <NextProject label="Pulse Assist" url="/works/pulse-assist" />
    </Wrapper>
  );
};

export default Page;
