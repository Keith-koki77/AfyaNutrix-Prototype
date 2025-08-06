import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useUser from "@/hooks/get-user";
import { User } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function ProfileSettings() {
 const { profile } = useUser();

 const handleChangeName = (name: string) => {
  return name;
 };
 return (
  <Card>
   <CardHeader>
    <CardTitle className="flex items-center">
     <User className="w-5 h-5 mr-2 text-nutrix-green" />
     Personal Information
    </CardTitle>
    <CardDescription>
     Update your personal details and profile information
    </CardDescription>
   </CardHeader>
   <CardContent className="space-y-6">
    <div className="flex items-center space-x-6">
     <Avatar className="w-20 h-20">
      <AvatarFallback className="bg-nutrix-green text-white text-2xl">
       {profile?.first_name}
       {profile?.last_name}
      </AvatarFallback>
     </Avatar>
     <div>
      <Button variant="outline">Change Photo</Button>
      <p className="text-sm text-gray-500 mt-1">
       JPG, PNG or GIF. Max size 2MB.
      </p>
     </div>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
     <div>
      <Label htmlFor="firstName">First Name</Label>
      <Input
       id="firstName"
       value={profile?.first_name ?? ""}
       onChange={(e) => handleChangeName(e.target.value)}
      />
     </div>
     <div>
      <Label htmlFor="lastName">Last Name</Label>
      <Input
       id="lastName"
       value={profile?.last_name ?? ""}
       onChange={(e) => handleChangeName(e.target.value)}
      />
     </div>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
     <div>
      <Label htmlFor="email">Email Address</Label>
      <Input
       id="email"
       type="email"
       value={profile?.email ?? ""}
       onChange={(e) => handleChangeName(e.target.value)}
      />
     </div>
     <div>
      <Label htmlFor="phone">Phone Number</Label>
      <Input
       id="phone"
       value={profile?.phone ?? ""}
       onChange={(e) => handleChangeName(e.target.value)}
      />
     </div>
    </div>

    <div>
     <Label htmlFor="bio">Professional Bio</Label>
     <Textarea id="bio" value={profile?.practice_type ?? ""} rows={3} />
    </div>

    <div className="grid md:grid-cols-2 gap-4">
     <div>
      <Label htmlFor="language">Preferred Language</Label>
      <Select value={""}>
       <SelectTrigger>
        <SelectValue />
       </SelectTrigger>
       <SelectContent>
        <SelectItem value="english">English</SelectItem>
        <SelectItem value="swahili">Kiswahili</SelectItem>
        <SelectItem value="both">Both</SelectItem>
       </SelectContent>
      </Select>
     </div>
     <div>
      <Label htmlFor="timezone">Timezone</Label>
      <Select value={""}>
       <SelectTrigger>
        <SelectValue />
       </SelectTrigger>
       <SelectContent>
        <SelectItem value="Africa/Nairobi">Africa/Nairobi (EAT)</SelectItem>
        <SelectItem value="Africa/Kampala">Africa/Kampala (EAT)</SelectItem>
        <SelectItem value="Africa/Dar_es_Salaam">
         Africa/Dar es Salaam (EAT)
        </SelectItem>
       </SelectContent>
      </Select>
     </div>
    </div>
   </CardContent>
  </Card>
 );
}
