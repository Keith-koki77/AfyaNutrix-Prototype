"use client";

import type React from "react";

import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { ChefHat, CheckCircle } from "lucide-react";
import Link from "next/link";

import RegisterForm from "@/components/organisms/register/forms/RegisterForm";

export default function RegisterPage() {
 return (
  <div className="min-h-screen bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] flex items-center justify-center p-4">
   <Card className="w-full max-w-2xl">
    <CardHeader className="text-center">
     <div className="flex items-center justify-center space-x-2 mb-4">
      <div className="w-10 h-10 bg-[#1B5E20] rounded-lg flex items-center justify-center">
       <ChefHat className="w-6 h-6 text-white" />
      </div>
      <span className="text-2xl font-bold text-[#1B5E20]">AfyaNutrix</span>
     </div>
     <CardTitle className="text-2xl">Start Your Free Trial</CardTitle>
     <CardDescription>
      Join hundreds of Kenyan nutritionists transforming their practice
     </CardDescription>
    </CardHeader>
    <CardContent>
     <RegisterForm />

     <FreeTrial />

     <div className="mt-6 text-center">
      <p className="text-sm text-gray-600">
       Already have an account?{" "}
       <Link
        href="/login"
        className="text-[#1B5E20] hover:underline font-medium"
       >
        Sign in here
       </Link>
      </p>
     </div>
    </CardContent>
   </Card>
  </div>
 );
}

const FreeTrial = () => {
 return (
  <div className="mt-6">
   <div className="bg-green-50 border border-green-200 rounded-lg p-4">
    <h4 className="font-medium text-green-800 mb-2 flex items-center">
     <CheckCircle className="w-4 h-4 mr-2" />
     What&apos;s included in your free trial:
    </h4>
    <ul className="text-sm text-green-700 space-y-1">
     <li>• 14 days full access to all features</li>
     <li>• Up to 10 clients</li>
     <li>• Local Kenyan food database</li>
     <li>• SMS appointment reminders</li>
     <li>• DPA 2019 compliant data storage</li>
    </ul>
   </div>
  </div>
 );
};
