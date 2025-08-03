"use client";

import React from "react";
import Link from "next/link";
import { ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
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
  );
};

export default Header;