"use client";

import { usePathname } from "next/navigation";
import LayoutNavbar from "../LayoutNavbar";
import { AboutLink, BackToWorksLink, ResourcesLink, WorksLink } from "../links";

const mainLinks = [AboutLink, WorksLink, ResourcesLink];
const worksLinks = [BackToWorksLink];

const RootLayoutProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const pathname = usePathname();

  const links = pathname.startsWith("/works/") ? worksLinks : mainLinks;

  return <LayoutNavbar links={links}>{children}</LayoutNavbar>;
};

export default RootLayoutProviders;
