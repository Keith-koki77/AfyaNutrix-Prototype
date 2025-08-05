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

export default function UserMenu({ user }: { user: User | null }) {
 const router = useRouter();

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
      A
     </div>
     <span className="hidden sm:block text-sm font-medium">{user?.email}</span>
    </Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent align="end" className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
     <UserAccount className="mr-2 h-4 w-4" />
     <span>Profile</span>
    </DropdownMenuItem>
    <DropdownMenuItem>
     <Settings className="mr-2 h-4 w-4" />
     <span>Settings</span>
    </DropdownMenuItem>
    <DropdownMenuItem>
     <HelpCircle className="mr-2 h-4 w-4" />
     <span>Help</span>
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
