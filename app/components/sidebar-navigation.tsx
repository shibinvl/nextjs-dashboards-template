import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ProfileActions } from "./profile-action";
import { usePathname } from "next/navigation";

const navigationItems = [
  { name: "Dashboard", icon: "lucide:layout-dashboard", href: "#" },
  { name: "Analytics", icon: "lucide:bar-chart", href: "#" },
  { name: "Customers", icon: "lucide:users", href: "#" },
  { name: "Orders", icon: "lucide:shopping-cart", href: "#" },
  { name: "Settings", icon: "lucide:settings", href: "#" },
];


interface SidebarNavigationProps {
  isDarkTheme: boolean;
  onThemeToggle: () => void;
}

export function SidebarNavigation({ isDarkTheme, onThemeToggle }: SidebarNavigationProps) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2 p-4 h-full bg-default-100 border-r">
      {/* Logo in sidebar with better contrast */}
      <div className="flex items-center gap-2 px-2 py-6">
        <div className="bg-primary-500 rounded-full p-2">
          <Icon icon="lucide:boxes" className="text-2xl text-white" />
        </div>
        <span className="font-bold text-xl text-primary-500">Dashboard</span>
      </div>

      {/* Navigation items with better contrast */}
      <div className="flex flex-col gap-4 mt-6">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all
            ${pathname === item.href
                ? "bg-primary-500/10 border-primary-300 text-primary-700"
                : "border-default-200 hover:bg-primary-500/10 hover:border-primary-300"
              }`
            }
          >
            <Icon icon={item.icon} className={`text-xl ${pathname === item.href ? "text-primary-600" : "text-primary-500"}`} />
            <span className={`font-medium ${pathname === item.href ? "text-primary-700" : "text-default-800"}`}>
              {item.name}
            </span>
          </Link>

        ))}
      </div>
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-default-100 border-t border-default-200 p-4 z-50">
        <div className="flex flex-col items-center justify-center gap-4">
          <ProfileActions isDarkTheme={isDarkTheme} onThemeToggle={onThemeToggle} />
        </div>
      </div>

    </div>
  );
}