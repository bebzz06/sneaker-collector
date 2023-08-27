import localFont from "next/font/local";

export const boxing = localFont({
  src: "./Boxing-Regular.otf",
  variable: "--font-boxing",
});
export const excon = localFont({
  src: [
    {
      path: "./Excon-Regular.otf",
    },
    {
      path: "./Excon-Medium.otf",
    },
    {
      path: "./Excon-Bold.otf",
    },
  ],
  variable: "--font-excon",
});
