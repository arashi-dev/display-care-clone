"use client";

import React, { useEffect, useRef, useState } from "react";
import { type AnimatorNode, type AnimatorProxy } from "./hooks";
import NavItem from "./NavItem";
import { type NavLinkData } from "../links";
import { AnimatePresence, motion } from "framer-motion";

type DesktopNavProps = {
  links: NavLinkData[];
  animator: AnimatorProxy;
};

const DesktopNav: React.FC<DesktopNavProps> = ({ links, animator }) => {
  const [nodes, setNodes] = useState<AnimatorNode[]>(animator.nodes);
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    isFirstRenderRef.current = false;
  }, []);

  useEffect(() => {
    setNodes(animator.nodes);
    animator.on("nodesChange", setNodes);
  }, [animator]);

  useEffect(() => {
    console.log(nodes);
  }, [nodes]);

  return (
    <AnimatePresence>
      <motion.div
        initial={isFirstRenderRef.current ? "initial" : false}
        animate="animate"
        transition={{ staggerChildren: 0.1 }}
      >
        <AnimatePresence>
          {nodes
            .filter(({ id }) => links.some((link) => link.id === id))
            .map((node) => (
              <NavItem
                key={node.id}
                link={links.find((link) => link.id === node.id)!}
                side={node.data.side}
                hide={node.data.hide}
                animator={animator}
                isFirstRender={isFirstRenderRef.current}
              />
            ))}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default DesktopNav;
