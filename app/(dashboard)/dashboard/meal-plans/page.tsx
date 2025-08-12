"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  Copy,
  Download,
  ChefHat,
  Calendar,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function MealPlansPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const mealPlans = [
    {
      id: 1,
      name: "Diabetes Management Plan",
      client: "John Kamau",
      type: "Medical",
      status: "Active",
      duration: "4 weeks",
      calories: "1800 kcal/day",
      created: "2024-01-15",
      lastModified: "2024-01-18",
      foods: ["Ugali", "Sukuma Wiki", "Beans", "Fish"],
    },
    {
      id: 2,
      name: "Weight Loss Program",
      client: "Grace Mwangi",
      type: "Weight Loss",
      status: "Active",
      duration: "8 weeks",
      calories: "1500 kcal/day",
      created: "2024-01-10",
      lastModified: "2024-01-17",
      foods: ["Githeri", "Terere", "Chicken", "Sweet Potato"],
    },
    {
      id: 3,
      name: "Muscle Building Plan",
      client: "Mary Wanjiku",
      type: "Muscle Gain",
      status: "Active",
      duration: "12 weeks",
      calories: "2200 kcal/day",
      created: "2024-01-05",
      lastModified: "2024-01-16",
      foods: ["Nyama Choma", "Mukimo", "Eggs", "Milk"],
    },
    {
      id: 4,
      name: "General Health Template",
      client: null,
      type: "Template",
      status: "Template",
      duration: "Flexible",
      calories: "2000 kcal/day",
      created: "2023-12-20",
      lastModified: "2024-01-10",
      foods: ["Chapati", "Cabbage", "Beef", "Rice"],
    },
    {
      id: 5,
      name: "Pregnancy Nutrition",
      client: "Faith Akinyi",
      type: "Medical",
      status: "Completed",
      duration: "6 weeks",
      calories: "2100 kcal/day",
      created: "2023-12-15",
      lastModified: "2024-01-05",
      foods: ["Millet Porridge", "Spinach", "Liver", "Fruits"],
    },
  ]

  const templates = [
    {
      id: 1,
      name: "Diabetes Management",
      description: "Low glycemic index foods with balanced macros",
      uses: 12,
      category: "Medical",
    },
    {
      id: 2,
      name: "Weight Loss Standard",
      description: "Calorie-controlled plan with local foods",
      uses: 25,
      category: "Weight Loss",
    },
    {
      id: 3,
      name: "Muscle Building",
      description: "High protein plan for muscle development",
      uses: 8,
      category: "Muscle Gain",
    },
    {
      id: 4,
      name: "Heart Healthy",
      description: "Low sodium, high fiber cardiovascular plan",
      uses: 15,
      category: "Medical",
    },
  ]

  const filteredPlans = mealPlans.filter((plan) => {
    const matchesSearch =
      plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (plan.client && plan.client.toLowerCase().includes(searchTerm.toLowerCase())) ||
      plan.type.toLowerCase().includes(searchTerm.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "active") return matchesSearch && plan.status === "Active"
    if (activeTab === "templates") return matchesSearch && plan.status === "Template"
    if (activeTab === "completed") return matchesSearch && plan.status === "Completed"

    return matchesSearch
  })

  const stats = [
    { label: "Total Plans", value: mealPlans.length, icon: ChefHat, color: "text-blue-600" },
    {
      label: "Active Plans",
      value: mealPlans.filter((p) => p.status === "Active").length,
      icon: TrendingUp,
      color: "text-green-600",
    },
    { label: "Templates", value: templates.length, icon: Copy, color: "text-purple-600" },
    { label: "This Month", value: "8", icon: Calendar, color: "text-orange-600" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Meal Plans</h1>
          <p className="text-gray-600 mt-1">Create and manage nutrition plans with local Kenyan foods</p>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard/meal-plans/templates">
            <Button
              variant="outline"
              className="border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white bg-transparent"
            >
              <Copy className="w-4 h-4 mr-2" />
              Use Template
            </Button>
          </Link>
          <Link href="/dashboard/meal-plans/new">
            <Button className="bg-[#1B5E20] hover:bg-[#2E7D32]">
              <Plus className="w-4 h-4 mr-2" />
              Create Plan
            </Button>
          </Link>
        </div>
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

      {/* Main Content */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Meal Plans & Templates</CardTitle>
              <CardDescription>Manage your nutrition plans and reusable templates</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search meal plans..."
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
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Plans</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Plan Name</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Calories</TableHead>
                      <TableHead>Key Foods</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPlans.map((plan) => (
                      <TableRow key={plan.id} className="hover:bg-gray-50">
                        <TableCell>
                          <div>
                            <p className="font-medium text-gray-900">{plan.name}</p>
                            <p className="text-sm text-gray-500">Created {plan.created}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          {plan.client ? (
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-[#1B5E20] rounded-full flex items-center justify-center text-white text-xs">
                                {plan.client
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                              <span className="text-sm">{plan.client}</span>
                            </div>
                          ) : (
                            <span className="text-sm text-gray-400">Template</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{plan.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              plan.status === "Active"
                                ? "default"
                                : plan.status === "Template"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {plan.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-gray-600">{plan.duration}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-gray-600">{plan.calories}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {plan.foods.slice(0, 2).map((food, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {food}
                              </Badge>
                            ))}
                            {plan.foods.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{plan.foods.length - 2}
                              </Badge>
                            )}
                          </div>
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
                                Edit Plan
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Copy className="mr-2 h-4 w-4" />
                                Duplicate
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" />
                                Export PDF
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Delete Plan</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="active" className="mt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Plan Name</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Next Review</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPlans
                      .filter((p) => p.status === "Active")
                      .map((plan) => (
                        <TableRow key={plan.id} className="hover:bg-gray-50">
                          <TableCell>
                            <p className="font-medium text-gray-900">{plan.name}</p>
                          </TableCell>
                          <TableCell>{plan.client}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div className="bg-[#1B5E20] h-2 rounded-full" style={{ width: "65%" }}></div>
                              </div>
                              <span className="text-sm text-gray-600">65%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm text-gray-600">Jan 25, 2024</span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm">
                              Review
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="templates" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <Card key={template.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{template.name}</CardTitle>
                          <Badge variant="outline" className="mt-1">
                            {template.category}
                          </Badge>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Use Template</DropdownMenuItem>
                            <DropdownMenuItem>Edit Template</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Used {template.uses} times</span>
                        <Button size="sm" className="bg-[#1B5E20] hover:bg-[#2E7D32]">
                          Use Template
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="mt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Plan Name</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Completed Date</TableHead>
                      <TableHead>Outcome</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPlans
                      .filter((p) => p.status === "Completed")
                      .map((plan) => (
                        <TableRow key={plan.id} className="hover:bg-gray-50">
                          <TableCell>
                            <p className="font-medium text-gray-900">{plan.name}</p>
                          </TableCell>
                          <TableCell>{plan.client}</TableCell>
                          <TableCell>
                            <span className="text-sm text-gray-600">Jan 05, 2024</span>
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800">Successful</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm">
                              View Report
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
