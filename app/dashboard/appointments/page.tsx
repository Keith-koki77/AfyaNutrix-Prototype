"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Plus,
  CalendarIcon,
  Clock,
  MoreHorizontal,
  Eye,
  Edit,
  MessageSquare,
  Phone,
  CheckCircle,
  XCircle,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const appointments = [
    {
      id: 1,
      time: "09:00 AM",
      client: "Grace Mwangi",
      type: "Follow-up Consultation",
      status: "confirmed",
      duration: "30 min",
      notes: "Review weight loss progress",
      phone: "+254 700 123 456",
      date: "2024-01-20",
    },
    {
      id: 2,
      time: "10:30 AM",
      client: "John Kamau",
      type: "Initial Consultation",
      status: "pending",
      duration: "60 min",
      notes: "Diabetes management consultation",
      phone: "+254 700 234 567",
      date: "2024-01-20",
    },
    {
      id: 3,
      time: "02:00 PM",
      client: "Mary Wanjiku",
      type: "Meal Plan Review",
      status: "confirmed",
      duration: "45 min",
      notes: "Adjust muscle building plan",
      phone: "+254 700 345 678",
      date: "2024-01-20",
    },
    {
      id: 4,
      time: "04:30 PM",
      client: "David Ochieng",
      type: "Progress Check",
      status: "cancelled",
      duration: "30 min",
      notes: "Client requested reschedule",
      phone: "+254 700 456 789",
      date: "2024-01-20",
    },
    {
      id: 5,
      time: "11:00 AM",
      client: "Faith Akinyi",
      type: "Follow-up",
      status: "confirmed",
      duration: "30 min",
      notes: "Pregnancy nutrition follow-up",
      phone: "+254 700 567 890",
      date: "2024-01-21",
    },
  ]

  const todayAppointments = appointments.filter((apt) => apt.date === "2024-01-20")
  const upcomingAppointments = appointments.filter((apt) => apt.date > "2024-01-20")

  const stats = [
    {
      label: "Today's Appointments",
      value: todayAppointments.length,
      icon: CalendarIcon,
      color: "text-blue-600",
    },
    {
      label: "Confirmed",
      value: todayAppointments.filter((a) => a.status === "confirmed").length,
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      label: "Pending",
      value: todayAppointments.filter((a) => a.status === "pending").length,
      icon: Clock,
      color: "text-orange-600",
    },
    {
      label: "This Week",
      value: appointments.length,
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "default"
      case "pending":
        return "secondary"
      case "cancelled":
        return "destructive"
      case "completed":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600 mt-1">Manage your consultation schedule and client meetings</p>
        </div>
        <Link href="/dashboard/appointments/new">
          <Button className="bg-[#1B5E20] hover:bg-[#2E7D32]">
            <Plus className="w-4 h-4 mr-2" />
            Schedule Appointment
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
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
        {/* Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Select a date to view appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>Saturday, January 20, 2024</CardDescription>
              </div>
              <Badge className="bg-[#1B5E20]">{todayAppointments.length} appointments</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                      <p className="text-xs text-gray-500">{appointment.duration}</p>
                    </div>
                    <div className="w-px h-12 bg-gray-200"></div>
                    <div>
                      <p className="font-medium text-gray-900">{appointment.client}</p>
                      <p className="text-sm text-gray-600">{appointment.type}</p>
                      <p className="text-xs text-gray-500">{appointment.notes}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Appointment
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Send Message
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Phone className="mr-2 h-4 w-4" />
                          Call Client
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {appointment.status === "pending" && (
                          <DropdownMenuItem>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Confirm
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="text-red-600">
                          <XCircle className="mr-2 h-4 w-4" />
                          Cancel
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
              {todayAppointments.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <CalendarIcon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>No appointments scheduled for today</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* All Appointments Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Appointments</CardTitle>
          <CardDescription>Complete list of scheduled and past appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div>
                        <p className="font-medium text-gray-900">{appointment.date}</p>
                        <p className="text-sm text-gray-500">{appointment.time}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-[#1B5E20] rounded-full flex items-center justify-center text-white text-sm">
                          {appointment.client
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{appointment.client}</p>
                          <p className="text-xs text-gray-500">{appointment.phone}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600">{appointment.type}</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600">{appointment.duration}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600 max-w-xs truncate">{appointment.notes}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Message Client
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Cancel Appointment</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
