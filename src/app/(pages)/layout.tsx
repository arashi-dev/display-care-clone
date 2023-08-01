import React from "react";
import RootLayoutProviders from "../_components/RootLayoutProvider";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <RootLayoutProviders>{children}</RootLayoutProviders>;
};

export default Layout;
