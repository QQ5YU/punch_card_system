"use client";
import type { Metadata } from "next";
import DesktopSidebar from "../components/DesktopSidebar";
import Header from "../components/SiteHeader";
import IndexBar from "@/app/components/IndexBar";
import ListContainer from "../components/ListContainer";
import Pages from "@/app/components/Pages";


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
          <div className="flex-col w-[85vw]">
            <Header />
            {children}
            <div className="mx-10">
              <IndexBar />
              <ListContainer />
              <Pages />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
