"use client";
import React from "react";

import { StatsCard } from "../components/stats-card";

export default function App() {
  return (
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
  );
}
