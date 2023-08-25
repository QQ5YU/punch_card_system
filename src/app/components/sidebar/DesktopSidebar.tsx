import useRoutes from "@/app/hooks/useRoutes";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

export default function DesktopSidebar() {
  const routes = useRoutes();
  return (
    <aside className="hidden md:block w-1/3 min-w-[330px] max-w-[360px] bg-[#FBFBFB] min-h-screen relative">
      <header className="flex items-center py-[43px]  mx-[44px]">
        <Image src="/images/logo.svg" width={55} height={55} alt="logo" />
        <h1 className=" ml-2 text-2xl text-mainBlue font-bold">
          金屬工業發展研究中心
        </h1>
      </header>
      {routes.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={
            link.active
              ? "text-mainBlue font-bold text-xl block ml-12 my-5"
              : "text-xl block ml-12 my-5 hover:opacity-70 transition-opacity"
          }
        >
          {link.label}
        </Link>
      ))}
      <Footer />
    </aside>
  );
}
