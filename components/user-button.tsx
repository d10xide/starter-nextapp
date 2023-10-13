"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCallback, useState } from "react";
import MenuItem from "./menu-item";
import { Separator } from "./ui/separator";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import getCurrentUser from "@/lib/get-current-user";

const UserButton = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="flex items-center gap-2 px-2 py-1">
      <div className="text-sm font-semibold uppercase">
        {session?.user.name}
      </div>
      <Avatar onClick={toggleOpen} className="w-6 h-6">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-auto bg-slate-50 overflow-hidden right-5 top-16 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem
                onClick={() => {
                  toggleOpen();
                  router.push("/profile");
                }}
                label="Profile"
              />
              <MenuItem onClick={() => {}} label="Notification" />
              <MenuItem onClick={() => {}} label="Message" />
              <Separator />
              <MenuItem onClick={() => signOut()} label="Log Out" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserButton;
