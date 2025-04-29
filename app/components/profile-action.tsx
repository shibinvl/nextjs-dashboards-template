'use client';

import React from "react";
import { Avatar, Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Switch } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ProfileActionsProps {
  isDarkTheme: boolean;
  onThemeToggle: () => void;
}

export function ProfileActions({ isDarkTheme, onThemeToggle }: ProfileActionsProps) {
  return (
    <div className="flex justify-between gap-4">
      {/* Theme toggle */}
      <div className="flex items-center gap-2">
        <Icon icon="lucide:sun" className={`text-lg ${!isDarkTheme ? "text-primary-500" : "text-default-500"}`} />
        <Switch
          size="sm"
          color="primary"
          isSelected={isDarkTheme}
          onValueChange={onThemeToggle}
        />
        <Icon icon="lucide:moon" className={`text-lg ${isDarkTheme ? "text-primary-500" : "text-default-500"}`} />
      </div>

      {/* Notification and Mail Badges */}
      <Badge content="5" color="danger">
        <Button isIconOnly variant="flat" className="text-default-500">
          <Icon icon="lucide:bell" className="text-xl" />
        </Button>
      </Badge>

      <Badge content="3" color="primary">
        <Button isIconOnly variant="flat" className="text-default-500">
          <Icon icon="lucide:mail" className="text-xl" />
        </Button>
      </Badge>

      {/* Avatar Dropdown */}
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            color="primary"
            as="button"
            src="https://img.heroui.chat/image/avatar?w=200&h=200&u=42"
            className="w-9 h-9"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile menu" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">john@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team">Team Settings</DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
