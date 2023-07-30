import { ArrowLeft, Book1, MagicStar, Sun1 } from "iconsax-react";
import { type Icon } from "iconsax-react";
import type Link from "next/link";

export type NavLinkColors = "lightSalmon" | "rose" | "mediumPurple" | "green"

export type NavLinkData = {
  id: string;
  href: React.ComponentProps<typeof Link>["href"];
  label: string;
  iconComponent?: Icon;
  color: NavLinkColors;
};

export const AboutLink: NavLinkData = {
  id: "1",
  color: "mediumPurple",
  iconComponent: MagicStar,
  label: "About",
  href: "/",
};

export const HomeLink: NavLinkData = {
  id: "2",
  color: "mediumPurple",
  iconComponent: MagicStar,
  label: "Home",
  href: "/",
};

export const ResourcesLink: NavLinkData = {
  id: "3",
  color: "rose",
  iconComponent: Book1,
  label: "Resources",
  href: "/resources",
};

export const WorksLink: NavLinkData = {
  id: "4",
  color: "lightSalmon",
  iconComponent: Sun1,
  label: "Works",
  href: "/works",
};

export const BackToWorksLink: NavLinkData = {
  id: ResourcesLink.id,
  href: WorksLink.href,
  iconComponent: ArrowLeft,
  label: "Back",
  color: "rose",
};

export const ContactLink: NavLinkData = {
  id: "5",
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