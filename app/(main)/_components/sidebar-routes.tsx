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
    title: "master",
    items: [
      { icon: List, label: "Products", href: "/products" },
      { icon: User, label: "Users", href: "/users" },
      { icon: Contact, label: "Customers", href: "/customers" },
      { icon: Factory, label: "Suppliers", href: "/suppliers" },
      { icon: Banknote, label: "Banks", href: "/banks" },
    ],
  },
  {
    title: "purchases",
    items: [
      { icon: ShoppingBag, label: "Purchase", href: "/purchases" },
      { icon: Box, label: "Receives", href: "/receives" },
    ],
  },
  {
    title: "sales",
    items: [
      { icon: BadgeDollarSign, label: "Sales", href: "/sales" },
      { icon: Truck, label: "Deliveries", href: "/deliveries" },
    ],
  },
  {
    title: "finances",
    items: [
      { icon: ArrowLeftRight, label: "Cash", href: "/cash" },
      { icon: TrendingUp, label: "Ac. Receivable", href: "/receivables" },
      { icon: TrendingDown, label: "Ac. Payable", href: "/payables" },
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
      {
        icon: BadgeDollarSign,
        label: "Transactions",
        href: "/analytics/transactions",
      },
      { icon: TrendingUp, label: "Revenues", href: "/analytics/revenues" },
      { icon: TrendingDown, label: "Costs", href: "/analytics/costs" },
      { icon: LucideBoxes, label: "Products", href: "/analytics/products" },
      { icon: LucideUsers, label: "Customer", href: "/analytics/customers" },
      {
        icon: FileClock,
        label: "Event Log",
        href: "/analytics/logs",
      },
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
