"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Plus, Video, MapPin } from "lucide-react"

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const appointments = [
    {
      id: 1,
      clientName: "Sarah Johnson",
      clientAvatar: "/placeholder-user.jpg",
      date: "2024-01-22",
      time: "09:00 AM",
      duration: "60 min",
      type: "Initial Consultation",
      status: "Confirmed",
      location: "Video Call",
      notes: "First session - discuss goals and dietary preferences",
    },
    {
      id: 2,
      clientName: "Michael Chen",
      clientAvatar: "/placeholder-user.jpg",
      date: "2024-01-22",
      time: "11:00 AM",
      duration: "45 min",
      type: "Follow-up",
      status: "Confirmed",
      location: "In-Person",
      notes: "Review progress and adjust meal plan",
    },
    {
      id: 3,
      clientName: "Emma Wilson",
      clientAvatar: "/placeholder-user.jpg",
      date: "2024-01-22",
      time: "02:00 PM",
      duration: "30 min",
      type: "Check-in",
      status: "Pending",
      location: "Video Call",
      notes: "Quick progress check and Q&A",
    },
  ]

  const upcomingAppointments = appointments.filter((apt) => apt.status === "Confirmed")
  const pendingAppointments = appointments.filter((apt) => apt.status === "Pending")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600 mt-2">Manage your client appointments</p>
        </div>
        <Button className="bg-[#1B5E20] hover:bg-[#2E7D32]">
          <Plus className="w-4 h-4 mr-2" />
          Schedule Appointment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Today's Schedule
              </CardTitle>
              <CardDescription>Monday, January 22, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={appointment.clientAvatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {appointment.clientName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-gray-900">{appointment.clientName}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {appointment.time} ({appointment.duration})
                          </div>
                          <div className="flex items-center">
                            {appointment.location === "Video Call" ? (
                              <Video className="w-3 h-3 mr-1" />
                            ) : (
                              <MapPin className="w-3 h-3 mr-1" />
                            )}
                            {appointment.location}
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{appointment.notes}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{appointment.type}</Badge>
                      <Badge variant={appointment.status === "Confirmed" ? "default" : "secondary"}>
                        {appointment.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats & Pending */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Today's Appointments</span>
                <span className="font-semibold">{upcomingAppointments.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">This Week</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pending Confirmations</span>
                <span className="font-semibold text-orange-600">{pendingAppointments.length}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Confirmations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingAppointments.map((appointment) => (
                  <div key={appointment.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{appointment.clientName}</p>
                        <p className="text-xs text-gray-500">{appointment.time}</p>
                      </div>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        Confirm
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
