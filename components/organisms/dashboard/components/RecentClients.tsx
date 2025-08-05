"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

const recentClients = [
 {
  name: "Grace Mwangi",
  status: "Active",
  lastSeen: "2 hours ago",
  progress: 85,
  goal: "Weight Loss",
 },
 {
  name: "John Kamau",
  status: "Pending",
  lastSeen: "1 day ago",
  progress: 45,
  goal: "Diabetes Management",
 },
 {
  name: "Mary Wanjiku",
  status: "Active",
  lastSeen: "30 minutes ago",
  progress: 92,
  goal: "Muscle Gain",
 },
];

export default function RecentClients() {
 return (
  <Card className="lg:col-span-2">
   <CardHeader className="flex flex-row items-center justify-between">
    <div>
     <CardTitle>Recent Clients</CardTitle>
     <CardDescription>
      Track your clients&apos; progress and engagement
     </CardDescription>
    </div>
    <Link href="/clients">
     <Button variant="outline" size="sm">
      View All
     </Button>
    </Link>
   </CardHeader>
   <CardContent>
    <div className="space-y-4">
     {recentClients.map((client, index) => (
      <div
       key={index}
       className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
      >
       <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-[#1B5E20] rounded-full flex items-center justify-center text-white font-medium">
         {client.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
        </div>
        <div>
         <p className="font-medium text-gray-900">{client.name}</p>
         <p className="text-sm text-gray-500">
          {client.goal} • {client.lastSeen}
         </p>
        </div>
       </div>
       <div className="flex items-center space-x-3">
        <div className="text-right">
         <p className="text-sm font-medium">{client.progress}%</p>
         <Progress value={client.progress} className="w-20 h-2" />
        </div>
        <Badge variant={client.status === "Active" ? "default" : "secondary"}>
         {client.status}
        </Badge>
       </div>
      </div>
     ))}
    </div>
   </CardContent>
  </Card>
 );
}
