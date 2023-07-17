import localFont from "next/font/local";

export const giselle = localFont({
  src: [
    {
      path: "./FHGiselle-Regular.woff2",
      weight: "400",
    },
    {
      path: "./FHGiselle-Medium.woff2",
      weight: "600",
    },
    {
      path: "./FHGiselle-Bold.woff2",
      weight: "600",
    },
  ],
  fallback: ["Times New Roman", "serif"],
  display: "swap",
  variable: "--font-giselle",
});

export const gilroy = localFont({
  src: [
    {
      path: "./Gilroy-Medium.woff2",
      weight: "600",
    },
    {
      path: "./Gilroy-Bold.woff2",
      weight: "800",
    },
  ],
  fallback: ["Helvetica", "sans-serif"],
  display: "swap",
  variable: "--font-gilroy",
});
