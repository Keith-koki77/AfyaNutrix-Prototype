import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Calendar, ChefHat, BarChart3, MessageSquare, Smartphone } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#1B5E20] rounded-lg flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#1B5E20]">AfyaNutrix</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-[#1B5E20]">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-[#1B5E20]">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-[#1B5E20]">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link href="/login">
              <Button variant="ghost" className="text-[#1B5E20]">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-[#1B5E20] hover:bg-[#2E7D32]">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-[#FBC02D] text-black hover:bg-[#F9A825]">Built for Kenyan Nutritionists</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Digital Clinic
            <span className="text-[#1B5E20]"> in a Box</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stop drowning in WhatsApp consultations and Excel spreadsheets. AfyaNutrix streamlines your practice with
            secure client management, local meal planning, and automated workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-[#1B5E20] hover:bg-[#2E7D32] px-8">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white px-8 bg-transparent"
              >
                Watch Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">No credit card required • 14-day free trial • DPA 2019 compliant</p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Reality of Nutrition Practice in Kenya</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800">Current Challenges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-red-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>WhatsApp consultations chaos</span>
                </div>
                <div className="flex items-center space-x-2 text-red-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Paper files and Excel burnout</span>
                </div>
                <div className="flex items-center space-x-2 text-red-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Guessing nutritional values</span>
                </div>
                <div className="flex items-center space-x-2 text-red-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Non-compliant data storage</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-[#1B5E20]">AfyaNutrix Solution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-[#1B5E20]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Secure, encrypted client portal</span>
                </div>
                <div className="flex items-center space-x-2 text-[#1B5E20]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Automated workflows & reminders</span>
                </div>
                <div className="flex items-center space-x-2 text-[#1B5E20]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Indigenous Kenyan food database</span>
                </div>
                <div className="flex items-center space-x-2 text-[#1B5E20]">
                  <CheckCircle className="w-4 h-4" />
                  <span>DPA 2019 compliant by default</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Run a Modern Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for African nutritionists, with local foods, cultural context, and compliance built-in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-10 h-10 text-[#1B5E20] mb-2" />
                <CardTitle>Client Management</CardTitle>
                <CardDescription>
                  Secure profiles, medical history, goals, and DPA-compliant data storage
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-10 h-10 text-[#1B5E20] mb-2" />
                <CardTitle>Smart Scheduling</CardTitle>
                <CardDescription>Automated appointment reminders via SMS and WhatsApp integration</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ChefHat className="w-10 h-10 text-[#1B5E20] mb-2" />
                <CardTitle>Local Meal Planning</CardTitle>
                <CardDescription>Indigenous Kenyan foods database with accurate nutritional data</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-[#1B5E20] mb-2" />
                <CardTitle>Nutrition Analytics</CardTitle>
                <CardDescription>Auto-calculate macros, micros, and RDA matching with visual reports</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="w-10 h-10 text-[#1B5E20] mb-2" />
                <CardTitle>Food Diary</CardTitle>
                <CardDescription>Client photo logging, symptom tracking, and real-time feedback</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="w-10 h-10 text-[#1B5E20] mb-2" />
                <CardTitle>Secure Messaging</CardTitle>
                <CardDescription>Encrypted communication replacing non-compliant WhatsApp chats</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-[#1B5E20] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted by Kenyan Nutritionists</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <p className="mb-4 italic">
                  "AfyaNutrix saved me 10 hours per week. No more WhatsApp chaos, and my clients love the meal plans
                  with local foods they actually eat."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#FBC02D] rounded-full flex items-center justify-center">
                    <span className="font-bold text-black">A</span>
                  </div>
                  <div>
                    <p className="font-semibold">Amina Wanjiku</p>
                    <p className="text-sm opacity-80">Solo Nutritionist, Nairobi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <p className="mb-4 italic">
                  "Managing 5 nutritionists was a nightmare. Now I have full visibility into our clinic operations and
                  client engagement metrics."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#FBC02D] rounded-full flex items-center justify-center">
                    <span className="font-bold text-black">K</span>
                  </div>
                  <div>
                    <p className="font-semibold">Dr. Kendi Mwangi</p>
                    <p className="text-sm opacity-80">Clinic Owner, Mombasa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 mb-12">Choose the plan that fits your practice size</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="border-2 hover:border-[#1B5E20] transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Solo Practice</CardTitle>
                <div className="text-3xl font-bold text-[#1B5E20]">
                  KES 2,500<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <CardDescription>Perfect for individual nutritionists</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#1B5E20]" />
                  <span>Up to 50 clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#1B5E20]" />
                  <span>Unlimited meal plans</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#1B5E20]" />
                  <span>SMS reminders</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#1B5E20]" />
                  <span>Basic analytics</span>
                </div>
                <Button className="w-full mt-6 bg-[#1B5E20] hover:bg-[#2E7D32]">Start Free Trial</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FBC02D] relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#FBC02D] text-black">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Clinic</CardTitle>
                <div className="text-3xl font-bold text-[#1B5E20]">
                  KES 4,500<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <CardDescription>For clinics and multiple practitioners</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#1B5E20]" />
                  <span>Up to 200 clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#1B5E20]" />
                  <span>5 nutritionist accounts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#1B5E20]" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#1B5E20]" />
                  <span>WhatsApp integration</span>
                </div>
                <Button className="w-full mt-6 bg-[#1B5E20] hover:bg-[#2E7D32]">Start Free Trial</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of Kenyan nutritionists who've already made the switch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-[#1B5E20] hover:bg-gray-100 px-8">
                Start Your Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1B5E20] px-8 bg-transparent"
              >
                Schedule Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm mt-4 opacity-80">14-day free trial • No setup fees • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#1B5E20] rounded-lg flex items-center justify-center">
                  <ChefHat className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AfyaNutrix</span>
              </div>
              <p className="text-gray-400">
                Empowering African nutritionists with modern, culturally-grounded practice management tools.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="hover:text-white">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/training" className="hover:text-white">
                    Training
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="hover:text-white">
                    DPA Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AfyaNutrix. All rights reserved. Built for African nutritionists.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
