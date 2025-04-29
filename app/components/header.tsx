'use client';

import React from "react";
import {
  Button,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { ProfileActions } from "./profile-action";

interface HeaderProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
  onThemeToggle?: () => void;
  isDarkTheme?: boolean;
}

export function Header({
  onMenuClick,
  showMenuButton = false,
  onThemeToggle,
  isDarkTheme = false,
}: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-content1 shadow-sm">
      <div className="flex items-center gap-3">
        {showMenuButton && (
          <Button
            isIconOnly
            variant="flat"
            color="primary"
            className="md:hidden"
            onPress={onMenuClick}
          >
            <Icon icon="lucide:menu" className="text-xl" />
          </Button>
        )}

        <div className="flex items-center gap-2 lg:hidden">
          <div className="bg-gradient-to-r from-primary-400 to-primary-600 rounded-full p-2">
            <Icon icon="lucide:boxes" className="text-xl text-white" />
          </div>
          <span className="font-bold text-xl text-primary-500">Dashboard</span>
        </div>
      </div>

      {/* Controls visible on desktop only */}
      <div className="hidden md:flex items-center gap-4">
  <ProfileActions isDarkTheme={isDarkTheme} onThemeToggle={onThemeToggle ?? (() => {})} />
</div>
    </header>
  );
}
