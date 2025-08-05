"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChefHat, Users } from "lucide-react";
import { TrendingUp } from "lucide-react";

const stats = [
 {
  title: "Active Clients",
  value: "47",
  change: "+12%",
  icon: Users,
  color: "text-blue-600",
 },
 {
  title: "Today's Appointments",
  value: "8",
  change: "3 pending",
  icon: Calendar,
  color: "text-green-600",
 },
 {
  title: "Meal Plans Created",
  value: "23",
  change: "This week",
  icon: ChefHat,
  color: "text-orange-600",
 },
 {
  title: "Client Engagement",
  value: "89%",
  change: "+5%",
  icon: TrendingUp,
  color: "text-purple-600",
 },
];

export default function StatsGrid() {
 return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
   {stats.map((stat, index) => (
    <Card key={index} className="hover:shadow-md transition-shadow">
     <CardContent className="p-6">
      <div className="flex items-center justify-between">
       <div>
        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
        <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
       </div>
       <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
        <stat.icon className="w-6 h-6" />
       </div>
      </div>
     </CardContent>
    </Card>
   ))}
  </div>
 );
}
