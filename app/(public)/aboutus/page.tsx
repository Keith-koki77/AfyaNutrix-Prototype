import React from "react";
import {
 Heart,
 Users,
 Shield,
 Target,
 Lightbulb,
 Globe,
 CheckCircle,
 ArrowRight,
 Stethoscope,
 Database,
 FileText,
 TrendingUp,
 Building,
 Leaf,
} from "lucide-react";

const AboutUs = () => {
 const values = [
  {
   icon: <Shield className="w-8 h-8" />,
   title: "Trust",
   description: "We protect user and client data with unwavering commitment",
  },
  {
   icon: <Globe className="w-8 h-8" />,
   title: "Local First",
   description:
    "We prioritize African food systems, cultures, and health contexts",
  },
  {
   icon: <Stethoscope className="w-8 h-8" />,
   title: "Professionalism",
   description:
    "We uphold the highest standards of ethical care and clinical practice",
  },
  {
   icon: <Lightbulb className="w-8 h-8" />,
   title: "Simplicity",
   description: "Tools should reduce work, not create more",
  },
  {
   icon: <TrendingUp className="w-8 h-8" />,
   title: "Insight",
   description: "We believe in outcome-driven care—not guesswork",
  },
  {
   icon: <Heart className="w-8 h-8" />,
   title: "Equity",
   description:
    "Every nutritionist, regardless of location, deserves modern tools",
  },
 ];

 const features = [
  {
   icon: <Database className="w-6 h-6" />,
   text: "Store and manage client data securely",
  },
  {
   icon: <Leaf className="w-6 h-6" />,
   text: "Build culturally accurate meal plans from African foods",
  },
  {
   icon: <FileText className="w-6 h-6" />,
   text: "Generate professional PDF reports in minutes",
  },
  {
   icon: <Users className="w-6 h-6" />,
   text: "Follow up and track client outcomes with ease",
  },
  {
   icon: <TrendingUp className="w-6 h-6" />,
   text: "Understand what works—and optimize your impact",
  },
  {
   icon: <Building className="w-6 h-6" />,
   text: "Run solo practices or multi-nutritionist clinics with full control",
  },
 ];

 const goals = [
  "Empower 10,000+ African nutritionists with professional-grade, affordable, and easy-to-use tools",
  "Build the largest verified database of African foods and their nutritional values—accessible, science-backed, and usable",
  "Be the standard for digital client care workflows in nutrition across Kenya, Uganda, Nigeria, Ghana, and beyond",
  "Facilitate data-driven decision-making for public health programs, NGOs, and researchers using anonymized insights",
  "Ensure full compliance with the Kenya Data Protection Act (DPA, 2019) and future data governance frameworks",
 ];

 const impacts = [
  {
   category: "For Nutritionists",
   benefits: [
    "Turn chaos into clarity",
    "Manage 50+ clients without burning out",
    "Feel confident running a private practice",
    "Build trust through professional-grade follow-ups",
   ],
  },
  {
   category: "For Clients",
   benefits: [
    "Receive personalized, science-based care",
    "Better adherence to plans",
    "Faster improvement in health outcomes",
    "A dignified, data-secure nutrition experience",
   ],
  },
  {
   category: "For Clinics",
   benefits: [
    "Standardize client records",
    "Train interns & supervise staff from one system",
    "Generate outcome reports for funders, insurance, or ministries",
   ],
  },
  {
   category: "For Africa",
   benefits: [
    "Establish local food as clinical nutrition tools",
    "Build a verified nutrient database for research",
    "Contribute to fighting NCDs, malnutrition, and misinformation",
   ],
  },
 ];

 return (
  <div className="min-h-screen bg-white">
   {/* Hero Section */}
   <section className="relative bg-gradient-to-br from-[#003B2C] to-[#004d38] text-white py-24 px-4">
    <div className="absolute inset-0 bg-black opacity-10"></div>
    <div className="relative max-w-6xl mx-auto text-center">
     <div className="inline-flex items-center gap-2 bg-[#9CCC65] text-[#003B2C] px-4 py-2 rounded-full font-semibold mb-6">
      <span className="text-2xl">🔬</span>
      Built for African Nutritionists. Powered by Purpose.
     </div>
     <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
      About <span className="text-[#9CCC65]">AfyaNutrix</span>
     </h1>
     <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
      A first-of-its-kind digital platform built specifically for African
      nutrition professionals. We empower nutritionists to manage clients,
      deliver impactful care, and build thriving private practices.
     </p>
    </div>
   </section>

   {/* Who We Are */}
   <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#003B2C] mb-6">Who We Are</h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
       At our core, we&apos;re building the digital operating system for African
       nutrition care—connecting science, culture, and technology into one
       comprehensive system.
      </p>
     </div>
    </div>
   </section>

   {/* Vision & Mission */}
   <section className="py-20 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto">
     <div className="grid md:grid-cols-2 gap-12">
      <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#9CCC65]">
       <div className="flex items-center gap-3 mb-6">
        <Target className="w-8 h-8 text-[#003B2C]" />
        <h3 className="text-3xl font-bold text-[#003B2C]">Our Vision</h3>
       </div>
       <p className="text-lg text-gray-700 leading-relaxed">
        To be the most trusted and transformative platform powering nutrition
        care across Africa. We imagine a future where every nutritionist, from
        urban clinics to rural programs, can deliver expert-level care, informed
        by local data and delivered with digital excellence.
       </p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#003B2C]">
       <div className="flex items-center gap-3 mb-6">
        <Heart className="w-8 h-8 text-[#9CCC65]" />
        <h3 className="text-3xl font-bold text-[#003B2C]">Our Mission</h3>
       </div>
       <p className="text-lg text-gray-700 leading-relaxed">
        To enable African nutritionists to run secure, data-driven, and
        culturally relevant nutrition practices—anywhere, anytime, and with
        anyone. Whether you&apos;re just starting your career or managing
        nutrition programs, AfyaNutrix helps you do more with less chaos.
       </p>
      </div>
     </div>
    </div>
   </section>

   {/* What We're Building */}
   <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#003B2C] mb-6">
       What We&apos;re Building
      </h2>
      <p className="text-xl text-gray-600 mb-8">
       AfyaNutrix is not just another SaaS. It&apos;s a private digital clinic
       in your pocket.
      </p>
     </div>
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
       <div
        key={index}
        className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-3 border-[#9CCC65]"
       >
        <div className="flex-shrink-0 p-2 bg-[#9CCC65] bg-opacity-20 rounded-lg">
         <div className="text-[#003B2C]">{feature.icon}</div>
        </div>
        <p className="text-gray-700 font-medium">{feature.text}</p>
       </div>
      ))}
     </div>
     <div className="text-center mt-12">
      <p className="text-lg text-gray-600 italic">
       Everything is designed with data privacy, clinical professionalism, and
       African health realities at its core.
      </p>
     </div>
    </div>
   </section>

   {/* Values */}
   <section className="py-20 px-4 bg-gradient-to-r from-[#003B2C] to-[#004d38] text-white">
    <div className="max-w-6xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">Our Values</h2>
      <p className="text-xl text-gray-200">
       The principles that guide everything we do
      </p>
     </div>
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {values.map((value, index) => (
       <div
        key={index}
        className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all"
       >
        <div className="text-[#9CCC65] mb-4">{value.icon}</div>
        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
        <p className="text-gray-200 leading-relaxed">{value.description}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Strategic Goals */}
   <section className="py-20 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#003B2C] mb-6">
       Strategic Goals
      </h2>
      <p className="text-xl text-gray-600">
       Our roadmap to transforming African nutrition care
      </p>
     </div>
     <div className="space-y-6">
      {goals.map((goal, index) => (
       <div
        key={index}
        className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
       >
        <div className="flex-shrink-0 w-8 h-8 bg-[#9CCC65] text-[#003B2C] rounded-full flex items-center justify-center font-bold">
         {index + 1}
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">{goal}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Impact */}
   <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#003B2C] mb-6">
       Impact We Aim to Create
      </h2>
      <p className="text-xl text-gray-600">
       Transforming lives across the nutrition care ecosystem
      </p>
     </div>
     <div className="grid md:grid-cols-2 gap-8">
      {impacts.map((impact, index) => (
       <div
        key={index}
        className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#9CCC65] hover:shadow-xl transition-shadow"
       >
        <h3 className="text-2xl font-bold text-[#003B2C] mb-6">
         {impact.category}
        </h3>
        <ul className="space-y-3">
         {impact.benefits.map((benefit, benefitIndex) => (
          <li key={benefitIndex} className="flex items-start gap-3">
           <CheckCircle className="w-5 h-5 text-[#9CCC65] flex-shrink-0 mt-0.5" />
           <span className="text-gray-700">{benefit}</span>
          </li>
         ))}
        </ul>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* CTA Section */}
   <section className="py-20 px-4 bg-gradient-to-r from-[#9CCC65] to-[#7CB342]">
    <div className="max-w-4xl mx-auto text-center">
     <h2 className="text-4xl font-bold text-[#003B2C] mb-6">
      Join the Movement
     </h2>
     <p className="text-xl text-[#003B2C] mb-8 leading-relaxed">
      African nutrition care deserves better tools, deeper respect, and
      culturally grounded systems. AfyaNutrix is here to make that a reality—one
      nutritionist at a time.
     </p>
     <p className="text-lg text-[#003B2C] mb-10 font-semibold">
      Ready to go from reactive to professional?
     </p>
     <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-[#003B2C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#002d21] transition-colors flex items-center justify-center gap-2">
       Get Started for Free
       <ArrowRight className="w-5 h-5" />
      </button>
      <button className="border-2 border-[#003B2C] text-[#003B2C] px-8 py-4 rounded-full font-semibold hover:bg-[#003B2C] hover:text-white transition-colors">
       Book a Demo
      </button>
     </div>
    </div>
   </section>
  </div>
 );
};

export default AboutUs;
