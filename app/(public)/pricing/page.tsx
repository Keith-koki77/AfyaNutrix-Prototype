"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type BillingPeriod = 'monthly' | 'quarterly' | 'yearly';

const plans = [
  {
    title: "Starter",
    price: {
      monthly: "KES 1,500",
      quarterly: "KES 1,275",
      yearly: "KES 1,125",
    },
    originalPrice: {
      monthly: null,
      quarterly: "KES 1,500",
      yearly: "KES 1,500",
    },
    desc: "Perfect for individual nutritionists starting their digital journey",
    features: [
      "Up to 20 active clients",
      "Basic client profiles & medical history",
      "Meal plan uploads (PDF format)",
      "Manual client notes & observations",
      "Basic progress tracking tools",
      "Email support during business hours",
    ],
    color: "gray",
    recommended: false,
  },
  {
    title: "Solo Plan",
    price: {
      monthly: "KES 2,500",
      quarterly: "KES 2,125",
      yearly: "KES 1,875",
    },
    originalPrice: {
      monthly: null,
      quarterly: "KES 2,500",
      yearly: "KES 2,500",
    },
    desc: "Ideal for established practitioners with growing client base",
    features: [
      "Up to 50 active clients",
      "Automated appointment reminders",
      "Advanced weight, goals & check-in tracking",
      "Basic analytics dashboard with insights",
      "Exportable progress reports (PDF)",
      "Remove AfyaNutrix branding (white-label)",
      "In-app support with faster response times",
    ],
    color: "amber",
    recommended: false,
  },
  {
    title: "Pro Plan",
    price: {
      monthly: "KES 4,500",
      quarterly: "KES 3,825",
      yearly: "KES 3,375",
    },
    originalPrice: {
      monthly: null,
      quarterly: "KES 4,500",
      yearly: "KES 4,500",
    },
    desc: "Perfect for small clinics and team practices",
    features: [
      "Up to 200 active clients",
      "5 nutritionist accounts with role management",
      "Advanced analytics & performance insights",
      "WhatsApp integration for client communication",
      "Branded mini-client portal (mobile PWA)",
      "Customizable follow-up templates",
      "Smart client intake forms with conditional logic",
      "Bulk SMS integration (optional add-on)",
      "Priority support with dedicated account manager",
    ],
    color: "amber",
    recommended: true,
  },
  {
    title: "Enterprise",
    price: {
      monthly: "Custom",
      quarterly: "Custom",
      yearly: "Custom",
    },
    originalPrice: {
      monthly: null,
      quarterly: null,
      yearly: null,
    },
    desc: "Tailored solutions for large organizations and hospitals",
    features: [
      "Unlimited clients and nutritionist accounts",
      "Advanced analytics & custom reporting suite",
      "Multi-location management dashboard",
      "API access for seamless hospital integrations",
      "HIPAA-compliant secure data export & backups",
      "Comprehensive onboarding & training support",
      "Custom feature development available",
      "Dedicated account manager & implementation team",
      "24/7 priority support with SLA guarantee",
    ],
    color: "slate",
    recommended: false,
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('quarterly');

  const getSavingsText = (period: BillingPeriod) => {
    switch (period) {
      case 'quarterly':
        return 'Save 15%';
      case 'yearly':
        return 'Save 25%';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto max-w-screen-xl text-center relative z-10">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-[#003B2C] text-[#9CCC65] border border-[#AED581] rounded-full mb-8">
            <span className="text-sm font-medium">💚 Trusted by 2,500+ Nutrition Professionals</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Choose Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003B2C] to-[#1B5E20]">
              {" "}Growth Plan
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            Scalable solutions designed for nutrition professionals at every stage of their journey. 
            Transform your practice with cutting-edge technology.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-16">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-2 shadow-lg">
              <div className="flex items-center space-x-1">
                <button 
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-3 text-sm font-bold transition-all rounded-xl ${
                    billingPeriod === 'monthly' 
                      ? 'bg-[#003B2C] text-white shadow-md' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setBillingPeriod('quarterly')}
                  className={`px-6 py-3 text-sm font-bold transition-all rounded-xl relative ${
                    billingPeriod === 'quarterly' 
                      ? 'bg-[#003B2C] text-white shadow-md' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Quarterly
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">Save 15%</span>
                </button>
                <button 
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-6 py-3 text-sm font-bold transition-all rounded-xl relative ${
                    billingPeriod === 'yearly' 
                      ? 'bg-[#003B2C] text-white shadow-md' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Yearly
                  <span className="absolute -top-1 -right-1 text-xs bg-[#9CCC65] text-[#003B2C] px-2 py-1 rounded-full font-bold">
                    Save 25%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {plans.map((plan, idx) => (
              <Card
                key={idx}
                className={`relative group transition-all duration-500 hover:-translate-y-3 hover:scale-105 ${
                  plan.recommended
                    ? "border-2 border-[#003B2C] shadow-2xl shadow-emerald-100/50 scale-105 bg-gradient-to-br from-white to-emerald-50/30"
                    : "border border-gray-200 hover:border-[#9CCC65] hover:shadow-xl bg-white/80"
                } backdrop-blur-sm`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-[#003B2C] to-[#1B5E20] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="pb-2 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl font-semibold text-gray-900">{plan.title}</CardTitle>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${
                      plan.recommended ? 'from-[#9CCC65] to-[#AED581]' : 'from-[#9CCC65]/70 to-[#AED581]/70'
                    }`}>
                      <span className="text-[#003B2C] text-xl">
                        {plan.color === "amber" && plan.title === "Solo Plan"
                          ? "👤"
                          : plan.color === "amber" && plan.title === "Pro Plan"
                          ? "🚀"
                          : plan.color === "slate"
                          ? "🏢"
                          : "⭐"}
                      </span>
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price[billingPeriod] === "Custom" ? "Custom" : plan.price[billingPeriod]}
                      </span>
                      {plan.price[billingPeriod] !== "Custom" && (
                        <span className="text-gray-500 ml-2">/month</span>
                      )}
                    </div>
                    
                    {plan.originalPrice[billingPeriod] && billingPeriod !== 'monthly' && (
                      <div className="flex items-center mb-2">
                        <span className="text-lg text-gray-400 line-through mr-2">
                          {plan.originalPrice[billingPeriod]}
                        </span>
                        <span className="text-sm bg-[#9CCC65] text-[#003B2C] px-2 py-1 rounded-full font-medium">
                          {getSavingsText(billingPeriod)}
                        </span>
                      </div>
                    )}
                    
                    <CardDescription className="text-gray-600 leading-relaxed text-sm">
                      {plan.desc}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="pt-6">
                  <ul className="space-y-4 text-left mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start space-x-3">
                        <CheckCircle className="mt-0.5 w-5 h-5 text-[#003B2C] flex-shrink-0" />
                        <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-4 font-bold transition-all duration-300 ${
                      plan.recommended
                        ? "bg-gradient-to-r from-[#003B2C] to-[#1B5E20] hover:from-[#1B5E20] hover:to-[#2E7D32] text-white shadow-lg hover:shadow-xl hover:scale-105"
                        : "bg-white border-2 border-gray-200 text-[#003B2C] hover:bg-[#003B2C] hover:text-white hover:border-[#003B2C]"
                    }`}
                  >
                    {plan.price[billingPeriod] === "Custom" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators & CTA */}
      <section className="pb-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Nutrition Professionals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of nutritionists who have transformed their practice with AfyaNutrix
            </p>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Bank-Level</div>
              <div className="text-sm text-gray-600">Security</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎧</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">2,500+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Practice?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required, no setup fees, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button className="bg-gradient-to-r from-[#003B2C] to-[#1B5E20] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                🚀 Start Free Trial
              </Button>
              <Button variant="outline" className="text-[#003B2C] border-[#003B2C] px-8 py-4 rounded-xl font-semibold hover:bg-[#003B2C] hover:text-white transition-all">
                📅 Schedule Demo
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#003B2C] rounded-full"></span>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#003B2C] rounded-full"></span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#003B2C] rounded-full"></span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}