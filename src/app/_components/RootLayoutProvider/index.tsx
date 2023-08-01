"use client";

import { usePathname } from "next/navigation";
import LayoutNavbar from "../LayoutNavbar";
import { AboutLink, BackToWorksLink, ResourcesLink, WorksLink } from "../links";
import Header from "../Header";
import BodyBackground from "../BodyBackground";

const mainLinks = [AboutLink, WorksLink, ResourcesLink];
const worksLinks = [BackToWorksLink];

const RootLayoutProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const pathname = usePathname();

  // if(pathname )

  const links = pathname.startsWith("/works/") ? worksLinks : mainLinks;

  return (
    <LayoutNavbar links={links}>
      <BodyBackground />
      <Header />
      {children}
    </LayoutNavbar>
  );
};

export default RootLayoutProviders;
