"use client";
import React from "react";

import { Drawer, DrawerContent, DrawerBody } from "@heroui/react";
import { Header } from "./components/header";
import { SalesChart } from "./components/sales-chart";
import { SidebarNavigation } from "./components/sidebar-navigation";
import { StatsCard } from "./components/stats-card";
import { useTheme } from "./hooks/use-theme";
import { motion } from "framer-motion";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex h-screen bg-background">
      <aside className="hidden md:block w-64 border-r bg-default-100">
        <SidebarNavigation
          isDarkTheme={isDark}
          onThemeToggle={toggleTheme}
        />

      </aside>

      <Drawer
        isOpen={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
        placement="left"
        radius="none"
      >
        <DrawerContent>
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full"
          >

            <DrawerBody className="p-0">
              <SidebarNavigation
                isDarkTheme={isDark}
                onThemeToggle={toggleTheme}
              />

            </DrawerBody>
          </motion.div>
        </DrawerContent>
      </Drawer>

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header
          onMenuClick={() => setIsSidebarOpen(true)}
          showMenuButton={true}
          onThemeToggle={toggleTheme}
          isDarkTheme={isDark}
        />

        <div className="flex-1 overflow-auto p-6 bg-default-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatsCard
              title="Total Revenue"
              value="$45,231"
              change="+20.1% from last month"
              isPositive={true}
              icon="lucide:dollar-sign"
              color="primary"
            />
            <StatsCard
              title="Active Users"
              value="1,234"
              change="+12.5% from last month"
              isPositive={true}
              icon="lucide:users"
              color="secondary"
            />
            <StatsCard
              title="New Orders"
              value="450"
              change="-3.4% from last month"
              isPositive={false}
              icon="lucide:shopping-cart"
              color="danger"
            />
            <StatsCard
              title="Conversion Rate"
              value="2.4%"
              change="+4.1% from last month"
              isPositive={true}
              icon="lucide:percent"
              color="success"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <SalesChart />
            <SalesChart />
          </div>
        </div>
      </main>
    </div>
  );
}