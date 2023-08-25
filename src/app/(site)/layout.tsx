"use client";

import type { Metadata } from "next";
import DesktopSidebar from "../components/sidebar/DesktopSidebar";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Line@ 打卡後臺管理系統",
  description: "打卡後臺管理系統",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <DesktopSidebar />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
