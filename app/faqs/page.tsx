"use client";

import React, { useState } from "react";
import {
  Shield,
  Lock,
  MapPin,
  Download,
  ChevronDown,
  Search,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle,
  Users,
  Smartphone,
  Database,
  Zap,
  Star,
} from "lucide-react";

const FAQsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    "All",
    "Platform Overview",
    "Features",
    "Security",
    "Pricing",
    "Mobile Access",
    "Team Collaboration",
  ];

  const faqs = [
    {
      category: "Platform Overview",
      question: "What exactly is AfyaNutrix?",
      answer:
        "AfyaNutrix is a comprehensive digital toolkit and private practice operating system designed specifically for African nutritionists. It helps you manage clients, generate culturally-relevant meal plans, track patient outcomes, and automate follow-ups—all from one integrated platform built with African foods, workflows, and healthcare contexts in mind.",
      icon: <Database className="w-5 h-5" />,
    },
    {
      category: "Features",
      question: "Is AfyaNutrix just a meal planning app?",
      answer:
        "No. It's a complete practice management system for nutrition professionals. While meal planning is a core feature, you also get secure client records management, automated follow-up systems, comprehensive progress tracking, professional report generation, and clinical workflow tools—all designed for healthcare professionals, not consumer apps.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      category: "Platform Overview",
      question: "Who is AfyaNutrix built for?",
      answer:
        "AfyaNutrix serves the entire spectrum of nutrition professionals: Licensed nutritionists and registered dietitians in public/private clinics, independent practitioners and community health consultants, nutrition interns building their private practice, healthcare clinics managing multiple nutritionists, and organizations running nutrition outreach programs.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      category: "Features",
      question: "Is the food database locally relevant?",
      answer:
        "Absolutely. Our proprietary NutriCore™ database is built from verified sources like KEMFCT (Kenya Medical Food Composition Tables) and enhanced with extensively curated African foods including sukuma wiki, matoke, njahi, millet, ugali, kunde, nduma, and hundreds more—all with precise nutritional data per gram and portion sizes.",
      icon: <Database className="w-5 h-5" />,
    },
    {
      category: "Security",
      question: "Is my client's data safe?",
      answer:
        "Yes, completely secure. AfyaNutrix is designed with full compliance to Kenya's Data Protection Act (DPA 2019) and international standards. Your clients' data is end-to-end encrypted, stored securely in Africa-based servers, and never accessed, mined, or shared without explicit consent. You maintain full control, and every client retains complete rights over their personal data.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      category: "Platform Overview",
      question: "What if I'm not tech-savvy?",
      answer:
        "AfyaNutrix is designed for real-world nutritionists, not software engineers. No coding or complex configuration required. We provide intuitive guided onboarding, ready-made clinical templates, contextual help throughout the platform, and dedicated local support when you need assistance.",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      category: "Mobile Access",
      question: "Can I use AfyaNutrix on my phone?",
      answer:
        "Yes, fully mobile-optimized. AfyaNutrix is responsive and optimized for smartphones and tablets. Whether you're in a clinic, conducting home visits, or running community outreach programs—you can securely access client records, create meal plans, and update progress from anywhere.",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      category: "Security",
      question: "Can I export or download my data?",
      answer:
        "Absolutely. You maintain complete data ownership and can export client records (CSV, PDF formats), detailed session summaries, customized meal plans, and comprehensive progress reports. This ensures compliance flexibility, data portability, and complete professional control over your practice data.",
      icon: <Download className="w-5 h-5" />,
    },
    {
      category: "Pricing",
      question: "How much does it cost?",
      answer:
        "AfyaNutrix offers flexible, transparent pricing: Free Tier (limited clients and core features for trial), Professional Plan (KES 2,000/month for full features), Clinic Plans (starting KES 5,000/month for multi-user access), and Custom Enterprise pricing for NGOs, academic institutions, and large healthcare organizations.",
      icon: <Star className="w-5 h-5" />,
    },
    {
      category: "Mobile Access",
      question: "Do I need an internet connection to use it?",
      answer:
        "Currently, yes. AfyaNutrix requires internet connectivity for real-time data synchronization and security. However, we're actively developing offline-first capabilities for rural and low-bandwidth environments, planned for our next major release to ensure accessibility across all practice settings.",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      category: "Team Collaboration",
      question: "Can I invite my team or interns?",
      answer:
        "Yes, with professional-grade access controls. Our Professional and Clinic tiers support multi-user access with granular role-based permissions. You can safely delegate tasks, supervise interns, and collaborate with colleagues while maintaining strict client confidentiality and regulatory compliance.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      category: "Platform Overview",
      question: "Is this recognized by any nutrition body or university?",
      answer:
        "We're actively partnering with professional nutrition associations, leading health training institutions, and regulatory bodies to align AfyaNutrix with Continuing Professional Development (CPD) requirements, academic curricula, and clinical deployment standards across Kenya and the broader East African healthcare ecosystem.",
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ];

  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6 text-emerald-700" />,
      title: "Will my clients' data be sold or shared?",
      description:
        "Never. Only you and your authorized team can access client data. We don't sell, share, or mine your clients' information under any circumstances.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-700" />,
      title: "Where is my data stored?",
      description:
        "In secure, encrypted servers located in Africa, fully compliant with Kenya's Data Protection Act (DPA 2019) and international security standards.",
    },
    {
      icon: <Download className="w-6 h-6 text-emerald-700" />,
      title: "Can I delete a client's data if they ask?",
      description:
        "Yes, instantly. You can fully export or permanently delete any client's data in just 2 clicks, ensuring complete GDPR and DPA compliance.",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#003B2C] text-[#9CCC65] border border-[#AED581] rounded-full mb-8">
            <MessageCircle className="w-4 h-4 mr-2" />
            <span className="font-medium">Questions & Answers</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked
            <span className="block text-[#003B2C] bg-clip-text">Questions</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
            Everything you need to know about AfyaNutrix - from security and
            compliance to features and pricing. Can't find what you're looking
            for?
            <a
              href="/contact"
              className="text-[#003B2C] hover:text-[#1B5E20] font-semibold ml-1 underline decoration-[#003B2C] underline-offset-4"
            >
              Contact our team
            </a>
          </p>

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
                Your clients' trust is paramount. Here's how we protect their
                data.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#9CCC65] rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-[#1B5E20]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Will my clients' data be sold or shared?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Never.</strong> Only you and your authorized team can
                  access client data. We don't sell, share, or mine your
                  clients' information under any circumstances.
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
                  In secure, encrypted servers located in{" "}
                  <strong>Africa</strong>, fully compliant with Kenya's Data
                  Protection Act (DPA 2019) and international security
                  standards.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#9CCC65] rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-[#1B5E20]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Can I delete a client's data if they ask?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Yes, instantly.</strong> You can fully export or
                  permanently delete any client's data in just 2 clicks,
                  ensuring complete GDPR and DPA compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-[#003B2C] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-[#9CCC65] hover:text-[#003B2C] border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 hover:border-[#1B5E20] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full p-8 text-left"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-3 py-1 bg-[#003B2C] text-white text-sm font-medium rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#003B2C] rounded-xl flex items-center justify-center text-[#9CCC65]">
                        {faq.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg leading-relaxed pr-4">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFAQ === index && (
                  <div className="px-8 pb-8">
                    <div className="pl-20 border-l-2 border-emerald-100 ml-4">
                      <p className="text-gray-700 leading-relaxed text-base pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#003B2C] rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Our team of nutrition technology specialists is here to help you
              understand how AfyaNutrix can transform your practice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Schedule a Demo
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Contact Support
              </button>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Call Us</p>
                  <p className="text-gray-300 text-sm">+254 700 000 000</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300 text-sm">
                    support@afyanutrix.com
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Live Chat</p>
                  <p className="text-gray-300 text-sm">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
