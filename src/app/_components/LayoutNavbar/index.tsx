"use client";

import React, { useMemo, useState } from "react";
import { useLinksDetails } from "./hooks";
import Main from "./Main";
import { useViewportSize } from "@mantine/hooks";
import DesktopNav from "./DesktopNav";
import { type NavLinkData } from "../links";
import Footer from "./Footer";

type LayoutNavbarProps = React.PropsWithChildren<{
  links: NavLinkData[];
}>;

const LayoutNavbar: React.FC<LayoutNavbarProps> = ({ children, links }) => {
  const linksDetails = useLinksDetails(links);
  const [isAnimating, setIsAnimating] = useState(false);
  const { width } = useViewportSize();

  const leftLinksAmount = useMemo(
    () =>
      linksDetails.filter(({ side, active }) => side === "left" && !active)
        .length,
    [linksDetails],
  );

  return (
    <div>
      {width > 768 && (
        <DesktopNav
          links={links}
          linksDetails={linksDetails}
          onAnimateStateChange={setIsAnimating}
        />
      )}

      <Main
        linksAmount={width >= 768 ? links.length - 1 : 0}
        leftLinksAmount={width >= 768 ? leftLinksAmount : 0}
        isAnimating={isAnimating}
      >
        {children}

        <Footer />
      </Main>
    </div>
  );
};

export default LayoutNavbar;
