import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import mainBg from "/public/images/main-bg.jpg";
import Navbar from "./components/navbar";
import Icon from "./components/icon";
import Topbar from "./components/topbar";

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
    <html>
      <body>
        <div className="flex justify-center gap-10 bg-black relative">
          <Image
            src={mainBg}
            alt=""
            className="absolute z-0 w-full h-screen brightness-50"
          />
          <div className="hidden sm:block z-20">hi</div>
          <div className="flex flex-col w-full max-w-[380px] z-20 relative items-center min-h-screen bg-white">
            <Topbar />
            <div className="flex-grow">{children}</div>
            <div className="w-full bottom-0 left-0 z-50 flex items-center">
              <Navbar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
