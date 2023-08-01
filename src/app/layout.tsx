import React from "react";
import "../styles/globals.css";
import RootLayoutProviders from "./_components/RootLayoutProvider";
import Header from "./_components/Header";
import { gilroy, giselle } from "./_fonts";
import BodyBackground from "./_components/BodyBackground";
import { createMetadata } from "./_utils/createMetadata";

export const metadata = createMetadata({
  title: "A disability oriented design studio",
});

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${giselle.variable} ${gilroy.variable} no-scrollbar min-h-screen`}
      >
        <BodyBackground />
        <RootLayoutProviders>
          <Header />
          {children}
        </RootLayoutProviders>
      </body>
    </html>
  );
};

export default Layout;
