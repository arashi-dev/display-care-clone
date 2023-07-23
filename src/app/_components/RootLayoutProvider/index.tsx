"use client";

import LayoutNavbar from "../LayoutNavbar";
import { AboutLink, ResourcesLink, WorksLink } from "../links";

const links = [AboutLink, WorksLink, ResourcesLink];

const RootLayoutProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <LayoutNavbar links={links}>{children}</LayoutNavbar>;
};

export default RootLayoutProviders;
