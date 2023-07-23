"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "../Container";
import { LayoutContext } from "../LayoutNavbar/contexts";
import { AnimatePresence, motion } from "framer-motion";

type HeaderContainerProps = React.PropsWithChildren<{
  isNavOpened: boolean;
}>;

const MotionContainer = motion(Container);

const HeaderContainer: React.FC<HeaderContainerProps> = ({
  children,
  isNavOpened,
}) => {
  const { width } = useContext(LayoutContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const [initialHeight, setInitialHeight] = useState(0);

  useEffect(() => {
    setInitialHeight(containerRef.current?.clientHeight || 0);
  }, []);

  return (
    <>
      <div style={{ height: initialHeight }} className="mt-16" />

      <MotionContainer
        ref={containerRef}
        className={`fixed top-0 z-50`}
        style={{ width }}
        animate={
          isNavOpened
            ? {
                height: "100vh",
                transition: { duration: 0 },
              }
            : undefined
        }
        transition={{ duration: 1 }}
      >
        <AnimatePresence>
          {isNavOpened && (
            <motion.div
              className="absolute right-0 top-0 -z-10 h-full w-full bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            />
          )}
        </AnimatePresence>

        {children}
      </MotionContainer>
    </>
  );
};

export default HeaderContainer;
