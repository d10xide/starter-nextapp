import { LucideIcon } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { useState } from "react";

interface SidebarChildProps {
  route: {
    title: string;
    items: { icon: LucideIcon; label: string; href: string }[];
  };
}

const SidebarChild = ({ route }: SidebarChildProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="flex flex-col w-full cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h1 className="px-6 py-2 uppercase text-xs font-semibold text-muted-foreground items-center">
        {route.title}
      </h1>
      {isOpen && (
        <div className="flex flex-col">
          {route.items.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarChild;
