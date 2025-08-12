"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import {
 CheckCircle,
 Users,
 Calendar,
 ChefHat,
 BarChart3,
 MessageSquare,
 Smartphone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Shield, Lock, MapPin, Download } from "lucide-react";

type BillingPeriod = "monthly" | "quarterly" | "yearly";

const plans = [
 {
  title: "Starter",
  price: { monthly: "KES 1,500", quarterly: "KES 1,275", yearly: "KES 1,125" },
  originalPrice: { monthly: null, quarterly: "KES 1,500", yearly: "KES 1,500" },
  desc: "Perfect for individual nutritionists starting their digital learning",
  features: [
   "Up to 20 clients",
   "Basic client profiles",
   "Meal plan upload (PDF)",
   "Manual client notes",
   "Basic progress tracking",
   "Email support",
  ],
  color: "gray",
  recommended: false,
 },
 {
  title: "Solo Plan",
  price: { monthly: "KES 2,500", quarterly: "KES 2,125", yearly: "KES 1,875" },
  originalPrice: { monthly: null, quarterly: "KES 2,500", yearly: "KES 2,500" },
  desc: "Ideal for established practitioners with growing client base",
  features: [
   "Up to 100 clients",
   "Advanced client profiles",
   "Meal plan builder",
   "Secure client notes",
   "Detailed progress tracking",
   "Priority email support",
   "Integrations (e.g., calendar)",
  ],
  color: "emerald",
  recommended: false,
 },
 {
  title: "Pro Plan",
  price: { monthly: "KES 5,000", quarterly: "KES 4,250", yearly: "KES 3,750" },
  originalPrice: { monthly: null, quarterly: "KES 5,000", yearly: "KES 5,000" },
  desc: "Perfect for small clinics and team practices",
  features: [
   "Unlimited clients",
   "Team management",
   "Customizable branding",
   "HIPAA/GDPR compliance",
   "Dedicated account manager",
   "API access",
   "Onboarding and training",
  ],
  color: "blue",
  recommended: true,
 },
 {
  title: "Enterprise",
  price: { monthly: "Custom", quarterly: "Custom", yearly: "Custom" },
  originalPrice: { monthly: null, quarterly: null, yearly: null },
  desc: "Tailored solutions for large organizations and hospitals",
  features: [
   "Custom features",
   "SLA & dedicated support",
   "On-premise deployment",
   "Single Sign-On (SSO)",
   "Advanced analytics",
   "Regulatory compliance",
   "24/7 phone support",
  ],
  color: "purple",
  recommended: false,
 },
];
export function PricingSection() {
 return null;
}

