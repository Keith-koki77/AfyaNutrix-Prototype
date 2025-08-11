"use client";

import { signup } from "@/app/(public)/register/actions";
import SubmitButton from "@/components/molecules/SubmitButton";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useActionState, useState } from "react";

const initialState = {
 message: "",
 error: "",
};

export default function RegisterForm() {
 const [showPassword, setShowPassword] = useState(false);
 const [state, formAction] = useActionState(signup, initialState);

 if (!state?.error && state?.message) {
  toast({
   title: "Success",
   description: state.message,
  });

  return (
   <div className="flex flex-col items-center justify-center py-10 md:py-20">
    <h1 className="text-2xl font-bold">Registration successful</h1>
    <p className="text-sm text-gray-600">
     Please check your email to confirm your account.
    </p>
   </div>
  );
 }

 if (state?.error) {
  toast({
   title: "Error",
   description: state.error,
  });
 }

 return (
  <form action={formAction} className="space-y-6">
   <div className="grid md:grid-cols-2 gap-4">
    <div className="space-y-2">
     <Label htmlFor="firstName">First Name</Label>
     <Input id="firstName" placeholder="Amina" name="firstName" required />
    </div>
    <div className="space-y-2">
     <Label htmlFor="lastName">Last Name</Label>
     <Input id="lastName" placeholder="Wanjiku" name="lastName" required />
    </div>
   </div>

   <div className="grid md:grid-cols-2 gap-4">
    <div className="space-y-2">
     <Label htmlFor="email">Email Address</Label>
     <Input
      id="email"
      type="email"
      placeholder="amina@example.com"
      name="email"
      required
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="phone">Phone Number</Label>
     <Input
      id="phone"
      type="tel"
      placeholder="+254 700 000 000"
      name="phone"
      required
     />
    </div>
   </div>

   <div className="grid md:grid-cols-2 gap-4">
    <div className="space-y-2">
     <Label htmlFor="practiceType">Practice Type</Label>
     <Select defaultValue="solo" name="practiceType">
      <SelectTrigger>
       <SelectValue placeholder="Select practice type" />
      </SelectTrigger>
      <SelectContent>
       <SelectItem value="solo">Solo Practitioner</SelectItem>
       <SelectItem value="clinic">Private Clinic</SelectItem>
       <SelectItem value="hospital">Hospital/Public Facility</SelectItem>
       <SelectItem value="ngo">NGO/Community Health</SelectItem>
      </SelectContent>
     </Select>
    </div>
    <div className="space-y-2">
     <Label htmlFor="location">Location</Label>
     <Select name="location" defaultValue="nairobi">
      <SelectTrigger>
       <SelectValue placeholder="Select location" />
      </SelectTrigger>
      <SelectContent>
       <SelectItem value="nairobi">Nairobi</SelectItem>
       <SelectItem value="mombasa">Mombasa</SelectItem>
       <SelectItem value="kisumu">Kisumu</SelectItem>
       <SelectItem value="eldoret">Eldoret</SelectItem>
       <SelectItem value="nakuru">Nakuru</SelectItem>
       <SelectItem value="other">Other</SelectItem>
      </SelectContent>
     </Select>
    </div>
   </div>

   <div className="grid md:grid-cols-2 gap-4">
    <div className="space-y-2">
     <Label htmlFor="password">Password</Label>
     <div className="relative">
      <Input
       id="password"
       type={showPassword ? "text" : "password"}
       placeholder="Create a strong password"
       name="password"
       required
      />
      <Button
       type="button"
       variant="ghost"
       size="sm"
       className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
       onClick={() => setShowPassword(!showPassword)}
      >
       {showPassword ? (
        <EyeOff className="h-4 w-4 text-gray-400" />
       ) : (
        <Eye className="h-4 w-4 text-gray-400" />
       )}
      </Button>
     </div>
    </div>
    <div className="space-y-2">
     <Label htmlFor="confirmPassword">Confirm Password</Label>
     <Input
      id="confirmPassword"
      type="password"
      placeholder="Confirm your password"
      name="confirmPassword"
      required
     />
    </div>
   </div>

   <div className="space-y-4">
    <div className="flex items-start space-x-2">
     <Checkbox id="terms" name="agreeTerms" required />
     <Label htmlFor="terms" className="text-sm leading-relaxed">
      I agree to the{" "}
      <Link href="/terms" className="text-[#1B5E20] hover:underline">
       Terms of Service
      </Link>{" "}
      and{" "}
      <Link href="/privacy" className="text-[#1B5E20] hover:underline">
       Privacy Policy
      </Link>
      . I understand my data will be processed in compliance with Kenya&apos;s
      DPA 2019.
     </Label>
    </div>
    <div className="flex items-start space-x-2">
     <Checkbox id="marketing" name="marketing" />
     <Label htmlFor="marketing" className="text-sm">
      I&apos;d like to receive updates about new features and nutrition practice
      tips
     </Label>
    </div>
   </div>

   <div>{state?.error && <p className="text-red-600">{state.error}</p>}</div>
   <SubmitButton content="Register" />
  </form>
 );
}
