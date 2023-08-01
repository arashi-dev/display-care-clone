import React from "react";
import "../styles/globals.css";
import { gilroy, giselle } from "./_fonts";
import { createMetadata } from "./_utils/createMetadata";

export const metadata = createMetadata();

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${giselle.variable} ${gilroy.variable} no-scrollbar min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
};

export default Layout;
