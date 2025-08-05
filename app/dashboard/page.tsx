"use client";

import { Button } from "@/components/ui/button";
import { ChefHat, Plus } from "lucide-react";
import Link from "next/link";
import RecentClients from "@/components/organisms/dashboard/components/RecentClients";
import DashboardLatestSchedule from "@/components/organisms/dashboard/components/DashboardLatestSchedule";
import ActionsAlerts from "@/components/organisms/dashboard/components/ActionsAlerts";
import StatsGrid from "@/components/organisms/dashboard/components/StatsGrid";
import useUser from "@/hooks/get-user";

export default function DashboardPage() {
 const user = useUser();

 return (
  <div className="space-y-6">
   {/* Header */}
   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
    <div>
     <h1 className="text-3xl font-bold text-gray-900">
      Good morning, {user?.email} 👋
     </h1>
     <p className="text-gray-600 mt-1">
      Here&apos;s what&apos;s happening with your practice today
     </p>
    </div>
    <div className="flex gap-3">
     <Link href="/clients/new">
      <Button className="bg-[#1B5E20] hover:bg-[#2E7D32]">
       <Plus className="w-4 h-4 mr-2" />
       Add Client
      </Button>
     </Link>
     <Link href="/meal-plans/new">
      <Button
       variant="outline"
       className="border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white bg-transparent"
      >
       <ChefHat className="w-4 h-4 mr-2" />
       Create Meal Plan
      </Button>
     </Link>
    </div>
   </div>

   <StatsGrid />

   <div className="grid lg:grid-cols-3 gap-6">
    <RecentClients />

    <DashboardLatestSchedule />
   </div>

   <ActionsAlerts />
  </div>
 );
}
