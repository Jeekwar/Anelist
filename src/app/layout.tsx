import Header from "@/src/component/Header";
import type { Metadata } from "next";
import Footer from "@/src/component/Footer";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "AneList",
  description: "List of anime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
