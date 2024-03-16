import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import mainBg from "/public/images/main-bg.jpg";
import Navbar from "./components/user/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finger Crossed Fit",
  description: "Crossfit for everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="z-50 bg-white w-[500px] min-h-screen">{children}</div>
      </body>
    </html>
  );
}
