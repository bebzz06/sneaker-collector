import localFont from "next/font/local";

export const boxing = localFont({
  src: "./Boxing-Regular.otf",
  variable: "--font-boxing",
});
export const excon = localFont({
  src: [
    {
      path: "./Excon-Regular.otf",
      weight: "400",
    },
    {
      path: "./Excon-Medium.otf",
      weight: "500",
    },
    {
      path: "./Excon-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-excon",
});
