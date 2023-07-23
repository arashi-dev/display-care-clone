import React from "react";
import "../styles/globals.css";
import RootLayoutProviders from "./_components/RootLayoutProvider";
import Header from "./_components/Header";
import { gilroy, giselle } from "./_fonts";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${giselle.variable} ${gilroy.variable} no-scrollbar min-h-screen md:bg-[linear-gradient(0deg,#fff,#f9f5ed)]`}
      >
        <RootLayoutProviders>
          <Header />
          {children}
        </RootLayoutProviders>
      </body>
    </html>
  );
};

export default Layout;
