"use client";

import React, { useEffect } from "react";
import { type LinkDetail, useAnimationQueue } from "./hooks";
import NavItem from "./NavItem";
import { type NavLinkData } from "../links";

type DesktopNavProps = {
  linksDetails: LinkDetail[];
  links: NavLinkData[];
  onAnimateStateChange: (isAnimating: boolean) => void;
};

const DesktopNav: React.FC<DesktopNavProps> = ({
  linksDetails,
  links,
  onAnimateStateChange,
}) => {
  const { addAnimation, isAnimating } = useAnimationQueue();

  useEffect(() => onAnimateStateChange(isAnimating), [isAnimating, onAnimateStateChange]);

  return (
    <div>
      {linksDetails.map(({ index, order, side, active }) => (
        <NavItem
          key={links[index]!.label}
          link={links[index]!}
          order={order}
          side={side}
          addAnimation={addAnimation}
          isAnimating={isAnimating}
          hide={active}
        />
      ))}
    </div>
  );
};

export default DesktopNav;
