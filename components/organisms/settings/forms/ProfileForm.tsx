"use client";

import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import useUser from "@/hooks/get-user";
import SubmitButton from "@/components/molecules/SubmitButton";
import { useActionState } from "react";
import { updateProfile } from "./actions";
import { CheckCircle, AlertCircle } from "lucide-react";
import { practiceTypes } from "@/lib/constants";

const initialState = {
 error: "",
 message: "",
};

export default function ProfileForm() {
 const { profile } = useUser();
 const [state, formAction] = useActionState(updateProfile, initialState);

 return (
  <form action={formAction} className="space-y-4">
   {/* Success Message */}
   {state?.message && (
    <Alert className="border-green-200 bg-green-50">
     <CheckCircle className="h-4 w-4 text-green-600" />
     <AlertDescription className="text-green-800">
      {state.message}
     </AlertDescription>
    </Alert>
   )}

   {/* Error Message */}
   {state?.error && (
    <Alert className="border-red-200 bg-red-50">
     <AlertCircle className="h-4 w-4 text-red-600" />
     <AlertDescription className="text-red-800">{state.error}</AlertDescription>
    </Alert>
   )}

   <div className="grid md:grid-cols-2 gap-4">
    <div>
     <Label htmlFor="first_name">First Name</Label>
     <Input
      id="first_name"
      name="first_name"
      defaultValue={profile?.first_name || ""}
      placeholder="Enter your first name"
      required
     />
    </div>
    <div>
     <Label htmlFor="last_name">Last Name</Label>
     <Input
      id="last_name"
      name="last_name"
      defaultValue={profile?.last_name || ""}
      placeholder="Enter your last name"
      required
     />
    </div>
   </div>

   <div className="grid md:grid-cols-2 gap-4">
    <div>
     <Label htmlFor="email">Email Address</Label>
     <Input
      id="email"
      name="email"
      type="email"
      disabled
      defaultValue={profile?.email}
      placeholder="Enter your email address"
     />
    </div>
    <div>
     <Label htmlFor="phone">Phone Number</Label>
     <Input
      id="phone"
      name="phone"
      defaultValue={profile?.phone || ""}
      placeholder="Enter your phone number"
      required
     />
    </div>
   </div>

   <div>
    <Label htmlFor="bio">Professional Bio</Label>
    <Textarea
     id="bio"
     name="bio"
     defaultValue={profile?.bio || ""}
     placeholder="Tell us about your professional background and expertise"
     rows={3}
     required
    />
   </div>

   <div className="grid md:grid-cols-2 gap-4">
    <div>
     <Label htmlFor="practice_type">Practice Type</Label>
     <Select defaultValue={profile?.practice_type || ""} name="practice_type">
      <SelectTrigger>
       <SelectValue placeholder="Select your practice type" />
      </SelectTrigger>
      <SelectContent>
       {practiceTypes?.map((type) => (
        <SelectItem key={type.value} value={type.value}>
         {type.label}
        </SelectItem>
       ))}
      </SelectContent>
     </Select>
    </div>
    <div>
     <Label htmlFor="language">Preferred Language</Label>
     <Select>
      <SelectTrigger>
       <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
       <SelectItem value="english">English</SelectItem>
       <SelectItem value="swahili">Kiswahili</SelectItem>
       <SelectItem value="both">Both</SelectItem>
      </SelectContent>
     </Select>
    </div>
   </div>

   <div className="flex justify-end pt-4">
    <SubmitButton />
   </div>
  </form>
 );
}
