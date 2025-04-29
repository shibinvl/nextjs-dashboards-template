"use client";
import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ProfileActions } from "./profile-action";
import { usePathname } from "next/navigation";

const navigationItems = [
  { name: "Dashboard", icon: "lucide:layout-dashboard", href: "#" },
  { name: "Analytics", icon: "lucide:bar-chart", href: "#" },
  { name: "Customers", icon: "lucide:users", href: "#" },
  
];

interface SidebarNavigationProps {
  isDarkTheme: boolean;
  onThemeToggle: () => void;
}

export function SidebarNavigation({
  isDarkTheme,
  onThemeToggle,
}: SidebarNavigationProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen bg-default-100 overflow-hidden">
      {/* Sticky Logo Section */}
      <div className="sticky top-0 z-20 bg-default-100 px-4 py-6">
        <div className="flex items-center gap-2">
          <div className="bg-primary-500 rounded-full p-2">
            <Icon icon="lucide:boxes" className="text-2xl text-white" />
          </div>
          <span className="font-bold text-xl text-primary-500">Dashboard</span>
        </div>
      </div>

      {/* Scrollable Nav Items */}
      <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all
              ${
                pathname === item.href
                  ? "bg-primary-500/10 border-primary-300 text-primary-700"
                  : "border-default-200 hover:bg-primary-500/10 hover:border-primary-300"
              }`}
          >
            <Icon
              icon={item.icon}
              className={`text-xl ${
                pathname === item.href ? "text-primary-600" : "text-primary-500"
              }`}
            />
            <span
              className={`font-medium ${
                pathname === item.href ? "text-primary-700" : "text-default-800"
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Sticky Bottom ProfileActions */}
      <div className="sticky bottom-0 z-20 bg-default-100 border-t border-default-200 px-4 py-4 lg:hidden">
        <ProfileActions
          isDarkTheme={isDarkTheme}
          onThemeToggle={onThemeToggle}
        />
      </div>
    </div>
  );
}
