"use client";

import { useState } from "react";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ChefHat } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
 const [currentStep, setCurrentStep] = useState(1);
 const [formData, setFormData] = useState({
  // Practice Information
  practiceName: "",
  practiceType: "",
  yearsExperience: "",
  specializations: [],

  // Client Information
  averageClients: "",
  clientTypes: [],
  commonGoals: [],

  // Preferences
  preferredLanguage: "english",
  notifications: {
   email: true,
   sms: true,
   whatsapp: false,
  },

  // Goals
  primaryGoals: [],
  expectedOutcomes: "",
 });
 const router = useRouter();

 const totalSteps = 4;
 const progress = (currentStep / totalSteps) * 100;

 const handleNext = () => {
  if (currentStep < totalSteps) {
   setCurrentStep(currentStep + 1);
  } else {
   // Complete onboarding
   router.push("/dashboard");
  }
 };

 const handlePrevious = () => {
  if (currentStep > 1) {
   setCurrentStep(currentStep - 1);
  }
 };

 //eslint-disable-next-line @typescript-eslint/no-explicit-any
 const handleInputChange = (field: string, value: any) => {
  setFormData((prev) => ({ ...prev, [field]: value }));
 };

 const handleArrayToggle = (field: string, value: string) => {
  setFormData((prev) => ({
   ...prev,
   [field]: prev[field as keyof typeof prev].includes(value)
    ? (prev[field as keyof typeof prev] as string[]).filter(
       (item) => item !== value
      )
    : [...(prev[field as keyof typeof prev] as string[]), value],
  }));
 };

 return (
  <div className="min-h-screen bg-[#003B2C] flex items-center justify-center p-4">
   <Card className="w-full max-w-2xl">
    <CardHeader className="text-center">
     <div className="flex items-center justify-center space-x-2 mb-4">
      <div className="w-10 h-10 bg-[#003B2C] rounded-lg flex items-center justify-center">
       <ChefHat className="w-6 h-6 text-white" />
      </div>
      <span className="text-2xl font-bold text-[#1B5E20]">AfyaNutrix</span>
     </div>
     <CardTitle className="text-2xl">Welcome to AfyaNutrix!</CardTitle>
     <CardDescription>
      Let's set up your practice in just a few steps
     </CardDescription>
     <div className="mt-4">
      <Progress value={progress} className="w-full" />
      <p className="text-sm text-gray-500 mt-2">
       Step {currentStep} of {totalSteps}
      </p>
     </div>
    </CardHeader>
    <CardContent>
     {/* Step 1: Practice Information */}
     {currentStep === 1 && (
      <div className="space-y-6">
       <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
         Tell us about your practice
        </h3>
        <p className="text-gray-600">
         This helps us customize AfyaNutrix for your needs
        </p>
       </div>

       <div className="space-y-4">
        <div>
         <Label htmlFor="practiceName">Practice/Clinic Name</Label>
         <Input
          id="practiceName"
          placeholder="e.g., Amina Nutrition Clinic"
          value={formData.practiceName}
          onChange={(e) => handleInputChange("practiceName", e.target.value)}
         />
        </div>

        <div>
         <Label htmlFor="practiceType">Practice Type</Label>
         <Select
          onValueChange={(value) => handleInputChange("practiceType", value)}
         >
          <SelectTrigger>
           <SelectValue placeholder="Select your practice type" />
          </SelectTrigger>
          <SelectContent>
           <SelectItem value="solo">Solo Practitioner</SelectItem>
           <SelectItem value="small-clinic">
            Small Clinic (2-5 nutritionists)
           </SelectItem>
           <SelectItem value="large-clinic">
            Large Clinic (6+ nutritionists)
           </SelectItem>
           <SelectItem value="hospital">Hospital Department</SelectItem>
           <SelectItem value="ngo">NGO/Community Health</SelectItem>
          </SelectContent>
         </Select>
        </div>

        <div>
         <Label htmlFor="experience">Years of Experience</Label>
         <Select
          onValueChange={(value) => handleInputChange("yearsExperience", value)}
         >
          <SelectTrigger>
           <SelectValue placeholder="Select your experience level" />
          </SelectTrigger>
          <SelectContent>
           <SelectItem value="0-2">0-2 years</SelectItem>
           <SelectItem value="3-5">3-5 years</SelectItem>
           <SelectItem value="6-10">6-10 years</SelectItem>
           <SelectItem value="10+">10+ years</SelectItem>
          </SelectContent>
         </Select>
        </div>

        <div>
         <Label>Specializations (select all that apply)</Label>
         <div className="grid grid-cols-2 gap-3 mt-2">
          {[
           "Weight Management",
           "Diabetes Care",
           "Sports Nutrition",
           "Pediatric Nutrition",
           "Pregnancy Nutrition",
           "Heart Health",
          ].map((spec) => (
           <div key={spec} className="flex items-center space-x-2">
            <Checkbox
             id={spec}
             checked={formData.specializations.includes(spec)}
             onCheckedChange={() => handleArrayToggle("specializations", spec)}
            />
            <Label htmlFor={spec} className="text-sm">
             {spec}
            </Label>
           </div>
          ))}
         </div>
        </div>
       </div>
      </div>
     )}

     {/* Step 2: Client Information */}
     {currentStep === 2 && (
      <div className="space-y-6">
       <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
         About your clients
        </h3>
        <p className="text-gray-600">Help us understand your client base</p>
       </div>

       <div className="space-y-4">
        <div>
         <Label htmlFor="averageClients">
          How many clients do you see per month?
         </Label>
         <Select
          onValueChange={(value) => handleInputChange("averageClients", value)}
         >
          <SelectTrigger>
           <SelectValue placeholder="Select client volume" />
          </SelectTrigger>
          <SelectContent>
           <SelectItem value="1-10">1-10 clients</SelectItem>
           <SelectItem value="11-25">11-25 clients</SelectItem>
           <SelectItem value="26-50">26-50 clients</SelectItem>
           <SelectItem value="51-100">51-100 clients</SelectItem>
           <SelectItem value="100+">100+ clients</SelectItem>
          </SelectContent>
         </Select>
        </div>

        <div>
         <Label>Client Types (select all that apply)</Label>
         <div className="grid grid-cols-2 gap-3 mt-2">
          {[
           "Adults",
           "Children",
           "Pregnant Women",
           "Athletes",
           "Elderly",
           "Chronic Disease Patients",
          ].map((type) => (
           <div key={type} className="flex items-center space-x-2">
            <Checkbox
             id={type}
             checked={formData.clientTypes.includes(type)}
             onCheckedChange={() => handleArrayToggle("clientTypes", type)}
            />
            <Label htmlFor={type} className="text-sm">
             {type}
            </Label>
           </div>
          ))}
         </div>
        </div>

        <div>
         <Label>Most Common Client Goals</Label>
         <div className="grid grid-cols-2 gap-3 mt-2">
          {[
           "Weight Loss",
           "Weight Gain",
           "Diabetes Management",
           "Heart Health",
           "General Wellness",
           "Sports Performance",
          ].map((goal) => (
           <div key={goal} className="flex items-center space-x-2">
            <Checkbox
             id={goal}
             checked={formData.commonGoals.includes(goal)}
             onCheckedChange={() => handleArrayToggle("commonGoals", goal)}
            />
            <Label htmlFor={goal} className="text-sm">
             {goal}
            </Label>
           </div>
          ))}
         </div>
        </div>
       </div>
      </div>
     )}

     {/* Step 3: Preferences */}
     {currentStep === 3 && (
      <div className="space-y-6">
       <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
         Your preferences
        </h3>
        <p className="text-gray-600">Customize how AfyaNutrix works for you</p>
       </div>

       <div className="space-y-4">
        <div>
         <Label htmlFor="language">Preferred Language</Label>
         <Select
          onValueChange={(value) =>
           handleInputChange("preferredLanguage", value)
          }
         >
          <SelectTrigger>
           <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
           <SelectItem value="english">English</SelectItem>
           <SelectItem value="swahili">Kiswahili</SelectItem>
           <SelectItem value="both">Both English & Kiswahili</SelectItem>
          </SelectContent>
         </Select>
        </div>

        <div>
         <Label>Notification Preferences</Label>
         <div className="space-y-3 mt-2">
          <div className="flex items-center space-x-2">
           <Checkbox
            id="email-notifications"
            checked={formData.notifications.email}
            onCheckedChange={(checked) =>
             handleInputChange("notifications", {
              ...formData.notifications,
              email: checked,
             })
            }
           />
           <Label htmlFor="email-notifications" className="text-sm">
            Email notifications
           </Label>
          </div>
          <div className="flex items-center space-x-2">
           <Checkbox
            id="sms-notifications"
            checked={formData.notifications.sms}
            onCheckedChange={(checked) =>
             handleInputChange("notifications", {
              ...formData.notifications,
              sms: checked,
             })
            }
           />
           <Label htmlFor="sms-notifications" className="text-sm">
            SMS reminders
           </Label>
          </div>
          <div className="flex items-center space-x-2">
           <Checkbox
            id="whatsapp-notifications"
            checked={formData.notifications.whatsapp}
            onCheckedChange={(checked) =>
             handleInputChange("notifications", {
              ...formData.notifications,
              whatsapp: checked,
             })
            }
           />
           <Label htmlFor="whatsapp-notifications" className="text-sm">
            WhatsApp integration (coming soon)
           </Label>
          </div>
         </div>
        </div>
       </div>
      </div>
     )}

     {/* Step 4: Goals */}
     {currentStep === 4 && (
      <div className="space-y-6">
       <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
         Your goals with AfyaNutrix
        </h3>
        <p className="text-gray-600">What do you hope to achieve?</p>
       </div>

       <div className="space-y-4">
        <div>
         <Label>Primary Goals (select all that apply)</Label>
         <div className="grid grid-cols-1 gap-3 mt-2">
          {[
           "Reduce time spent on administrative tasks",
           "Improve client engagement and tracking",
           "Create professional meal plans quickly",
           "Better organize client information",
           "Increase practice efficiency",
           "Ensure data compliance and security",
          ].map((goal) => (
           <div key={goal} className="flex items-center space-x-2">
            <Checkbox
             id={goal}
             checked={formData.primaryGoals.includes(goal)}
             onCheckedChange={() => handleArrayToggle("primaryGoals", goal)}
            />
            <Label htmlFor={goal} className="text-sm">
             {goal}
            </Label>
           </div>
          ))}
         </div>
        </div>

        <div>
         <Label htmlFor="expectedOutcomes">
          What would success look like for you? (optional)
         </Label>
         <textarea
          id="expectedOutcomes"
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-[#1B5E20] focus:border-[#1B5E20]"
          rows={3}
          placeholder="e.g., Save 10 hours per week, improve client satisfaction, grow my practice..."
          value={formData.expectedOutcomes}
          onChange={(e) =>
           handleInputChange("expectedOutcomes", e.target.value)
          }
         />
        </div>
       </div>
      </div>
     )}

     {/* Navigation Buttons */}
     <div className="flex justify-between mt-8 pt-6 border-t">
      <button
       onClick={handlePrevious}
       disabled={currentStep === 1}
       className={`px-6 py-2 rounded-lg font-medium ${
        currentStep === 1
         ? "bg-gray-100 text-gray-400 cursor-not-allowed"
         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
       }`}
      >
       Previous
      </button>
      <button
       onClick={handleNext}
       className="px-6 py-2 bg-[#003B2C] text-white rounded-lg font-medium hover:bg-[#1B5E20]"
      >
       {currentStep === totalSteps ? "Complete Setup" : "Next"}
      </button>
     </div>
    </CardContent>
   </Card>
  </div>
 );
}
