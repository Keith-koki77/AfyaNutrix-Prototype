"use client";

import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Clock } from "lucide-react";

const upcomingAppointments = [
 {
  time: "10:00 AM",
  client: "Sarah Njeri",
  type: "Follow-up",
  status: "confirmed",
 },
 {
  time: "2:00 PM",
  client: "David Ochieng",
  type: "Initial Consultation",
  status: "pending",
 },
 {
  time: "4:30 PM",
  client: "Faith Akinyi",
  type: "Meal Plan Review",
  status: "confirmed",
 },
];

export default function DashboardLatestSchedule() {
 return (
  <Card>
   <CardHeader>
    <CardTitle className="flex items-center">
     <Clock className="w-5 h-5 mr-2 text-[#1B5E20]" />
     Today&apos;s Schedule
    </CardTitle>
    <CardDescription>Upcoming appointments</CardDescription>
   </CardHeader>
   <CardContent>
    <div className="space-y-3">
     {upcomingAppointments.map((appointment, index) => (
      <div
       key={index}
       className="flex items-center justify-between p-3 border rounded-lg"
      >
       <div>
        <p className="font-medium text-gray-900">{appointment.time}</p>
        <p className="text-sm text-gray-600">{appointment.client}</p>
        <p className="text-xs text-gray-500">{appointment.type}</p>
       </div>
       <Badge
        variant={appointment.status === "confirmed" ? "default" : "secondary"}
       >
        {appointment.status}
       </Badge>
      </div>
     ))}
    </div>
    <Link
     href="/appointments"
     className="flex items-center justify-center w-full mt-4 bg-transparent"
    >
     <span>View Full Calendar</span>
     {/* <Calendar className="w-4 h-4 mr-2" /> */}
    </Link>
   </CardContent>
  </Card>
 );
}
