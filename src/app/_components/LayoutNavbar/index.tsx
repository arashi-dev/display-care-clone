"use client";

import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { AnimatorProxy } from "./hooks";
import Main from "./Main";
import { useViewportSize, useWindowEvent } from "@mantine/hooks";
import DesktopNav from "./DesktopNav";
import { type NavLinkData } from "../links";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

type LayoutNavbarProps = React.PropsWithChildren<{
  links: NavLinkData[];
}>;

const LayoutNavbar: React.FC<LayoutNavbarProps> = ({ children, links }) => {
  const animator = useMemo(() => new AnimatorProxy(links), [links]);
  const { width } = useViewportSize();
  const pathname = usePathname();
  const isMounted = useRef(false);

  // useEffect(() => {
  //   animator.isAnimating = true;
  // }, [animator, pathname]);

  useEffect(() => {
    isMounted.current = false;
  }, [animator]);

  useEffect(() => {
    animator.isAnimating = true;

    const linkToHide = links.find((link) => link.href === pathname);

    const node = linkToHide && animator.node(linkToHide.id);

    if (node) {
      const side = node?.data.side === "left" ? "right" : "left";

      if (!isMounted.current) {
        isMounted.current = true;

        void node?.set({ side, hide: true });
      }

      void node?.move({ side, hide: true });
    } else {
      const timeout = setTimeout(() => {
        animator.isAnimating = false;
      }, 500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [animator, links, pathname]);

  const sizeHandler = useCallback(() => {
    animator.nodes.forEach((node) => node.resize());
  }, [animator.nodes]);

  useWindowEvent("resize", sizeHandler);
  useWindowEvent("orientationchange", sizeHandler);

  return (
    <div>
      {width > 768 && <DesktopNav animator={animator} links={links} />}

      <Main animator={animator}>
        {children}

        <Footer />
      </Main>
    </div>
  );
};

export default LayoutNavbar;
