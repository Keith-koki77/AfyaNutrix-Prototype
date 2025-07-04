"use client"

import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, TrendingDown, Download, Filter } from "lucide-react"

function AnalyticsContent() {
  const clientGrowthData = [
    { month: "Jan", clients: 12, revenue: 2400 },
    { month: "Feb", clients: 15, revenue: 3200 },
    { month: "Mar", clients: 18, revenue: 3800 },
    { month: "Apr", clients: 22, revenue: 4600 },
    { month: "May", clients: 24, revenue: 5200 },
    { month: "Jun", clients: 28, revenue: 5800 },
  ]

  const appointmentData = [
    { day: "Mon", appointments: 8, completed: 7 },
    { day: "Tue", appointments: 12, completed: 11 },
    { day: "Wed", appointments: 6, completed: 6 },
    { day: "Thu", appointments: 15, completed: 13 },
    { day: "Fri", appointments: 10, completed: 9 },
    { day: "Sat", appointments: 4, completed: 4 },
    { day: "Sun", appointments: 2, completed: 2 },
  ]

  const goalProgressData = [
    { name: "Weight Loss", value: 65, color: "#1B5E20" },
    { name: "Muscle Gain", value: 25, color: "#4CAF50" },
    { name: "Maintenance", value: 10, color: "#8BC34A" },
  ]

  const kpiData = [
    {
      title: "Client Retention Rate",
      value: "94%",
      change: "+2.5%",
      trend: "up",
      description: "Clients staying active for 3+ months",
    },
    {
      title: "Average Session Rating",
      value: "4.8",
      change: "+0.2",
      trend: "up",
      description: "Based on client feedback",
    },
    {
      title: "Goal Achievement Rate",
      value: "78%",
      change: "-3.2%",
      trend: "down",
      description: "Clients reaching their targets",
    },
    {
      title: "Monthly Revenue",
      value: "$5,800",
      change: "+12.5%",
      trend: "up",
      description: "Total earnings this month",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Track your practice performance and client progress</p>
        </div>
        <div className="flex space-x-3">
          <Select defaultValue="30days">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi) => (
          <Card key={kpi.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
                  <div className="flex items-center mt-2">
                    {kpi.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm ${kpi.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                      {kpi.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">vs last period</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">{kpi.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <Tabs defaultValue="growth" className="space-y-6">
        <TabsList>
          <TabsTrigger value="growth">Client Growth</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="goals">Goal Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="growth" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Client Growth</CardTitle>
                <CardDescription>Number of active clients over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    clients: {
                      label: "Clients",
                      color: "#1B5E20",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={clientGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="clients"
                        stroke="var(--color-clients)"
                        strokeWidth={2}
                        dot={{ fill: "var(--color-clients)" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Growth</CardTitle>
                <CardDescription>Monthly revenue from consultations</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    revenue: {
                      label: "Revenue",
                      color: "#4CAF50",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={clientGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="revenue" fill="var(--color-revenue)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="appointments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Appointments</CardTitle>
              <CardDescription>Scheduled vs completed appointments this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  appointments: {
                    label: "Scheduled",
                    color: "#1B5E20",
                  },
                  completed: {
                    label: "Completed",
                    color: "#4CAF50",
                  },
                }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={appointmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="appointments" fill="var(--color-appointments)" />
                    <Bar dataKey="completed" fill="var(--color-completed)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Client Goals Distribution</CardTitle>
                <CardDescription>Breakdown of client fitness goals</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    goals: {
                      label: "Goals",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={goalProgressData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {goalProgressData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Goal Achievement Progress</CardTitle>
                <CardDescription>How well clients are meeting their targets</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {goalProgressData.map((goal) => (
                  <div key={goal.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{goal.name}</span>
                      <span className="text-sm text-gray-600">{goal.value}%</span>
                    </div>
                    <Progress value={goal.value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default function AnalyticsPage() {
  return (
    <Suspense fallback={<div>Loading analytics...</div>}>
      <AnalyticsContent />
    </Suspense>
  )
}
