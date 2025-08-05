import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import React from "react";

export default function Notifications() {
 return (
  <Button variant="ghost" size="sm" className="relative">
   <Bell className="w-5 h-5" />
   <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-red-500">
    3
   </Badge>
  </Button>
 );
}
