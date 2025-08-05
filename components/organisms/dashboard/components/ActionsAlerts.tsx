"use client";

import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BarChart3, Users } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { ChefHat } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { AlertCircle } from "lucide-react";

export default function ActionsAlerts() {
 return (
  <div className="grid md:grid-cols-2 gap-6">
   <Card>
    <CardHeader>
     <CardTitle>Quick Actions</CardTitle>
     <CardDescription>Common tasks to streamline your workflow</CardDescription>
    </CardHeader>
    <CardContent>
     <div className="grid grid-cols-2 gap-3">
      <Link href="/clients/new">
       <Button
        variant="outline"
        className="w-full justify-start bg-transparent"
       >
        <Users className="w-4 h-4 mr-2" />
        Add Client
       </Button>
      </Link>
      <Link href="/appointments/new">
       <Button
        variant="outline"
        className="w-full justify-start bg-transparent"
       >
        <span>
         {/* <Calendar className="w-4 h-4 mr-2" /> */}
         Schedule
        </span>
       </Button>
      </Link>
      <Link href="/meal-plans/templates">
       <Button
        variant="outline"
        className="w-full justify-start bg-transparent"
       >
        <ChefHat className="w-4 h-4 mr-2" />
        Templates
       </Button>
      </Link>
      <Link href="/messages">
       <Button
        variant="outline"
        className="w-full justify-start bg-transparent"
       >
        <MessageSquare className="w-4 h-4 mr-2" />
        Messages
       </Button>
      </Link>
     </div>
    </CardContent>
   </Card>

   <Card>
    <CardHeader>
     <CardTitle className="flex items-center">
      <AlertCircle className="w-5 h-5 mr-2 text-orange-500" />
      Alerts & Reminders
     </CardTitle>
    </CardHeader>
    <CardContent>
     <div className="space-y-3">
      <div className="flex items-start space-x-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
       <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5" />
       <div>
        <p className="text-sm font-medium text-orange-800">
         3 clients haven&apos;t logged meals
        </p>
        <p className="text-xs text-orange-600">Send reminder messages</p>
       </div>
      </div>
      <div className="flex items-start space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
       <BarChart3 className="w-4 h-4 text-blue-500 mt-0.5" />
       <div>
        <p className="text-sm font-medium text-blue-800">Weekly report ready</p>
        <p className="text-xs text-blue-600">Review client progress data</p>
       </div>
      </div>
      <div className="flex items-start space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
       <Users className="w-4 h-4 text-green-500 mt-0.5" />
       <div>
        <p className="text-sm font-medium text-green-800">
         5 new client inquiries
        </p>
        <p className="text-xs text-green-600">Schedule consultations</p>
       </div>
      </div>
     </div>
    </CardContent>
   </Card>
  </div>
 );
}
