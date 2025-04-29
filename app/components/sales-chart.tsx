import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", sales: 4000, revenue: 2400, profit: 2000 },
  { month: "Feb", sales: 3000, revenue: 1398, profit: 1800 },
  { month: "Mar", sales: 2000, revenue: 9800, profit: 2200 },
  { month: "Apr", sales: 2780, revenue: 3908, profit: 2500 },
  { month: "May", sales: 1890, revenue: 4800, profit: 2100 },
  { month: "Jun", sales: 2390, revenue: 3800, profit: 2400 },
  { month: "Jul", sales: 3490, revenue: 4300, profit: 2800 },
];

export function SalesChart() {
  return (
    <Card className="h-[400px] border-none shadow-md">
      <CardHeader className="flex justify-between items-center border-b border-default-100">
        <div>
          <h4 className="text-large font-bold text-primary-600">Sales Overview</h4>
          <p className="text-small text-default-500">Monthly performance metrics</p>
        </div>
      </CardHeader>
      <CardBody>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fill: '#888888' }} />
            <YAxis tick={{ fill: '#888888' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                borderRadius: '8px',
                boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
                border: 'none'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#0072ff" 
              strokeWidth={3} 
              dot={{ r: 4, fill: "#0072ff", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#0072ff", stroke: "#ffffff", strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#9623ff" 
              strokeWidth={3} 
              dot={{ r: 4, fill: "#9623ff", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#9623ff", stroke: "#ffffff", strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="profit" 
              stroke="#19d769" 
              strokeWidth={3} 
              dot={{ r: 4, fill: "#19d769", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#19d769", stroke: "#ffffff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
}