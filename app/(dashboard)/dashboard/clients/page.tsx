"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  MessageSquare,
  Calendar,
  TrendingUp,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const clients = [
    {
      id: 1,
      name: "Grace Mwangi",
      email: "grace.mwangi@email.com",
      phone: "+254 700 123 456",
      status: "Active",
      goal: "Weight Loss",
      progress: 85,
      lastSeen: "2 hours ago",
      joinDate: "2024-01-15",
      nextAppointment: "2024-01-20 10:00 AM",
    },
    {
      id: 2,
      name: "John Kamau",
      email: "john.kamau@email.com",
      phone: "+254 700 234 567",
      status: "Pending",
      goal: "Diabetes Management",
      progress: 45,
      lastSeen: "1 day ago",
      joinDate: "2024-01-10",
      nextAppointment: "2024-01-22 2:00 PM",
    },
    {
      id: 3,
      name: "Mary Wanjiku",
      email: "mary.wanjiku@email.com",
      phone: "+254 700 345 678",
      status: "Active",
      goal: "Muscle Gain",
      progress: 92,
      lastSeen: "30 minutes ago",
      joinDate: "2023-12-20",
      nextAppointment: "2024-01-19 4:30 PM",
    },
    {
      id: 4,
      name: "David Ochieng",
      email: "david.ochieng@email.com",
      phone: "+254 700 456 789",
      status: "Inactive",
      goal: "General Health",
      progress: 23,
      lastSeen: "1 week ago",
      joinDate: "2023-11-15",
      nextAppointment: null,
    },
    {
      id: 5,
      name: "Faith Akinyi",
      email: "faith.akinyi@email.com",
      phone: "+254 700 567 890",
      status: "Active",
      goal: "Weight Gain",
      progress: 67,
      lastSeen: "4 hours ago",
      joinDate: "2024-01-05",
      nextAppointment: "2024-01-21 11:00 AM",
    },
  ]

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.goal.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const stats = [
    { label: "Total Clients", value: clients.length, icon: Users, color: "text-blue-600" },
    {
      label: "Active",
      value: clients.filter((c) => c.status === "Active").length,
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      label: "Pending",
      value: clients.filter((c) => c.status === "Pending").length,
      icon: Calendar,
      color: "text-orange-600",
    },
    { label: "Avg Progress", value: "68%", icon: TrendingUp, color: "text-purple-600" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-600 mt-1">Manage your client relationships and track their progress</p>
        </div>
        <Link href="/dashboard/clients/new">
          <Button className="bg-[#1B5E20] hover:bg-[#2E7D32]">
            <Plus className="w-4 h-4 mr-2" />
            Add New Client
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

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Client Directory</CardTitle>
              <CardDescription>View and manage all your clients</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Goal</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Last Seen</TableHead>
                  <TableHead>Next Appointment</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClients.map((client) => (
                  <TableRow key={client.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#1B5E20] rounded-full flex items-center justify-center text-white font-medium">
                          {client.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{client.name}</p>
                          <p className="text-sm text-gray-500">{client.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600">{client.goal}</span>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          client.status === "Active"
                            ? "default"
                            : client.status === "Pending"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {client.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Progress value={client.progress} className="w-16 h-2" />
                        <span className="text-sm text-gray-600">{client.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600">{client.lastSeen}</span>
                    </TableCell>
                    <TableCell>
                      {client.nextAppointment ? (
                        <span className="text-sm text-gray-600">{client.nextAppointment}</span>
                      ) : (
                        <span className="text-sm text-gray-400">Not scheduled</span>
                      )}
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
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Send Message
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calendar className="mr-2 h-4 w-4" />
                            Schedule Appointment
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Archive Client</DropdownMenuItem>
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
