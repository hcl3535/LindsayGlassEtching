import type { Metadata } from "next";
import localFont from "next/font/local"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lindsay Glass Etching",
  description: "Custom etched glasses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden" >{children}</body>
    </html>
  );
}
