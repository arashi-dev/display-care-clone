import { Book1, MagicStar, Sun1 } from "iconsax-react";
import { type Icon } from "iconsax-react";
import type Link from "next/link";

export type NavLinkColors = "lightSalmon" | "rose" | "mediumPurple" | "green"

export type NavLinkData = {
  href: React.ComponentProps<typeof Link>["href"];
  label: string;
  iconComponent?: Icon;
  color: NavLinkColors;
};

export const AboutLink: NavLinkData = {
  color: "mediumPurple",
  iconComponent: MagicStar,
  label: "About",
  href: "/",
};

export const HomeLink: NavLinkData = {
  color: "mediumPurple",
  iconComponent: MagicStar,
  label: "Home",
  href: "/",
};

export const ResourcesLink: NavLinkData = {
  color: "rose",
  iconComponent: Book1,
  label: "Resources",
  href: "/resources",
};

export const WorksLink: NavLinkData = {
  color: "lightSalmon",
  iconComponent: Sun1,
  label: "Works",
  href: "/works",
};

export const ContactLink: NavLinkData = {
  color: "green",
  label: "Contact",
  href: "#",
};

export const bgVariants: Record<NavLinkColors, string> = {
  rose: "bg-rose-400",
  lightSalmon: "bg-light-salmon",
  mediumPurple: "bg-medium-purple",
  green: "bg-teal-500",
};

export const textVariants: Record<NavLinkColors, string> = {
  rose: "text-rose-400",
  lightSalmon: "text-light-salmon",
  mediumPurple: "text-medium-purple",
  green: "text-teal-500",
};