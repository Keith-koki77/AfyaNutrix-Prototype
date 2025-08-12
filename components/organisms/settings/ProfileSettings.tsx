"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";
import ProfileForm from "./forms/ProfileForm";
import useUser from "@/hooks/get-user";

export default function ProfileSettings() {
 const { profile } = useUser();

 return (
  <Card>
   <CardHeader>
    <CardTitle className="flex items-center">
     <User className="w-5 h-5 mr-2 text-[#1B5E20]" />
     Personal Information
    </CardTitle>
    <CardDescription>
     Update your personal details and profile information
    </CardDescription>
   </CardHeader>
   <CardContent className="space-y-6">
    <div className="flex items-center space-x-6">
     <Avatar className="w-20 h-20">
      <AvatarFallback className="bg-[#1B5E20] text-white text-2xl">
       {profile?.first_name?.charAt(0)}
      </AvatarFallback>
     </Avatar>
     <div>
      <Button variant="outline">Change Photo</Button>
      <p className="text-sm text-gray-500 mt-1">
       JPG, PNG or GIF. Max size 2MB.
      </p>
     </div>
    </div>

    <ProfileForm />
   </CardContent>
  </Card>
 );
}
