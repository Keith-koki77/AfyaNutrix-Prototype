"use client";

import type React from "react";

import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ChefHat, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { login } from "./actions";
import SubmitButton from "@/components/molecules/SubmitButton";

const initialState = {
 message: "",
 error: "",
};

export default function LoginPage() {
 const [showPassword, setShowPassword] = useState(false);
 const [state, formAction] = useActionState(login, initialState);

 return (
  <div className="min-h-screen bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] flex items-center justify-center p-4">
   <Card className="w-full max-w-md">
    <CardHeader className="text-center">
     <div className="flex items-center justify-center space-x-2 mb-4">
      <div className="w-10 h-10 bg-[#1B5E20] rounded-lg flex items-center justify-center">
       <ChefHat className="w-6 h-6 text-white" />
      </div>
      <span className="text-2xl font-bold text-[#1B5E20]">AfyaNutrix</span>
     </div>
     <CardTitle className="text-2xl">Welcome Back</CardTitle>
     <CardDescription>
      Sign in to your nutrition practice dashboard
     </CardDescription>
    </CardHeader>
    <CardContent>
     <form action={formAction} className="space-y-4">
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
       <Label htmlFor="password">Password</Label>
       <div className="relative">
        <Input
         id="password"
         type={showPassword ? "text" : "password"}
         placeholder="Enter your password"
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
      <div className="flex items-center justify-between">
       <div className="flex items-center space-x-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className="text-sm">
         Remember me
        </Label>
       </div>
       <Link
        href="/forgot-password"
        className="text-sm text-[#1B5E20] hover:underline"
       >
        Forgot password?
       </Link>
      </div>

      <div>
       {state?.message && <p className="text-green-600">{state.message}</p>}
       {state?.error && <p className="text-red-600">{state.error}</p>}
      </div>
      <SubmitButton content="Login" />
     </form>
     <div className="mt-6 text-center">
      <p className="text-sm text-gray-600">
       Don't have an account?{" "}
       <Link
        href="/register"
        className="text-[#1B5E20] hover:underline font-medium"
       >
        Start your free trial
       </Link>
      </p>
     </div>
    </CardContent>
   </Card>
  </div>
 );
}
