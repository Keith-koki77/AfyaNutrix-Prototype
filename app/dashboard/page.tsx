"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Calendar, ChefHat, MessageSquare, TrendingUp, Clock, Plus, ArrowRight } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Clients",
      value: "24",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Appointments Today",
      value: "8",
      change: "+3",
      icon: Calendar,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Active Meal Plans",
      value: "18",
      change: "+5",
      icon: ChefHat,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      title: "Unread Messages",
      value: "12",
      change: "+7",
      icon: MessageSquare,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  const recentAppointments = [
    {
      id: 1,
      client: "Sarah Johnson",
      time: "10:00 AM",
      type: "Initial Consultation",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 2,
      client: "Michael Chen",
      time: "11:30 AM",
      type: "Follow-up",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 3,
      client: "Emma Wilson",
      time: "2:00 PM",
      type: "Meal Plan Review",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 4,
      client: "David Brown",
      time: "3:30 PM",
      type: "Progress Check",
      avatar: "/placeholder-user.jpg",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      action: "New client registered",
      client: "Lisa Anderson",
      time: "2 hours ago",
      type: "client",
    },
    {
      id: 2,
      action: "Meal plan updated",
      client: "John Smith",
      time: "4 hours ago",
      type: "meal-plan",
    },
    {
      id: 3,
      action: "Appointment scheduled",
      client: "Maria Garcia",
      time: "6 hours ago",
      type: "appointment",
    },
    {
      id: 4,
      action: "Progress photo uploaded",
      client: "Robert Taylor",
      time: "8 hours ago",
      type: "progress",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, Amina! Here's what's happening today.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Appointment
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Client
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">{stat.change}</span>
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Appointments */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Today's Appointments</CardTitle>
                <CardDescription>You have {recentAppointments.length} appointments scheduled</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Avatar>
                    <AvatarImage src={appointment.avatar || "/placeholder.svg"} alt={appointment.client} />
                    <AvatarFallback>
                      {appointment.client
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{appointment.client}</p>
                    <p className="text-sm text-gray-600">{appointment.type}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900">{appointment.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your practice</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === "client"
                          ? "bg-blue-100"
                          : activity.type === "meal-plan"
                            ? "bg-orange-100"
                            : activity.type === "appointment"
                              ? "bg-green-100"
                              : "bg-purple-100"
                      }`}
                    >
                      {activity.type === "client" && <Users className="w-4 h-4 text-blue-600" />}
                      {activity.type === "meal-plan" && <ChefHat className="w-4 h-4 text-orange-600" />}
                      {activity.type === "appointment" && <Calendar className="w-4 h-4 text-green-600" />}
                      {activity.type === "progress" && <TrendingUp className="w-4 h-4 text-purple-600" />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.action}</span> for{" "}
                      <span className="font-medium text-[#1B5E20]">{activity.client}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks to help you manage your practice</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Users className="w-6 h-6" />
              <span>Add New Client</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <ChefHat className="w-6 h-6" />
              <span>Create Meal Plan</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Calendar className="w-6 h-6" />
              <span>Schedule Appointment</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
