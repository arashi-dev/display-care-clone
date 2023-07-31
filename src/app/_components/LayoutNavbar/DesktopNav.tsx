"use client";

import React, { useEffect } from "react";
import { type LinkDetail, useAnimationQueue } from "./hooks";
import NavItem from "./NavItem";
import { type NavLinkData } from "../links";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname()
  const { addAnimation, isAnimating } = useAnimationQueue();

  useEffect(
    () => onAnimateStateChange(isAnimating),
    [isAnimating, onAnimateStateChange],
  );

  console.log("linksDetails",linksDetails)

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
              pathname={pathname}
            />
          ))}
      </AnimatePresence>
    </div>
  );
};

export default DesktopNav;
