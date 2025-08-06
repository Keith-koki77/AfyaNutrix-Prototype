"use client";

import { Button } from "@/components/ui/button";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { User } from "@supabase/supabase-js";
import {
 HelpCircle,
 LogOut,
 Settings,
 User as UserAccount,
} from "lucide-react";
import React from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/get-user";
import Link from "next/link";

export default function UserMenu() {
 const router = useRouter();
 const { profile } = useUser();

 const handleSignOut = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  router.push("/login");
 };

 return (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="flex items-center space-x-2">
     <div className="w-8 h-8 bg-[#1B5E20] rounded-full flex items-center justify-center text-white text-sm font-medium">
      {profile?.first_name?.charAt(0)}
     </div>
     <span className="hidden sm:block text-sm font-medium">
      {profile?.email}
     </span>
    </Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent align="end" className="w-56">
    <DropdownMenuLabel>
     {profile?.first_name} {profile?.last_name}
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
     <Link href={"/dashboard/settings"} className="w-full flex items-center">
      <UserAccount className="mr-2 h-4 w-4" />
      <span>Profile</span>
     </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
     <Link href={"/dashboard/settings"} className="w-full flex items-center">
      <Settings className="mr-2 h-4 w-4" />
      <span>Settings</span>
     </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
     <Link href={"/dashboard/settings"} className="w-full flex items-center">
      <HelpCircle className="mr-2 h-4 w-4" />
      <span>Help</span>
     </Link>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-red-600" onClick={handleSignOut}>
     <LogOut className="mr-2 h-4 w-4" />
     <span>Log out</span>
    </DropdownMenuItem>
   </DropdownMenuContent>
  </DropdownMenu>
 );
}
