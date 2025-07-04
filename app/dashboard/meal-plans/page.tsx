"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  ChefHat,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  User,
  Edit,
  Copy,
  Trash2,
  Download,
} from "lucide-react"

export default function MealPlansPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const mealPlans = [
    {
      id: 1,
      name: "Weight Loss Plan - Sarah",
      client: "Sarah Johnson",
      clientAvatar: "/placeholder-user.jpg",
      goal: "Weight Loss",
      calories: 1500,
      status: "active",
      createdDate: "2024-01-15",
      lastUpdated: "2024-01-20",
      duration: "4 weeks",
      meals: 5,
    },
    {
      id: 2,
      name: "Muscle Gain Plan - Michael",
      client: "Michael Chen",
      clientAvatar: "/placeholder-user.jpg",
      goal: "Muscle Gain",
      calories: 2800,
      status: "active",
      createdDate: "2024-01-10",
      lastUpdated: "2024-01-18",
      duration: "6 weeks",
      meals: 6,
    },
    {
      id: 3,
      name: "Maintenance Plan - Emma",
      client: "Emma Wilson",
      clientAvatar: "/placeholder-user.jpg",
      goal: "Maintenance",
      calories: 2000,
      status: "draft",
      createdDate: "2024-01-12",
      lastUpdated: "2024-01-12",
      duration: "2 weeks",
      meals: 4,
    },
    {
      id: 4,
      name: "Athletic Performance - David",
      client: "David Brown",
      clientAvatar: "/placeholder-user.jpg",
      goal: "Athletic Performance",
      calories: 3200,
      status: "completed",
      createdDate: "2023-12-01",
      lastUpdated: "2024-01-01",
      duration: "8 weeks",
      meals: 7,
    },
  ]

  const filteredMealPlans = mealPlans.filter((plan) => {
    const matchesSearch =
      plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || plan.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "draft":
        return <Badge className="bg-yellow-100 text-yellow-800">Draft</Badge>
      case "completed":
        return <Badge className="bg-blue-100 text-blue-800">Completed</Badge>
      case "paused":
        return <Badge variant="secondary">Paused</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getGoalColor = (goal: string) => {
    switch (goal) {
      case "Weight Loss":
        return "bg-red-100 text-red-800"
      case "Muscle Gain":
        return "bg-blue-100 text-blue-800"
      case "Maintenance":
        return "bg-green-100 text-green-800"
      case "Athletic Performance":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Meal Plans</h1>
          <p className="text-gray-600 mt-1">Create and manage personalized nutrition plans for your clients</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Meal Plan
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Meal Plan</DialogTitle>
              <DialogDescription>Design a personalized nutrition plan for your client.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="client" className="text-right">
                  Client
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select client" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    <SelectItem value="michael">Michael Chen</SelectItem>
                    <SelectItem value="emma">Emma Wilson</SelectItem>
                    <SelectItem value="david">David Brown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Plan Name
                </Label>
                <Input id="name" placeholder="e.g., Weight Loss Plan" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="goal" className="text-right">
                  Goal
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weight-loss">Weight Loss</SelectItem>
                    <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="athletic-performance">Athletic Performance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="calories" className="text-right">
                  Daily Calories
                </Label>
                <Input id="calories" type="number" placeholder="2000" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="duration" className="text-right">
                  Duration
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2weeks">2 weeks</SelectItem>
                    <SelectItem value="4weeks">4 weeks</SelectItem>
                    <SelectItem value="6weeks">6 weeks</SelectItem>
                    <SelectItem value="8weeks">8 weeks</SelectItem>
                    <SelectItem value="12weeks">12 weeks</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="meals" className="text-right">
                  Meals/Day
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select meals per day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 meals</SelectItem>
                    <SelectItem value="4">4 meals</SelectItem>
                    <SelectItem value="5">5 meals</SelectItem>
                    <SelectItem value="6">6 meals</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="notes" className="text-right">
                  Notes
                </Label>
                <Textarea id="notes" placeholder="Special instructions..." className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create Meal Plan</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Plans</p>
                <p className="text-2xl font-bold text-gray-900">{mealPlans.length}</p>
              </div>
              <ChefHat className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Plans</p>
                <p className="text-2xl font-bold text-gray-900">
                  {mealPlans.filter((p) => p.status === "active").length}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Draft Plans</p>
                <p className="text-2xl font-bold text-gray-900">
                  {mealPlans.filter((p) => p.status === "draft").length}
                </p>
              </div>
              <Edit className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {mealPlans.filter((p) => p.status === "completed").length}
                </p>
              </div>
              <User className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search meal plans..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          More Filters
        </Button>
      </div>

      {/* Meal Plans Table */}
      <Card>
        <CardHeader>
          <CardTitle>Meal Plans</CardTitle>
          <CardDescription>
            Showing {filteredMealPlans.length} of {mealPlans.length} meal plans
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plan & Client</TableHead>
                <TableHead>Goal</TableHead>
                <TableHead>Calories</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMealPlans.map((plan) => (
                <TableRow key={plan.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={plan.clientAvatar || "/placeholder.svg"} alt={plan.client} />
                        <AvatarFallback>
                          {plan.client
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{plan.name}</p>
                        <p className="text-sm text-gray-500">{plan.client}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getGoalColor(plan.goal)}>{plan.goal}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <p className="font-medium">{plan.calories}</p>
                      <p className="text-xs text-gray-500">kcal/day</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{plan.duration}</p>
                      <p className="text-xs text-gray-500">{plan.meals} meals/day</p>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(plan.status)}</TableCell>
                  <TableCell>{plan.lastUpdated}</TableCell>
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
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Plan
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="mr-2 h-4 w-4" />
                          Duplicate Plan
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Export PDF
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <User className="mr-2 h-4 w-4" />
                          View Client
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete Plan
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
