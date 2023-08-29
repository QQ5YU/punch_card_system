import useRoutes from "@/app/hooks/useRoutes";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

export default function DesktopSidebar() {
  const routes = useRoutes();
  return (
    <aside className="hidden md:block w-1/3 min-w-[200px] max-w-[240px] bg-[#FBFBFB] min-h-screen relative outline outline-2 outline-gray-200">
      <header className="flex bg-[#FFF] py-[35px] mx-[0px] outline outline-2 outline-gray-200">
        <Image className="mx-[10px]" src="/images/logo.svg" width={30} height={30} alt="logo" />
        <h1 className=" text-[18px] text-mainBlue font-bold">
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
