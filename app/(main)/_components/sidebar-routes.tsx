"use client";

import {
  ArrowLeftRight,
  BadgeDollarSign,
  Banknote,
  BarChart,
  Bell,
  Box,
  Compass,
  Contact,
  Factory,
  FileClock,
  Layout,
  List,
  LucideBoxes,
  LucideUsers,
  Printer,
  ShoppingBag,
  TrendingDown,
  TrendingUp,
  Truck,
  User,
} from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";
import SidebarChild from "./sidebar-child";
import { useCallback, useState } from "react";

const userRoutes = [
  {
    title: "analytics",
    items: [{ icon: Layout, label: "Dashboard", href: "/dashboard" }],
  },
  {
    title: "parent1",
    items: [
      { icon: List, label: "Menu 1", href: "/menu1" },
      { icon: List, label: "Menu 2", href: "/menu2" },
      { icon: List, label: "Menu 3", href: "/menu3" },
    ],
  },
  {
    title: "parent2",
    items: [
      { icon: List, label: "Menu 4", href: "/menu4" },
      { icon: List, label: "Menu 5", href: "/menu5" },
      { icon: List, label: "Menu 6", href: "/menu6" },
    ],
  },
  {
    title: "parent3",
    items: [
      { icon: List, label: "Menu 7", href: "/menu7" },
      { icon: List, label: "Menu 8", href: "/menu8" },
      { icon: List, label: "Menu 9", href: "/menu9" },
    ],
  },

  {
    title: "monitoring",
    items: [{ icon: Printer, label: "Reports", href: "/reports" }],
  },
];

const analyticRoutes = [
  {
    title: "analytics",
    items: [
      { icon: BarChart, label: "Analytics", href: "/analytics/dashboard" },
    ],
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();

  const isAnalyticPage = pathname?.includes("/analytics");

  let routes = isAnalyticPage ? analyticRoutes : userRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        // <SidebarChild key={route.title} route={route} />
        <div key={route.title} className="flex flex-col w-full">
          <h1 className="px-6 py-2 uppercase text-xs font-semibold text-muted-foreground items-center">
            {route.title}
          </h1>
          {route.items.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SidebarRoutes;
