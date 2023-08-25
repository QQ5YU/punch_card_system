import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useRoutes() {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "員工管理",
        href: "/employeeManagement",
        active: pathname === "/employeeManagement",
      },
      {
        label: "打卡紀錄管理",
        href: "/recordsSearch",
        active: pathname.startsWith("/recordsSearch"),
      },
      {
        label: "設定",
        href: "/recordsSearch",
        active: pathname.startsWith("/recordsSearch"),
      },
    ],
    [pathname]
  );
  return routes;
};
