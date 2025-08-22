"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import useUser from "@/hooks/get-user";
import { useActionState } from "react";
import { updatePractice } from "./actions";
import SubmitButton from "@/components/molecules/SubmitButton";
import { CheckCircle, AlertCircle } from "lucide-react";
import { practiceTypes } from "@/lib/constants";

const initialState = {
 error: "",
 message: "",
};

export default function PracticeForm() {
 const { practice } = useUser();
 const [state, formAction] = useActionState(updatePractice, initialState);

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

   <div>
    <Label htmlFor="practice_name">Practice/Clinic Name</Label>
    <Input
     id="practice_name"
     name="practice_name"
     defaultValue={practice?.clinic_name || ""}
     placeholder="Enter your practice or clinic name"
     required
    />
   </div>

   <div className="grid md:grid-cols-2 gap-4">
    <div>
     <Label htmlFor="type">Practice Type</Label>
     <Select name="type" defaultValue={practice?.type || ""}>
      <SelectTrigger>
       <SelectValue placeholder="Select practice type" />
      </SelectTrigger>
      <SelectContent>
       {practiceTypes.map((type) => (
        <SelectItem key={type.value} value={type.value}>
         {type.label}
        </SelectItem>
       ))}
      </SelectContent>
     </Select>
    </div>
    <div>
     <Label htmlFor="location">Location</Label>
     <Input
      id="location"
      name="location"
      defaultValue={practice?.location || ""}
      placeholder="Enter your practice location"
      required
     />
    </div>
   </div>

   <div>
    <Label htmlFor="license_number">Professional License Number</Label>
    <Input
     id="license_number"
     name="license_number"
     defaultValue={practice?.license_number || ""}
     placeholder="Enter your professional license number"
     required
    />
   </div>

   <div className="flex justify-end pt-4">
    <SubmitButton />
   </div>
  </form>
 );
}
