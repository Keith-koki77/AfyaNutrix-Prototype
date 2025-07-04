"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  TrendingUp,
  Users,
  Calendar,
  Target,
  Download,
  Filter,
  PieChart,
  Activity,
  Heart,
  Apple,
} from "lucide-react"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d")
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for analytics
  const overviewStats = [
    {
      title: "Total Clients",
      value: "47",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Meal Plans",
      value: "23",
      change: "+8%",
      trend: "up",
      icon: Apple,
      color: "text-green-600",
    },
    {
      title: "Avg. Client Progress",
      value: "78%",
      change: "+15%",
      trend: "up",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Appointments This Month",
      value: "156",
      change: "+23%",
      trend: "up",
      icon: Calendar,
      color: "text-orange-600",
    },
  ]

  const clientProgress = [
    { name: "Grace Mwangi", goal: "Weight Loss", progress: 85, target: "5kg", achieved: "4.2kg" },
    { name: "John Kamau", goal: "Diabetes Management", progress: 92, target: "HbA1c < 7%", achieved: "6.8%" },
    { name: "Mary Wanjiku", goal: "Muscle Gain", progress: 67, target: "3kg", achieved: "2kg" },
    { name: "Faith Akinyi", goal: "Pregnancy Nutrition", progress: 88, target: "Healthy Weight", achieved: "On Track" },
    { name: "David Ochieng", goal: "Heart Health", progress: 45, target: "Lower Cholesterol", achieved: "In Progress" },
  ]

  const nutritionData = [
    { nutrient: "Protein", recommended: 150, actual: 142, unit: "g/day", status: "good" },
    { nutrient: "Carbohydrates", recommended: 300, actual: 285, unit: "g/day", status: "good" },
    { nutrient: "Fats", recommended: 65, actual: 78, unit: "g/day", status: "high" },
    { nutrient: "Fiber", recommended: 25, actual: 18, unit: "g/day", status: "low" },
    { nutrient: "Iron", recommended: 18, actual: 16, unit: "mg/day", status: "low" },
    { nutrient: "Calcium", recommended: 1000, actual: 950, unit: "mg/day", status: "good" },
  ]

  const popularFoods = [
    { food: "Ugali", frequency: 89, calories: 112, category: "Staples" },
    { food: "Sukuma Wiki", frequency: 76, calories: 25, category: "Vegetables" },
    { food: "Beans", frequency: 68, calories: 245, category: "Proteins" },
    { food: "Chapati", frequency: 54, calories: 104, category: "Staples" },
    { food: "Fish", frequency: 43, calories: 206, category: "Proteins" },
    { food: "Sweet Potato", frequency: 38, calories: 86, category: "Carbs" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "text-green-600 bg-green-100"
      case "high":
        return "text-red-600 bg-red-100"
      case "low":
        return "text-orange-600 bg-orange-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Track client progress and practice performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 3 months</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-[#1B5E20] hover:bg-[#2E7D32]">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">{stat.change}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Analytics Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="clients">Client Progress</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition Analysis</TabsTrigger>
          <TabsTrigger value="foods">Food Insights</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Practice Growth Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-[#1B5E20]" />
                  Practice Growth
                </CardTitle>
                <CardDescription>Client acquisition and retention over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500">Chart visualization would appear here</p>
                    <p className="text-sm text-gray-400">Showing client growth trends</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Success Rate */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-[#1B5E20]" />
                  Appointment Metrics
                </CardTitle>
                <CardDescription>Success rates and attendance patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Attendance Rate</span>
                    <span className="text-sm text-gray-600">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">On-time Rate</span>
                    <span className="text-sm text-gray-600">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Completion Rate</span>
                    <span className="text-sm text-gray-600">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2 text-[#1B5E20]" />
                Recent Activity
              </CardTitle>
              <CardDescription>Latest client interactions and milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "Grace Mwangi achieved weight loss goal", time: "2 hours ago", type: "success" },
                  { action: "New meal plan created for John Kamau", time: "4 hours ago", type: "info" },
                  { action: "Faith Akinyi logged daily meals", time: "6 hours ago", type: "info" },
                  { action: "Mary Wanjiku missed appointment", time: "1 day ago", type: "warning" },
                  { action: "David Ochieng started new program", time: "2 days ago", type: "success" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === "success"
                          ? "bg-green-500"
                          : activity.type === "warning"
                            ? "bg-orange-500"
                            : "bg-blue-500"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Client Progress Tab */}
        <TabsContent value="clients" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Client Progress Overview</CardTitle>
              <CardDescription>Track individual client achievements and goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clientProgress.map((client, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-medium text-gray-900">{client.name}</p>
                        <p className="text-sm text-gray-600">{client.goal}</p>
                      </div>
                      <Badge className="bg-[#1B5E20]">{client.progress}%</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Target: {client.target}</span>
                        <span className="text-gray-900">Achieved: {client.achieved}</span>
                      </div>
                      <Progress value={client.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Nutrition Analysis Tab */}
        <TabsContent value="nutrition" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-[#1B5E20]" />
                  Nutrient Analysis
                </CardTitle>
                <CardDescription>Average nutrient intake vs. recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nutritionData.map((nutrient, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{nutrient.nutrient}</span>
                        <Badge className={getStatusColor(nutrient.status)}>{nutrient.status}</Badge>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>
                          {nutrient.actual} / {nutrient.recommended} {nutrient.unit}
                        </span>
                        <span>{Math.round((nutrient.actual / nutrient.recommended) * 100)}%</span>
                      </div>
                      <Progress value={(nutrient.actual / nutrient.recommended) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="w-5 h-5 mr-2 text-[#1B5E20]" />
                  Macronutrient Distribution
                </CardTitle>
                <CardDescription>Average macronutrient breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <PieChart className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500">Pie chart would appear here</p>
                    <p className="text-sm text-gray-400">Showing macro distribution</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <div className="w-4 h-4 bg-blue-500 rounded mx-auto mb-1"></div>
                    <p className="text-xs text-gray-600">Carbs</p>
                    <p className="text-sm font-medium">45%</p>
                  </div>
                  <div className="text-center">
                    <div className="w-4 h-4 bg-green-500 rounded mx-auto mb-1"></div>
                    <p className="text-xs text-gray-600">Protein</p>
                    <p className="text-sm font-medium">25%</p>
                  </div>
                  <div className="text-center">
                    <div className="w-4 h-4 bg-orange-500 rounded mx-auto mb-1"></div>
                    <p className="text-xs text-gray-600">Fats</p>
                    <p className="text-sm font-medium">30%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Food Insights Tab */}
        <TabsContent value="foods" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Apple className="w-5 h-5 mr-2 text-[#1B5E20]" />
                Popular Kenyan Foods
              </CardTitle>
              <CardDescription>Most frequently used foods in meal plans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularFoods.map((food, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#1B5E20] rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{food.food}</p>
                        <p className="text-sm text-gray-600">{food.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{food.frequency}% usage</p>
                      <p className="text-xs text-gray-500">{food.calories} cal/100g</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
