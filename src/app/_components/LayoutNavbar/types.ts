import { type Icon } from "iconsax-react";
import type Link from "next/link";

export type NavLinkData = {
  href: React.ComponentProps<typeof Link>["href"];
  label: string;
  iconComponent: Icon;
  color: "lightSalmon" | "rose" | "mediumPurple";
};
