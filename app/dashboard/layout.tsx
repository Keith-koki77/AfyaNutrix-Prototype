"use client";

import type React from "react";

import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Suspense } from "react";
import Sidebar from "@/components/molecules/Sidebar";
import DashboardHeader from "@/components/organisms/dashboard/DashboardHeader";

export default function DashboardLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 // const searchParams = useSearchParams()
 const [sidebarOpen, setSidebarOpen] = useState(false);

 return (
  <Suspense fallback={<div>Loading...</div>}>
   <div className="min-h-screen bg-gray-50">
    {/* Desktop Sidebar */}
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
     <div className="flex flex-col flex-grow bg-white border-r border-gray-200 overflow-y-auto">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
     </div>
    </div>

    {/* Mobile Sidebar */}
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
     <SheetContent side="left" className="p-0 w-64">
      <div className="bg-white h-full">
       <Sidebar
        mobile
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
       />
      </div>
     </SheetContent>
    </Sheet>

    {/* Main Content */}
    <div className="lg:pl-64 flex flex-col flex-1">
     <DashboardHeader
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
     />

     {/* Page Content */}
     <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
   </div>
  </Suspense>
 );
}
