import React from "react";

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="mt-32 flex flex-col gap-60">{children}</div>;
};

export default Wrapper;
