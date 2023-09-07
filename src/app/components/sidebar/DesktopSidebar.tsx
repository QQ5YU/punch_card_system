import useRoutes from "@/app/hooks/useRoutes";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

export default function DesktopSidebar() {
  const routes = useRoutes();
  return (
    <aside className="hidden md:block w-[15vw] bg-[#FBFBFB] min-h-screen relative outline outline-2 outline-gray-200">
      <header className="flex justify-center bg-[#FFF] py-[35px] mx-[0px] outline outline-2 outline-gray-200">
      <Image className="mx-[2px]" src="/images/logo.svg" width={30} height={30} alt="logo" />
      <h1 className="mt-[3px] text-[18px] text-mainBlue font-bold">
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
