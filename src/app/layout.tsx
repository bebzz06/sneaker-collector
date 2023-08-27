import "@/globals.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { boxing, excon } from "@/fonts/fonts";

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
      <body className={`${boxing.variable} ${excon.variable}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
