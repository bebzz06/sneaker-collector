import "globals.css";
import type { Metadata } from "next";
import { boxing, excon } from "assets/fonts/fonts";

export const metadata: Metadata = {
  title: "Sneaker Collector",
  description: "Create your sneaker collection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${boxing.variable} ${excon.variable}`}>{children}</body>
    </html>
  );
}
