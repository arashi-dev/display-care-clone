import Link from "next/link";
import React from "react";
import { createMetadata } from "./_utils/createMetadata";

export const metadata = createMetadata({
  title: "404",
});

const NotFound: React.FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-center font-sans text-xl">
      <h1>404 - Page not found</h1>

      <Link href="/" className="mt-5 block">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
