"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/user-button";
import getCurrentUser from "@/lib/get-current-user";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarRoutes = () => {
  const pathname = usePathname();

  const isAnalyticPage = pathname?.startsWith("/analytics");
  const isUserPage = pathname?.includes("/user");

  return (
    <div className="flex gap-x-2 items-center ml-auto">
      {isAnalyticPage ? (
        <Link href="/">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/analytics/dashboard">
          <Button size="sm" variant="ghost">
            Analytics
          </Button>
        </Link>
      )}
      
      <ModeToggle />
      <UserButton />
    </div>
  );
};

export default NavbarRoutes;
