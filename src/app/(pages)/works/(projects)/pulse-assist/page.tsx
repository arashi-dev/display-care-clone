import React from "react";
import Intro from "../_components/Info";
import Overview from "../_components/Overview";
import Banner from "../_components/Banner";
import FullImage from "../_components/FullImage";
import OutCome from "../_components/OutCome";
import NextProject from "../_components/NextProject";
import Wrapper from "../_components/Wrapper";

import OverviewImage from "public/images/projects/pulse-assist-overview.png";
import BannerOneImage from "public/images/projects/pulse-assist-banner-1.png";
import BannerTwoImage from "public/images/projects/pulse-assist-banner-2.png";
import BannerThreeImage from "public/images/projects/pulse-assist-banner-3.png";
import BannerFourImage from "public/images/projects/pulse-assist-banner-4.png";
import FullImageImage from "public/images/projects/pulse-assist-full-image.png";
import OutComeLandscapeImage from "public/images/projects/pulse-assist-outcome-landscape.png";
import OutComePortraitImage from "public/images/projects/pulse-assist-outcome-portrait.png";
import { createMetadata } from "~/app/_utils/createMetadata";

export const metadata = createMetadata({
  title: "Pulse Assist",
});

const Page = () => {
  return (
    <Wrapper>
      <Intro
        title={["Pulse", "Assist"]}
        description={[
          "Custom participant reporting software that replaces",
          "paper forms and makes support data useful.",
        ]}
        year={2022}
        role="Design & Development"
        client="Display In-House Project"
        productType="Custom Web App, Assistive Software."
      />
      <Overview
        title="Software that puts the participants care first."
        caption="‘Pulse’ digitises participants forms and analysis care data to improve outcomes for participants. The software reduces administration and medication errors and eliminates analogue record keeping systems Pulse is fully customisable based on organisation participant/carer needs."
        imageSrc={OverviewImage}
      />
      <Banner
        title="Organised compliant NDIS reporting."
        caption="Reporting is a critical aspect of compliance for companies providing care. Pulse digitises all critical forms and keeps everything organised and stored securely in the cloud. Currently providers both big and small use old archaic paper systems to record data that is then stored on site in folders and cupboards and the data is lost and can not meaningfully be used to improve outcomes for participants. Pulse changes this."
        imageSrc={BannerOneImage}
      />
      <Banner
        title="Pulse analyses data to improve your care."
        caption="Pulse spots trends in your care routines, changes in your mood, diet or behaviour and alerts those that can assist you, data to help you and keep your NDIS provider compliant with documentation needs."
        imageSrc={BannerTwoImage}
      />
      <FullImage imageSrc={FullImageImage} />
      <Banner
        title="Pulse, with you always, your care assistant."
        caption="Pulse spots trends in your care routines, changes in your mood, diet or behavior and alerts those that can assist you, data to help you and keep your NDIS provider compliant with documentation needs."
        imageSrc={BannerThreeImage}
      />
      <Banner
        title="Beta Towards better"
        caption="Pulse is currently in Beta testing with service providers. We are customising the application based on the organisation's feedback so that it can be rolled out into other organisations. We are open to working with organisations of any size on research and development or a custom implementation of pulse to help in care provision and NDIS compliance."
        imageSrc={BannerFourImage}
      />
      <OutCome
        landscapeImageSrc={OutComeLandscapeImage}
        portraitImageSrc={OutComePortraitImage}
        title="Pulse data reimagined to improve care outcomes."
      />
      <NextProject label="SDA I-saint" url="/works/sda-i-saint" />
    </Wrapper>
  );
};

export default Page;
