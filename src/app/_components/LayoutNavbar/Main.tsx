"use client";

import { useViewportSize } from "@mantine/hooks";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LayoutContext } from "./contexts";
import { type AnimatorNode, type AnimatorProxy } from "./hooks";

type MainProps = React.PropsWithChildren<{
  animator: AnimatorProxy;
}>;

const Main: React.FC<MainProps> = ({ animator, children }) => {
  const viewport = useViewportSize();
  const pathname = usePathname();

  const [linksAmount, setLinksAmount] = useState(0);
  const [leftLinksAmount, setLeftLinksAmount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const listener = (nodes: AnimatorNode[]) => {
      setLinksAmount(nodes.filter((node) => !node.data.hide).length);
      setLeftLinksAmount(
        nodes.filter((node) => node.data.side === "left" && !node.data.hide)
          .length,
      );
    };

    listener(animator.nodes);
    return animator.on("nodesChange", listener);
  }, [animator]);

  useEffect(
    () => animator.on("animateStateChange", setIsAnimating),
    [animator],
  );

  const width =
    viewport.width < 768
      ? "100vw"
      : viewport.width - linksAmount * viewport.width * 0.09;

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0 }}
      animate={!isAnimating ? { opacity: 1 } : undefined}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="pt-24"
      style={{
        width,
        marginLeft:
          viewport.width < 768 ? 0 : leftLinksAmount * viewport.width * 0.09,
      }}
    >
      <LayoutContext.Provider value={{ width }}>
        {children}
      </LayoutContext.Provider>
    </motion.main>
  );
};

export default Main;