export default function LandingPage() {
 const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("quarterly");

 const getSavingsText = (period: BillingPeriod) => {
  if (period === "quarterly") return "Save 15%";
  if (period === "yearly") return "Save 25%";
  return "";
 };
 return (
  <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
   {/* Header */}
   <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300 ease-in-out">
    <div className="container mx-auto px-6 py-4 lg:px-8 flex items-center justify-between h-16">
     {/* Logo Section */}
     <Link href="/" className="flex items-center space-x-2">
      <div className="w-9 h-9 bg-[#1B5E20] rounded-xl flex items-center justify-center shadow-md">
       <ChefHat className="w-5 h-5 text-white" />
      </div>
      <span className="text-2xl font-extrabold text-[#003B2C] tracking-tight">
       AfyaNutrix
      </span>
     </Link>

     {/* Primary Navigation - Centered on larger screens */}
     <nav className="hidden md:flex flex-grow justify-center items-center space-x-8 lg:space-x-10">
      <Link
       href="/#features"
       className="text-gray-700 text-lg font-medium hover:text-[#1B5E20] transition-colors duration-200 relative group"
      >
       Features
       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1B5E20] transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link
       href="/pricing"
       className="text-gray-700 text-lg font-medium hover:text-[#1B5E20] transition-colors duration-200 relative group"
      >
       Pricing
       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1B5E20] transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link
       href="/aboutus"
       className="text-gray-700 text-lg font-medium hover:text-[#1B5E20] transition-colors duration-200 relative group"
      >
       About Us
       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1B5E20] transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link
       href="/faqs"
       className="text-gray-700 text-lg font-medium hover:text-[#1B5E20] transition-colors duration-200 relative group"
      >
       FAQs
       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1B5E20] transition-all duration-300 group-hover:w-full"></span>
      </Link>
     </nav>

     {/* Action Buttons */}
     <div className="flex items-center space-x-3">
      <Link href="/login">
       <Button
        variant="ghost"
        className="text-[#003B2C] hover:bg-gray-100 text-base font-medium px-4 py-2 rounded-lg transition-colors duration-200"
       >
        Sign In
       </Button>
      </Link>
      <Link href="/register">
       <Button className="bg-[#003B2C] hover:bg-[#002B1F] text-white font-semibold text-base px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out">
        Get Started
       </Button>
      </Link>
     </div>
    </div>
   </header>

   {/* Hero Section */}
   <section className="relative py-20 px-6 bg-gradient-to-br from-[#003B2C] via-[#003B2C]-200 to-[#003B2C] text-white overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>

    <div className="container mx-auto max-w-7xl relative">
     <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left: Headline & Text */}
      <div className="text-left max-w-2xl">
       {/* Status Badge */}
       <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#AED581]/10 border border-[#AED581]/20 text-[#AED581] text-sm font-medium mb-8">
        <span className="w-2 h-2 bg-[#AED581] rounded-full mr-2 animate-pulse"></span>
        Now in Early Access
       </div>

       <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
        Manage Clients.
        <br />
        Track Progress.
        <br />
        <span className="bg-gradient-to-r from-[#AED581] to-[#AED581] bg-clip-text text-transparent">
         Save Time.
        </span>
       </h1>

       <p className="text-xl md:text-2xl text-slate-300 font-medium mb-4 leading-relaxed">
        The complete practice management platform built for African
        Nutritionists.
       </p>

       <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-xl">
        Replace WhatsApp chaos and spreadsheet fatigue with a unified platform
        that handles client management, progress tracking, and automated
        workflows — all while maintaining DPA 2019 compliance.
       </p>

       <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Link href="/register">
         <button className="bg-[#9CCC65] hover:from-emerald-600 hover:bg-[#F4F5F6] px-8 py-4 rounded-xl font-bold text-[#003B2C] shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
          Start Your Free Trial
         </button>
        </Link>
        <Link href="/pricing">
         <button className="bg-[#F4F5F6] hover:bg-[#9CCC65] px-8 py-4 rounded-xl font-bold text-[#003B2C] shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
          View Pricing
         </button>
        </Link>
       </div>

       {/* Trust Indicators */}
       <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
        <div className="flex items-center gap-2">
         <svg
          className="w-4 h-4 text-emerald-500"
          fill="currentColor"
          viewBox="0 0 20 20"
         >
          <path
           fillRule="evenodd"
           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
           clipRule="evenodd"
          />
         </svg>
         <span>No credit card required</span>
        </div>
        <div className="flex items-center gap-2">
         <svg
          className="w-4 h-4 text-emerald-500"
          fill="currentColor"
          viewBox="0 0 20 20"
         >
          <path
           fillRule="evenodd"
           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
           clipRule="evenodd"
          />
         </svg>
         <span>14-day free trial</span>
        </div>
        <div className="flex items-center gap-2">
         <svg
          className="w-4 h-4 text-emerald-500"
          fill="currentColor"
          viewBox="0 0 20 20"
         >
          <path
           fillRule="evenodd"
           d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
           clipRule="evenodd"
          />
         </svg>
         <span>DPA 2019 compliant</span>
        </div>
       </div>
      </div>

      {/* Right: Phone Mockup */}
      <div className="flex justify-center lg:justify-end">
       <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#AED581] to-[#AED581] rounded-3xl blur-2xl transform scale-110"></div>
        {/* Phone Container */}
        <div className="relative w-[280px] sm:w-[320px] md:w-[360px] bg-gradient-to-br from-[#003B2C] to-[#003B2C]  rounded-3xl p-2 shadow-2xl border border-slate-700">
         <div className="rounded-2xl overflow-hidden">
          <Image
           src="https://res.cloudinary.com/drxurk7lu/image/upload/v1753168682/afyanutrix/Untitled_design__2_-removebg-preview-1_zkfy2i.png"
           alt="AfyaNutrix mobile interface"
           className="w-full h-auto object-cover"
           height={640}
           width={360}
          />
         </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
        <div
         className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse"
         style={{ animationDelay: "1s" }}
        ></div>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* Problem Statement */}
   <section className="py-20 px-4 bg-gradient-to-br from-[#AED581] via-white to-[#AED581] relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 opacity-20">
     <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
     <div
      className="absolute bottom-20 right-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
      style={{ animationDelay: "1s" }}
     ></div>
    </div>

    <div className="container mx-auto max-w-6xl text-center relative z-10">
     <div className="mb-12">
      <div className="inline-flex items-center px-4 py-2 bg-[#003B2C] text-[#AED581] rounded-full text-sm font-medium mb-4">
       <span className="w-2 h-2 bg-[#AED581] rounded-full mr-2 animate-pulse"></span>
       Transforming Nutrition Practice
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
       The Reality of Nutrition Practice
       <span className="block text-[#003B2C] mt-2">in Kenya</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
       Modern solutions for the challenges facing today&apos;s nutrition
       professionals
      </p>
     </div>

     <div className="grid lg:grid-cols-2 gap-8">
      <Card className="border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
       <div className="h-2 bg-gradient-to-r from-red-400 to-red-600"></div>
       <CardHeader className="bg-gradient-to-br from-red-50 to-red-100 pb-6">
        <div className="flex items-center space-x-3">
         <div className="p-2 bg-red-500 rounded-lg shadow-md">
          <svg
           className="w-6 h-6 text-white"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
          >
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
           />
          </svg>
         </div>
         <div className="text-left">
          <CardTitle className="text-red-800 text-2xl">
           Current Challenges
          </CardTitle>
          <p className="text-red-600 text-sm mt-1">
           Pain points in traditional practice
          </p>
         </div>
        </div>
       </CardHeader>
       <CardContent className="space-y-4 p-6">
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors duration-200">
         <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0 shadow-sm"></div>
         <span className="text-gray-700 font-medium">
          WhatsApp consultations chaos
         </span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors duration-200">
         <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0 shadow-sm"></div>
         <span className="text-gray-700 font-medium">
          Paper files and Excel burnout
         </span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors duration-200">
         <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0 shadow-sm"></div>
         <span className="text-gray-700 font-medium">
          Guessing nutritional values
         </span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors duration-200">
         <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0 shadow-sm"></div>
         <span className="text-gray-700 font-medium">
          Non-compliant data storage
         </span>
        </div>
       </CardContent>
      </Card>

      <Card className="border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
       <div className="h-2 bg-gradient-to-r from-[#003B2C] to-emerald-600"></div>
       <CardHeader className="bg-gradient-to-br from-[#003B2C]/50 to-[#003B2C]/100 pb-6">
        <div className="flex items-center space-x-3">
         <div className="p-2 bg-[#003B2C] rounded-lg shadow-md">
          <CheckCircle className="w-6 h-6 text-white" />
         </div>
         <div className="text-left">
          <CardTitle className="text-[#003B2C] text-2xl">
           AfyaNutrix Solution
          </CardTitle>
          <p className="text-[#003B2C] text-sm mt-1">
           Modern tools for modern practitioners
          </p>
         </div>
        </div>
       </CardHeader>
       <CardContent className="space-y-4 p-6">
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
         <CheckCircle className="w-5 h-5 text-[#003B2C] flex-shrink-0" />
         <span className="text-gray-700 font-bold">
          Secure, encrypted client portal
         </span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
         <CheckCircle className="w-5 h-5 text-[#003B2C] flex-shrink-0" />
         <span className="text-gray-700 font-bold">
          Automated workflows & reminders
         </span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
         <CheckCircle className="w-5 h-5 text-[#003B2C] flex-shrink-0" />
         <span className="text-gray-700 font-bold">
          Indigenous Kenyan food database
         </span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
         <CheckCircle className="w-5 h-5 text-[#003B2C] flex-shrink-0" />
         <span className="text-gray-700 font-bold">
          DPA 2019 compliant by default
         </span>
        </div>
       </CardContent>
      </Card>
     </div>
    </div>
   </section>

   {/* Features Section */}
   <section
    id="features"
    className="py-24 px-4 bg-gradient-to-b from-slate-50 to-[#AED581]-500"
   >
    <div className="container mx-auto max-w-7xl">
     {/* Header */}
     <div className="text-center mb-20">
      <div className="inline-flex items-center px-4 py-2 bg-[#003B2C] text-[#AED581] rounded-full text-sm font-medium mb-6">
       <span className="w-2 h-2 bg-[#AED581] rounded-full mr-2"></span>
       Platform Features
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
       Everything you need to run a
       <span className="block text-[#003B2C]">modern practice</span>
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
       Built specifically for African nutritionists, with local foods, cultural
       context, and compliance built-in from day one.
      </p>
     </div>

     {/* Features Grid */}
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Client Management */}
      <Card className="group relative bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
       <CardHeader className="relative p-8">
        <div className="w-12 h-12 bg-[#AED581] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
         <Users className="w-6 h-6 text-[#1B5E20]" />
        </div>
        <CardTitle className="text-xl font-semibold text-slate-900 mb-3">
         Client Management
        </CardTitle>
        <CardDescription className="text-slate-600 leading-relaxed">
         Comprehensive client profiles with medical history, goals, and
         DPA-compliant secure data storage.
        </CardDescription>
       </CardHeader>
      </Card>

      {/* Smart Scheduling */}
      <Card className="group relative bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
       <CardHeader className="relative p-8">
        <div className="w-12 h-12 bg-[#AED581] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
         <Calendar className="w-6 h-6 text-[#1B5E20]" />
        </div>
        <CardTitle className="text-xl font-semibold text-slate-900 mb-3">
         Smart Scheduling
        </CardTitle>
        <CardDescription className="text-slate-600 leading-relaxed">
         Automated appointment reminders via SMS and WhatsApp integration with
         intelligent follow-ups.
        </CardDescription>
       </CardHeader>
      </Card>

      {/* Local Meal Planning */}
      <Card className="group relative bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
       <CardHeader className="relative p-8">
        <div className="w-12 h-12 bg-[#AED581] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
         <ChefHat className="w-6 h-6 text-[#1B5E20]" />
        </div>
        <CardTitle className="text-xl font-semibold text-slate-900 mb-3">
         Local Meal Planning
        </CardTitle>
        <CardDescription className="text-slate-600 leading-relaxed">
         Comprehensive indigenous Kenyan foods database with accurate
         nutritional data and cultural context.
        </CardDescription>
       </CardHeader>
      </Card>

      {/* Nutrition Analytics */}
      <Card className="group relative bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
       <CardHeader className="relative p-8">
        <div className="w-12 h-12 bg-[#AED581] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
         <BarChart3 className="w-6 h-6 text-[#1B5E20]" />
        </div>
        <CardTitle className="text-xl font-semibold text-slate-900 mb-3">
         Nutrition Analytics
        </CardTitle>
        <CardDescription className="text-slate-600 leading-relaxed">
         Auto-calculate macros, micros, and RDA matching with comprehensive
         visual reports and insights.
        </CardDescription>
       </CardHeader>
      </Card>

      {/* Food Diary */}
      <Card className="group relative bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
       <CardHeader className="relative p-8">
        <div className="w-12 h-12 bg-[#AED581] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
         <Smartphone className="w-6 h-6 text-[#1B5E20]" />
        </div>
        <CardTitle className="text-xl font-semibold text-slate-900 mb-3">
         Food Diary
        </CardTitle>
        <CardDescription className="text-slate-600 leading-relaxed">
         Client photo logging, symptom tracking, and real-time feedback with
         intelligent pattern recognition.
        </CardDescription>
       </CardHeader>
      </Card>

      {/* Secure Messaging */}
      <Card className="group relative bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
       <CardHeader className="relative p-8">
        <div className="w-12 h-12 bg-[#AED581] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
         <MessageSquare className="w-6 h-6 text-[#1B5E20]" />
        </div>
        <CardTitle className="text-xl font-bold text-slate-900 mb-3">
         Secure Messaging
        </CardTitle>
        <CardDescription className="text-slate-600 leading-relaxed">
         End-to-end encrypted communication platform replacing non-compliant
         WhatsApp conversations.
        </CardDescription>
       </CardHeader>
      </Card>
     </div>

     {/* Bottom CTA */}
     <div className="text-center mt-16">
      <p className="text-slate-600 mb-6">Ready to transform your practice?</p>
      <Link href="/register">
       <button className="bg-[#003B2C] hover:bg-[#1B5E20] px-8 py-4 rounded-xl font-bold text-[#F4F5F6] shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
        Start Your Free Trial
       </button>
      </Link>
     </div>
    </div>
   </section>

   {/* Testimonials */}
   <section className="py-24 px-4 bg-gradient-to-br from-[#003B2C] via-[#003B2C] to-[#003B2C] text-white relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1B5E20] via-transparent to-transparent"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>

    <div className="container mx-auto max-w-6xl text-center relative z-10">
     {/* Header */}
     <div className="max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center px-4 py-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full mb-6">
       <span className="text-sm font-medium text-[#9CCC65]">
        ⭐ Trusted Worldwide
       </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
       Loved by
       <span className="text-transparent bg-clip-text bg-[#9CCC65] ">
        {" "}
        2,000+ Nutritionists
       </span>
       <br />
       Across Kenya
      </h2>
      <p className="text-xl text-gray-300 leading-relaxed">
       Join the community of professionals transforming their practice with
       AfyaNutrix
      </p>
     </div>

     {/* Stats Bar */}
     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
      <div className="text-center">
       <div className="text-3xl font-bold text-[#9CCC65]  mb-2">2,000+</div>
       <div className="text-sm text-gray-400">Active Users</div>
      </div>
      <div className="text-center">
       <div className="text-3xl font-bold text-[#9CCC65] mb-2">4.9/5</div>
       <div className="text-sm text-gray-400">Average Rating</div>
      </div>
      <div className="text-center">
       <div className="text-3xl font-bold text-[#9CCC65] mb-2">50K+</div>
       <div className="text-sm text-gray-400">Clients Served</div>
      </div>
      <div className="text-center">
       <div className="text-3xl font-bold text-[#9CCC65] mb-2">98%</div>
       <div className="text-sm text-gray-400">Retention Rate</div>
      </div>
     </div>

     {/* Testimonials Grid */}
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {[
       {
        name: "Amina Wanjiku",
        role: "Solo Nutritionist",
        location: "Nairobi",
        avatar: "A",
        rating: 5,
        testimonial:
         "AfyaNutrix saved me 10 hours per week. No more WhatsApp chaos, and my clients love the meal plans with local foods they actually eat. The automated reminders alone have improved my client retention by 40%.",
        metric: "10 hrs/week saved",
       },
       {
        name: "Dr. Kendi Mwangi",
        role: "Clinic Owner",
        location: "Mombasa",
        avatar: "K",
        rating: 5,
        testimonial:
         "Managing 5 nutritionists was a nightmare. Now I have full visibility into our clinic operations and client engagement metrics. Our revenue increased by 35% in just 3 months.",
        metric: "35% revenue increase",
       },
       {
        name: "Sarah Njeri",
        role: "Clinical Nutritionist",
        location: "Kisumu",
        avatar: "S",
        rating: 5,
        testimonial:
         "The WhatsApp integration changed everything. My clients get automated meal reminders, and I can track their progress in real-time. Client satisfaction scores went from 3.2 to 4.8.",
        metric: "4.8/5 client satisfaction",
       },
      ].map((testimonial, idx) => (
       <Card
        key={idx}
        className="bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1"
       >
        <CardContent className="p-8">
         {/* Rating Stars */}
         <div className="flex items-center justify-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
           <span key={i} className="text-amber-400 text-lg">
            ⭐
           </span>
          ))}
         </div>

         {/* Quote Icon */}
         <div className="text-[#F4F5F6] text-6xl leading-none mb-4 font-serif">
          &quot;
         </div>

         {/* Testimonial Text */}
         <p className="text-[#F4F5F6] leading-relaxed mb-6 italic">
          {testimonial.testimonial}
         </p>

         {/* Metric Highlight */}
         <div className="bg-emerald-400/10 border border-emerald-400/20 rounded-lg px-4 py-2 mb-6">
          <span className="text-[#9CCC65] font-semibold text-sm">
           📈 {testimonial.metric}
          </span>
         </div>

         {/* Profile */}
         <div className="flex items-center justify-center space-x-4">
          <div className="relative">
           <div className="w-14 h-14 bg-[#1B5E20] rounded-full flex items-center justify-center shadow-lg">
            <span className="font-bold text-[#9CCC65] text-lg">
             {testimonial.avatar}
            </span>
           </div>
           <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#F4F5F6] rounded-full flex items-center justify-center">
            <span className="text-slate-900 text-xs">✓</span>
           </div>
          </div>
          <div className="text-left">
           <p className="font-semibold text-lg text-[#F4F5F6]">
            {testimonial.name}
           </p>
           <p className="text-[#9CCC65]  text-sm font-medium">
            {testimonial.role}
           </p>
           <p className="text-gray-400 text-sm">{testimonial.location}</p>
          </div>
         </div>
        </CardContent>
       </Card>
      ))}
     </div>

     {/* Social Proof Logos */}
     {/*<div className="border-t border-white/10 pt-12">
            <p className="text-gray-400 mb-8 text-sm">
              Trusted by leading healthcare institutions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-semibold">
                  Kenyatta Hospital
                </span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-semibold">
                  Aga Khan University
                </span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-semibold">
                  Moi Teaching Hospital
                </span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-semibold">
                  Nairobi Hospital
                </span>
              </div>
            </div>
          </div>*/}

     {/* CTA */}
     <div className="mt-16">
      <p className="text-gray-300 mb-6">
       Join thousands of nutritionists transforming their practice
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
       <Link href="/register">
        <button className="bg-[#9CCC65] hover:from-emerald-600 hover:bg-[#F4F5F6] px-8 py-4 rounded-xl font-bold text-[#003B2C] shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
         Start Your Free Trial
        </button>
       </Link>
       <Link href="#">
        <button className="border border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/5 transition-all duration-200">
         View Success Stories
        </button>
       </Link>
      </div>
     </div>
    </div>
   </section>

   {/* PRICING */}
   <section
    id="pricing"
    className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden"
   >
    {/* Background Elements */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent"></div>
    <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"></div>

    <div className="container mx-auto max-w-screen-xl text-center relative z-10">
     {/* Header */}
     <div className="max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center px-4 py-2 bg-[#003B2C] text-[#9CCC65] border border-[#AED581] rounded-full mb-6">
       <span className="text-sm font-medium text-[#AED581]">
        💚 Transparent Pricing
       </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
       Choose Your Perfect
       <span className="text-transparent bg-clip-text bg-[#003B2C]">
        {" "}
        Growth Plan
       </span>
      </h2>
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
       Scalable solutions designed for nutrition professionals at every stage of
       their journey
      </p>

      {/* Billing Toggle */}
      <div className="flex items-center justify-center mb-8">
       <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-2 shadow-lg">
        <div className="flex items-center space-x-1">
         <button
          onClick={() => setBillingPeriod("monthly")}
          className={`px-6 py-3 text-sm font-bold rounded-xl transition-all ${
           billingPeriod === "monthly"
            ? "bg-[#003B2C] text-white shadow-md"
            : "text-gray-600 hover:text-gray-900"
          }`}
         >
          Monthly
         </button>
         <button
          onClick={() => setBillingPeriod("quarterly")}
          className={`px-6 py-3 text-sm font-bold rounded-xl transition-all relative ${
           billingPeriod === "quarterly"
            ? "bg-[#003B2C] text-white shadow-md"
            : "text-gray-600 hover:text-gray-900"
          }`}
         >
          Quarterly
          <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
           Save 15%
          </span>
         </button>
         <button
          onClick={() => setBillingPeriod("yearly")}
          className={`px-6 py-3 text-sm font-bold rounded-xl transition-all relative ${
           billingPeriod === "yearly"
            ? "bg-[#003B2C] text-white shadow-md"
            : "text-gray-600 hover:text-gray-900"
          }`}
         >
          Yearly
          <span className="absolute -top-1 -right-1 text-xs bg-[#9CCC65] text-white px-2 py-1 rounded-full">
           Save 25%
          </span>
         </button>
        </div>
       </div>
      </div>
     </div>

     {/* Pricing Cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {plans.map((plan, idx) => (
       <Card
        key={idx}
        className={`relative group transition-all duration-300 hover:-translate-y-2 ${
         plan.recommended
          ? "border-2 border-[#003B2C] shadow-2xl shadow-amber-100/50 scale-105"
          : "border border-gray-200 hover:border-[#9CCC65] hover:shadow-xl"
        } bg-white/80 backdrop-blur-sm`}
       >
        {plan.recommended && (
         <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-[#003B2C] to-[#003B2C] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
           ⭐ Most Popular
          </div>
         </div>
        )}

        {/* Card Header */}
        <CardHeader className="pb-2">
         <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-xl font-semibold text-gray-900">
           {plan.title}
          </CardTitle>
          <div
           className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            plan.color === "amber"
             ? "bg-[#9CCC65] "
             : plan.color === "emerald"
             ? "bg-[#9CCC65] "
             : plan.color === "slate"
             ? "bg-[#9CCC65]"
             : "bg-[#9CCC65]"
           }`}
          >
           {plan.color === "amber" && (
            <span className="text-[#003B2C] text-xl">🚀</span>
           )}
           {plan.color === "emerald" && (
            <span className="text-[#1B5E20] text-xl">🌱</span>
           )}
           {plan.color === "slate" && (
            <span className="text-slate-600 text-xl">🏢</span>
           )}
           {plan.color === "gray" && (
            <span className="text-gray-600 text-xl">⭐</span>
           )}
          </div>
         </div>

         <div className="text-left">
          <div className="flex items-baseline mb-2">
           <span className="text-4xl font-bold text-gray-900">
            {plan.price[billingPeriod]}
           </span>
           {plan.price[billingPeriod] !== "Custom" && (
            <span className="text-gray-500 ml-2">/month</span>
           )}
          </div>
          {plan.originalPrice[billingPeriod] && billingPeriod !== "monthly" && (
           <div className="flex items-center mb-2">
            <span className="text-lg text-gray-400 line-through mr-2">
             {plan.originalPrice[billingPeriod]}
            </span>
            <span className="text-sm bg-[#9CCC65] text-[#003B2C] px-2 py-1 rounded-full font-medium">
             {getSavingsText(billingPeriod)}
            </span>
           </div>
          )}
          <CardDescription className="text-gray-600 leading-relaxed">
           {plan.desc}
          </CardDescription>
         </div>
        </CardHeader>

        {/* Card Content */}
        <CardContent className="pt-6">
         <ul className="space-y-4 text-left mb-8">
          {plan.features.map((feature, featureIdx) => (
           <li key={featureIdx} className="flex items-start space-x-3">
            <CheckCircle className="mt-0.5 w-5 h-5 text-[#003B2C] flex-shrink-0" />
            <span className="text-sm text-gray-700 leading-relaxed">
             {feature}
            </span>
           </li>
          ))}
         </ul>

         <Button
          className={`w-full py-3 font-bold transition-all duration-200 ${
           plan.recommended
            ? "bg-gradient-to-r from-[#003B2C] to-[#003B2C] hover:from-[#1B5E20] hover:to-[#1B5E20] text-white shadow-lg hover:shadow-xl"
            : "bg-white border-2 border-gray-200 text-[#003B2C] hover:bg-gray-50 hover:border-[#003B2C]"
          }`}
         >
          {plan.price[billingPeriod] === "Custom"
           ? "Contact Sales"
           : "Start Free Trial"}
         </Button>
        </CardContent>
       </Card>
      ))}
     </div>

     {/* Bottom CTA */}
     <div className="mt-16 text-center">
      <p className="text-gray-600 mb-4">
       All plans include a 14-day free trial • No credit card required • Cancel
       anytime
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
       <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-[#003B2C] rounded-full"></span>
        <span>99.9% uptime guarantee</span>
       </div>
       <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-[#003B2C] rounded-full"></span>
        <span>Bank-level security</span>
       </div>
       <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-[#003B2C] rounded-full"></span>
        <span>24/7 support</span>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* Professional FAQ Section */}
   <section className="py-20 px-4 bg-gradient-to-br from-[#AED581] via-white to-[#AED581] relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 opacity-20">
     <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
     <div
      className="absolute bottom-20 right-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
      style={{ animationDelay: "1s" }}
     ></div>
    </div>

    <div className="relative container mx-auto max-w-5xl">
     {/* Section Header */}
     <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 bg-[#003B2C] text-[#9CCC65] border border-[#AED581] rounded-full mb-6">
       <span className="w-2 h-2 bg-[#9CCC65] rounded-full mr-2"></span>
       Questions & Answers
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
       Frequently Asked
       <span className="block text-[#1B5E20] bg-clip-text">Questions</span>
      </h2>
      <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
       Everything you need to know about AfyaNutrix - from security and
       compliance to features and pricing. Can&apos;t find what you&apos;re
       looking for?
       <a
        href="/contact"
        className="text-emerald-600 hover:text-emerald-700 font-medium ml-1"
       >
        Contact our team
       </a>
       .
      </p>
     </div>

     {/* Privacy & Security FAQ - Featured Section */}
     <div className="mb-16">
      <div className="bg-[#003B2C] rounded-2xl p-8 text-white mb-8">
       <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-[#9CCC65] rounded-lg flex items-center justify-center mr-3">
         <Shield className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold">Privacy & Data Security</h3>
       </div>
       <p className="text-white mb-6">
        Your clients&apos; trust is paramount. Here&apos;s how we protect their
        data.
       </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
       <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-[#9CCC65] rounded-lg flex items-center justify-center mb-4">
         <Lock className="w-6 h-6 text-[#1B5E20]" />
        </div>
        <h4 className="font-semibold text-gray-900 mb-3">
         Will my clients&apos; data be sold or shared?
        </h4>
        <p className="text-gray-600 leading-relaxed">
         <strong>Never.</strong> Only you and your authorized team can access
         client data. We don&apos;t sell, share, or mine your clients&apos;
         information under any circumstances.
        </p>
       </div>

       <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-[#9CCC65] rounded-lg flex items-center justify-center mb-4">
         <MapPin className="w-6 h-6 text-[#1B5E20]" />
        </div>
        <h4 className="font-semibold text-gray-900 mb-3">
         Where is my data stored?
        </h4>
        <p className="text-gray-600 leading-relaxed">
         In secure, encrypted servers located in <strong>Africa</strong>, fully
         compliant with Kenya&apos;s Data Protection Act (DPA 2019) and
         international security standards.
        </p>
       </div>

       <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-[#9CCC65] rounded-lg flex items-center justify-center mb-4">
         <Download className="w-6 h-6 text-[#1B5E20]" />
        </div>
        <h4 className="font-semibold text-gray-900 mb-3">
         Can I delete a client&apos;s data if they ask?
        </h4>
        <p className="text-gray-600 leading-relaxed">
         <strong>Yes, instantly.</strong> You can fully export or permanently
         delete any client&apos;s data in just 2 clicks, ensuring complete GDPR
         and DPA compliance.
        </p>
       </div>
      </div>
     </div>

     {/* Main FAQ Section */}
     <div className="space-y-4">
      {[
       {
        category: "Platform Overview",
        question: "What exactly is AfyaNutrix?",
        answer:
         "AfyaNutrix is a comprehensive digital toolkit and private practice operating system designed specifically for African nutritionists. It helps you manage clients, generate culturally-relevant meal plans, track patient outcomes, and automate follow-ups—all from one integrated platform built with African foods, workflows, and healthcare contexts in mind.",
       },
       {
        category: "Features",
        question: "Is AfyaNutrix just a meal planning app?",
        answer:
         "No. It's a complete practice management system for nutrition professionals. While meal planning is a core feature, you also get secure client records management, automated follow-up systems, comprehensive progress tracking, professional report generation, and clinical workflow tools—all designed for healthcare professionals, not consumer apps.",
       },
       {
        category: "Target Users",
        question: "Who is AfyaNutrix built for?",
        answer:
         "AfyaNutrix serves the entire spectrum of nutrition professionals: Licensed nutritionists and registered dietitians in public/private clinics, independent practitioners and community health consultants, nutrition interns building their private practice, healthcare clinics managing multiple nutritionists, and organizations running nutrition outreach programs.",
       },
       {
        category: "Local Relevance",
        question: "Is the food database locally relevant?",
        answer:
         "Absolutely. Our proprietary NutriCore™ database is built from verified sources like KEMFCT (Kenya Medical Food Composition Tables) and enhanced with extensively curated African foods including sukuma wiki, matoke, njahi, millet, ugali, kunde, nduma, and hundreds more—all with precise nutritional data per gram and portion sizes.",
       },
       {
        category: "Data Security",
        question: "Is my client's data safe?",
        answer:
         "Yes, completely secure. AfyaNutrix is designed with full compliance to Kenya's Data Protection Act (DPA 2019) and international standards. Your clients' data is end-to-end encrypted, stored securely in Africa-based servers, and never accessed, mined, or shared without explicit consent. You maintain full control, and every client retains complete rights over their personal data.",
       },
      ].map((faq, index) => (
       <div
        key={index}
        className="bg-white rounded-xl border border-[#9CCC65] hover:border-[#1B5E20] transition-colors"
       >
        <details className="group">
         <summary className="flex items-center justify-between p-6 cursor-pointer">
          <div className="flex items-start space-x-4">
           <div className="flex-shrink-0">
            <span className="inline-flex items-center px-3 py-1 bg-[#1B5E20] text-white text-xs font-medium rounded-full">
             {faq.category}
            </span>
           </div>
           <h3 className="font-semibold text-gray-900 text-lg leading-relaxed">
            {faq.question}
           </h3>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-4" />
         </summary>
         <div className="px-6 pb-6">
          <div className="pl-20">
           <p className="text-gray-600 leading-relaxed text-base">
            {faq.answer}
           </p>
          </div>
         </div>
        </details>
       </div>
      ))}
     </div>

     {/* Call to Action */}
     <div className="mt-16 text-center">
      <div className="bg-[#003B2C] rounded-2xl p-8 text-white">
       <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
       <p className="text-white mb-6 max-w-2xl mx-auto">
        Our team of nutrition technology specialists is here to help you
        understand how AfyaNutrix can transform your practice.
       </p>
       <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-[#003B2C] px-6 py-3 rounded-lg font-semibold hover:bg-[#9CCC65] transition-colors">
         Schedule a Demo
        </button>
        <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
         Contact Support
        </button>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* Footer */}
   <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
    {/* Subtle top border with gradient */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>

    {/* Background pattern overlay */}
    <div className="absolute inset-0 opacity-5">
     <div
      className="absolute inset-0"
      style={{
       backgroundImage: `radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), 
                       radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)`,
      }}
     ></div>
    </div>

    <div className="relative py-16 px-6 lg:px-8">
     <div className="container mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-12 lg:gap-16">
       {/* Brand Section - Enhanced */}
       <div className="lg:col-span-2 md:col-span-3">
        <div className="flex items-center space-x-3 mb-6">
         <div className="relative">
          <div className="w-12 h-12 bg-[#9CCC65] rounded-2xl flex items-center justify-center shadow-lg">
           <ChefHat className="w-7 h-7 text-white" />
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 w-12 h-12 bg-emerald-500/20 rounded-2xl blur-lg"></div>
         </div>
         <div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
           AfyaNutrix
          </span>
          <div className="text-xs text-[#9CCC65] font-medium tracking-wider uppercase">
           Health Tech Platform
          </div>
         </div>
        </div>
        <p className="text-gray-300 leading-relaxed max-w-md mb-8">
         Empowering African nutritionists with cutting-edge, culturally-grounded
         practice management solutions that drive better patient outcomes.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
         <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
          <span>GDPR Compliant</span>
         </div>
         <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
          <span>ISO 27001</span>
         </div>
         <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
          <span>SOC 2 Type II</span>
         </div>
        </div>
       </div>

       {/* Product Links */}
       <div className="space-y-4">
        <h4 className="font-semibold text-white text-lg mb-6 relative">
         Product
         <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></div>
        </h4>
        <nav className="space-y-3">
         {[
          { href: "#features", label: "Features & Tools" },
          { href: "#pricing", label: "Pricing Plans" },
          { href: "/demo", label: "Live Demo" },
          { href: "/integrations", label: "Integrations" },
          { href: "/api", label: "Developer API" },
         ].map((item, index) => (
          <Link
           key={index}
           href={item.href}
           className="block text-gray-400 hover:text-[#9CCC65] transition-colors duration-200 hover:translate-x-1 transform"
          >
           {item.label}
          </Link>
         ))}
        </nav>
       </div>

       {/* Support Links */}
       <div className="space-y-4">
        <h4 className="font-semibold text-white text-lg mb-6 relative">
         Support
         <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></div>
        </h4>
        <nav className="space-y-3">
         {[
          { href: "/help", label: "Help Center" },
          { href: "/contact", label: "Contact Support" },
          { href: "/training", label: "Training Resources" },
          { href: "/community", label: "Community Forum" },
          { href: "/status", label: "System Status" },
         ].map((item, index) => (
          <Link
           key={index}
           href={item.href}
           className="block text-gray-400 hover:text-[#9CCC65] transition-colors duration-200 hover:translate-x-1 transform"
          >
           {item.label}
          </Link>
         ))}
        </nav>
       </div>

       {/* Legal & Compliance */}
       <div className="space-y-4">
        <h4 className="font-semibold text-white text-lg mb-6 relative">
         Legal & Compliance
         <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></div>
        </h4>
        <nav className="space-y-3">
         {[
          { href: "/privacy", label: "Privacy Policy" },
          { href: "/terms", label: "Terms of Service" },
          { href: "/compliance", label: "GDPR Compliance" },
          { href: "/security", label: "Security Overview" },
          { href: "/cookies", label: "Cookie Policy" },
         ].map((item, index) => (
          <Link
           key={index}
           href={item.href}
           className="block text-gray-400 hover:text-[#9CCC65] transition-colors duration-200 hover:translate-x-1 transform"
          >
           {item.label}
          </Link>
         ))}
        </nav>
       </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 pt-8 border-t border-gray-800/50">
       <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400">
         <p className="text-center sm:text-left">
          © 2025 AfyaNutrix Technologies Ltd. All rights reserved.
         </p>
         <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
         <p className="text-sm">
          Proudly built for African healthcare professionals
         </p>
        </div>

        {/* Social proof or additional info */}
        <div className="flex items-center gap-4 text-sm">
         <div className="flex items-center gap-2 text-gray-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>All systems operational</span>
         </div>
         <div className="text-gray-500">|</div>
         <div className="text-gray-400">Trusted by 2,500+ nutritionists</div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </footer>
  </div>
 );
}
