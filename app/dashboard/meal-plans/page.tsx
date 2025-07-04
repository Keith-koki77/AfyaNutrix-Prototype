"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Calendar } from "lucide-react"

export default function MealPlansPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const mealPlans = [
    {
      id: 1,
      title: "Weight Loss Plan - Sarah",
      client: "Sarah Johnson",
      clientAvatar: "/placeholder-user.jpg",
      type: "Weight Loss",
      duration: "8 weeks",
      status: "Active",
      startDate: "2024-01-15",
      calories: "1,500 kcal/day",
      meals: 4,
      progress: 75,
    },
    {
      id: 2,
      title: "Muscle Building - Michael",
      client: "Michael Chen",
      clientAvatar: "/placeholder-user.jpg",
      type: "Muscle Gain",
      duration: "12 weeks",
      status: "Active",
      startDate: "2024-01-10",
      calories: "2,800 kcal/day",
      meals: 6,
      progress: 60,
    },
    {
      id: 3,
      title: "Maintenance Plan - Emma",
      client: "Emma Wilson",
      clientAvatar: "/placeholder-user.jpg",
      type: "Maintenance",
      duration: "4 weeks",
      status: "Completed",
      startDate: "2023-12-20",
      calories: "2,000 kcal/day",
      meals: 3,
      progress: 100,
    },
  ]

  const filteredPlans = mealPlans.filter(
    (plan) =>
      plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.client.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "default"
      case "Completed":
        return "secondary"
      case "Paused":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Weight Loss":
        return "bg-red-50 text-red-700"
      case "Muscle Gain":
        return "bg-blue-50 text-blue-700"
      case "Maintenance":
        return "bg-green-50 text-green-700"
      default:
        return "bg-gray-50 text-gray-700"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Meal Plans</h1>
          <p className="text-gray-600 mt-2">Create and manage nutrition plans for your clients</p>
        </div>
        <Button className="bg-[#1B5E20] hover:bg-[#2E7D32]">
          <Plus className="w-4 h-4 mr-2" />
          Create Meal Plan
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search meal plans..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlans.map((plan) => (
              <Card key={plan.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={getTypeColor(plan.type)}>
                      {plan.type}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Plan</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem>Archive</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardTitle className="text-lg">{plan.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={plan.clientAvatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {plan.client
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{plan.client}</p>
                      <p className="text-xs text-gray-500">Client</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{plan.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Daily Calories:</span>
                      <span className="font-medium">{plan.calories}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Meals per day:</span>
                      <span className="font-medium">{plan.meals}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress:</span>
                      <span className="font-medium">{plan.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#1B5E20] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${plan.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Badge variant={getStatusColor(plan.status) as any}>{plan.status}</Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      Started {new Date(plan.startDate).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
