import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Calendar, TrendingUp, DollarSign, Clock, CheckCircle, AlertCircle, Plus } from "lucide-react"

function DashboardContent() {
  const stats = [
    {
      title: "Total Clients",
      value: "124",
      change: "+12%",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "This Month Revenue",
      value: "$8,420",
      change: "+23%",
      changeType: "positive" as const,
      icon: DollarSign,
    },
    {
      title: "Appointments Today",
      value: "8",
      change: "+2",
      changeType: "positive" as const,
      icon: Calendar,
    },
    {
      title: "Success Rate",
      value: "94%",
      change: "+5%",
      changeType: "positive" as const,
      icon: TrendingUp,
    },
  ]

  const recentAppointments = [
    {
      id: 1,
      client: "Sarah Johnson",
      time: "9:00 AM",
      type: "Initial Consultation",
      status: "confirmed",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 2,
      client: "Mike Chen",
      time: "10:30 AM",
      type: "Follow-up",
      status: "confirmed",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 3,
      client: "Emma Davis",
      time: "2:00 PM",
      type: "Meal Plan Review",
      status: "pending",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 4,
      client: "John Smith",
      time: "3:30 PM",
      type: "Progress Check",
      status: "confirmed",
      avatar: "/placeholder-user.jpg",
    },
  ]

  const recentActivities = [
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
      client: "David Wilson",
      time: "4 hours ago",
      type: "meal-plan",
    },
    {
      id: 3,
      action: "Appointment completed",
      client: "Maria Garcia",
      time: "6 hours ago",
      type: "appointment",
    },
    {
      id: 4,
      action: "Payment received",
      client: "Robert Brown",
      time: "1 day ago",
      type: "payment",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, Dr. Sarah! Here's what's happening today.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Appointment
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="mr-1 h-3 w-3" />
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Today's Appointments
            </CardTitle>
            <CardDescription>You have {recentAppointments.length} appointments scheduled for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={appointment.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {appointment.client
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{appointment.client}</p>
                    <p className="text-sm text-gray-600">{appointment.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                  <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"} className="text-xs">
                    {appointment.status === "confirmed" ? (
                      <CheckCircle className="mr-1 h-3 w-3" />
                    ) : (
                      <Clock className="mr-1 h-3 w-3" />
                    )}
                    {appointment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest updates from your practice</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  {activity.type === "client" && <Users className="h-4 w-4 text-blue-500 mt-0.5" />}
                  {activity.type === "meal-plan" && <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />}
                  {activity.type === "appointment" && <Calendar className="h-4 w-4 text-purple-500 mt-0.5" />}
                  {activity.type === "payment" && <DollarSign className="h-4 w-4 text-yellow-500 mt-0.5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.client}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  )
}
