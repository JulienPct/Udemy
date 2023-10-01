"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
    {
        icon: Layout,
        label: "Tableau de bord",
        href: "/"
    },
    {
        icon: Compass,
        label: "Rechercher",
        href: "/search"
    }
];

const teacherRoutes = [
    {
        icon: List,
        label: "Cours",
        href: "/teacher/courses"
    },
    {
        icon: BarChart,
        label: "Statistiques",
        href: "/teacher/analytics"
    }
];

const SidebarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher");

    const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
        {routes.map((route, index) => (
            <SidebarItem 
                key={route.href}
                {...route}
            />
        ))}
    </div>
  );
};

export default SidebarRoutes;
