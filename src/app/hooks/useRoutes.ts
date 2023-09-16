import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useRoutes() {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        src: "/images/sideBar/user.svg",
        label: "員工管理",
        href: "/employeeManagement",
        active: pathname === "/employeeManagement",
      },
      {
        src: "/images/sideBar/management.svg",
        label: "打卡紀錄管理",
        href: "/recordManagement",
        active: pathname.startsWith("/recordManagement"),
      },
      {
        src: "/images/sideBar/setting.svg",
        label: "設定",
        href: "/recordManagement",
        active: pathname.startsWith("/recordManagement1"),
      },
    ],
    [pathname]
  );
  return routes;
};
