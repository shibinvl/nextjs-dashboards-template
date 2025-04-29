import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  isPositive, 
  icon, 
  color = "primary" 
}: StatsCardProps) {
  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardBody className="overflow-hidden relative">
        <div className="flex justify-between">
          <div className="z-10">
            <p className="text-small font-medium text-default-600">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
            <div className="flex items-center gap-1 mt-2">
              <Icon
                icon={isPositive ? "lucide:trending-up" : "lucide:trending-down"}
                className={isPositive ? "text-success" : "text-danger"}
              />
              <span className={`text-small ${isPositive ? "text-success" : "text-danger"} font-medium`}>
                {change}
              </span>
            </div>
          </div>
          <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-${color}-500 text-white`}>
            <Icon icon={icon} className="text-2xl" />
          </div>
        </div>
        <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10 bg-${color}-500`}></div>
      </CardBody>
    </Card>
  );
}