"use client";

import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
 Users,
 Calendar,
 ChefHat,
 TrendingUp,
 Clock,
 AlertCircle,
 Plus,
 MessageSquare,
 BarChart3,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
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

 return (
  <div className="space-y-6">
   {/* Header */}
   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
    <div>
     <h1 className="text-3xl font-bold text-gray-900">
      Good morning, Amina! 👋
     </h1>
     <p className="text-gray-600 mt-1">
      Here&apos;s what&apos;s happening with your practice today
     </p>
    </div>
    <div className="flex gap-3">
     <Link href="/clients/new">
      <Button className="bg-[#1B5E20] hover:bg-[#2E7D32]">
       <Plus className="w-4 h-4 mr-2" />
       Add Client
      </Button>
     </Link>
     <Link href="/meal-plans/new">
      <Button
       variant="outline"
       className="border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white bg-transparent"
      >
       <ChefHat className="w-4 h-4 mr-2" />
       Create Meal Plan
      </Button>
     </Link>
    </div>
   </div>

   {/* Stats Grid */}
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

   <div className="grid lg:grid-cols-3 gap-6">
    {/* Recent Clients */}
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

    {/* Today's Schedule */}
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
      <Link href="/appointments">
       <Button variant="outline" className="w-full mt-4 bg-transparent">
        <Calendar className="w-4 h-4 mr-2" />
        View Full Calendar
       </Button>
      </Link>
     </CardContent>
    </Card>
   </div>

   {/* Quick Actions & Alerts */}
   <div className="grid md:grid-cols-2 gap-6">
    <Card>
     <CardHeader>
      <CardTitle>Quick Actions</CardTitle>
      <CardDescription>
       Common tasks to streamline your workflow
      </CardDescription>
     </CardHeader>
     <CardContent>
      <div className="grid grid-cols-2 gap-3">
       <Link href="/clients/new">
        <Button
         variant="outline"
         className="w-full justify-start bg-transparent"
        >
         <Users className="w-4 h-4 mr-2" />
         Add Client
        </Button>
       </Link>
       <Link href="/appointments/new">
        <Button
         variant="outline"
         className="w-full justify-start bg-transparent"
        >
         <Calendar className="w-4 h-4 mr-2" />
         Schedule
        </Button>
       </Link>
       <Link href="/meal-plans/templates">
        <Button
         variant="outline"
         className="w-full justify-start bg-transparent"
        >
         <ChefHat className="w-4 h-4 mr-2" />
         Templates
        </Button>
       </Link>
       <Link href="/messages">
        <Button
         variant="outline"
         className="w-full justify-start bg-transparent"
        >
         <MessageSquare className="w-4 h-4 mr-2" />
         Messages
        </Button>
       </Link>
      </div>
     </CardContent>
    </Card>

    <Card>
     <CardHeader>
      <CardTitle className="flex items-center">
       <AlertCircle className="w-5 h-5 mr-2 text-orange-500" />
       Alerts & Reminders
      </CardTitle>
     </CardHeader>
     <CardContent>
      <div className="space-y-3">
       <div className="flex items-start space-x-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
        <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5" />
        <div>
         <p className="text-sm font-medium text-orange-800">
          3 clients haven&apos;t logged meals
         </p>
         <p className="text-xs text-orange-600">Send reminder messages</p>
        </div>
       </div>
       <div className="flex items-start space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <BarChart3 className="w-4 h-4 text-blue-500 mt-0.5" />
        <div>
         <p className="text-sm font-medium text-blue-800">
          Weekly report ready
         </p>
         <p className="text-xs text-blue-600">Review client progress data</p>
        </div>
       </div>
       <div className="flex items-start space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
        <Users className="w-4 h-4 text-green-500 mt-0.5" />
        <div>
         <p className="text-sm font-medium text-green-800">
          5 new client inquiries
         </p>
         <p className="text-xs text-green-600">Schedule consultations</p>
        </div>
       </div>
      </div>
     </CardContent>
    </Card>
   </div>
  </div>
 );
}
