"use client";
import React from "react";

import { Drawer, DrawerContent } from "@heroui/react";

import { Header } from "../components/header";
import { SidebarNavigation } from "../components/sidebar-navigation";
import { useTheme } from "../hooks/use-theme";

export default function DashBoradLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex h-screen bg-background">
      <aside className="hidden md:block w-72 border-r bg-default-100">
        <SidebarNavigation isDarkTheme={isDark} onThemeToggle={toggleTheme} />
      </aside>

      <Drawer
        isOpen={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
        placement="left"
        radius="none"
        classNames={{ closeButton: "z-30 bg-primary-100 rounded " }}
      >
        <DrawerContent className="min-h-screen">
          <div className="flex-1 flex flex-col min-h-0">
            <SidebarNavigation
              isDarkTheme={isDark}
              onThemeToggle={toggleTheme}
            />
          </div>
        </DrawerContent>
      </Drawer>

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header
          onMenuClick={() => setIsSidebarOpen(true)}
          showMenuButton={true}
          onThemeToggle={toggleTheme}
          isDarkTheme={isDark}
        />

        <div className="flex-1 overflow-auto p-6 bg-default-50">{children}</div>
      </main>
    </div>
  );
}
