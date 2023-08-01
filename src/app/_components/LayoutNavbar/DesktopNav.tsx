"use client";

import React, { useEffect, useState } from "react";
import { type AnimatorNode, type AnimatorProxy } from "./hooks";
import NavItem from "./NavItem";
import { type NavLinkData } from "../links";
import { AnimatePresence } from "framer-motion";

type DesktopNavProps = {
  links: NavLinkData[];
  animator: AnimatorProxy;
};

const DesktopNav: React.FC<DesktopNavProps> = ({ links, animator }) => {
  const [nodes, setNodes] = useState<AnimatorNode[]>(animator.nodes);

  useEffect(() => animator.on("nodesChange", setNodes), [animator]);

  return (
    <div>
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
            />
          ))}
      </AnimatePresence>
    </div>
  );
};

export default DesktopNav;
