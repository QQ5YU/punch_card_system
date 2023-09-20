import type { Metadata } from "next";
import Header from "../components/LoginHeader";
import Footer from "../components/LoginFooter";
import "./login.css";

export const metadata: Metadata = {
  title: "Line@ 打卡後臺管理系統 登入",
  description: "打卡後臺管理系統",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
