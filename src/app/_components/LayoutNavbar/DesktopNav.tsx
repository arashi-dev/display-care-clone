"use client";

import React, { useEffect } from "react";
import { type LinkDetail, useAnimationQueue } from "./hooks";
import NavItem from "./NavItem";
import { type NavLinkData } from "../links";
import { AnimatePresence } from "framer-motion";

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

  useEffect(
    () => onAnimateStateChange(isAnimating),
    [isAnimating, onAnimateStateChange],
  );

  return (
    <div>
      <AnimatePresence>
        {linksDetails
          .filter(({ id }) => links.some(link => link.id === id))
          .map(({ id, order, side, active }) => (
            <NavItem
              key={id}
              link={links.find(link => link.id === id)!}
              order={order}
              side={side}
              addAnimation={addAnimation}
              isAnimating={isAnimating}
              hide={active}
            />
          ))}
      </AnimatePresence>
    </div>
  );
};

export default DesktopNav;
