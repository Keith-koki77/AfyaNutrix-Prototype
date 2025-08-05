"use client";

import Sidebar from "@/components/molecules/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import Notifications from "./Notifications";
import UserMenu from "./UserMenu";

import { createClient } from "@/utils/supabase/client";

interface DashboardHeaderProps {
 sidebarOpen: boolean;
 setSidebarOpen: (open: boolean) => void;
}

export default function DashboardHeader({
 sidebarOpen,
 setSidebarOpen,
}: DashboardHeaderProps) {
 const [user, setUser] = useState<any>(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const getUser = async () => {
   const supabase = createClient();
   const {
    data: { user },
   } = await supabase.auth.getUser();
   setUser(user);
   setLoading(false);
  };

  getUser();
 }, []);

 if (loading) {
  return (
   <header className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between">
     <div className="flex items-center space-x-4">
      <Button variant="ghost" size="sm" className="lg:hidden" disabled>
       <Menu className="w-5 h-5" />
      </Button>
      <div className="relative hidden sm:block">
       <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
       <Input
        placeholder="Search clients, appointments..."
        className="pl-10 w-64"
        disabled
       />
      </div>
     </div>
     <div className="flex items-center space-x-4">
      <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
     </div>
    </div>
   </header>
  );
 }

 console.log(user);

 return (
  <header className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
   <div className="flex items-center justify-between">
    <div className="flex items-center space-x-4">
     <Sheet>
      <SheetTrigger asChild>
       <Button variant="ghost" size="sm" className="lg:hidden">
        <Menu className="w-5 h-5" />
       </Button>
      </SheetTrigger>
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

     {/* Search */}
     <div className="relative hidden sm:block">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
       placeholder="Search clients, appointments..."
       className="pl-10 w-64"
      />
     </div>
    </div>

    <div className="flex items-center space-x-4">
     <Notifications />

     <UserMenu user={user} />
    </div>
   </div>
  </header>
 );
}
