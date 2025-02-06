"use client";

import React from "react";
import { ArrowRight, DollarSign, Paintbrush, Recycle, Truck } from "lucide-react";
import Navbar2 from "../components/Navbar2";
import StorySection from "../components/Storysection";
import Newsletter from "../components/Newsletter";

export default function HeroSection() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 mb-4" />,
      title: "Next day as standard",
      description:
        "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: <Paintbrush className="w-8 h-8 mb-4" />,
      title: "Made by true artisans",
      description:
        "Handmade crafted goods made with real passion and craftmanship",
    },
    {
      icon: <DollarSign className="w-8 h-8 mb-4" />,
      title: "Unbeatable prices",
      description:
        "For our materials and quality you won't find better prices anywhere",
    },
    {
      icon: <Recycle className="w-8 h-8 mb-4" />,
      title: "Recycled packaging",
      description:
        "We use 100% recycled packaging to ensure our footprint is manageable",
    },
  ];
  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar2 />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium max-w-2xl">
            A brand built on the love of craftsmanship, quality, and outstanding
            customer service
          </h1>
          <a
            href="/products" // Add the actual link to your products page
            className="mt-4 sm:mt-0 text-gray-600 hover:text-gray-900 flex items-center transition-colors duration-200"
          >
            View our products
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Story Section */}
      <section>
        <StorySection />
      </section>

      {/* Main Section */}
      <main className="w-full min-h-screen bg-[#F5F2EF]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-12 lg:py-24">
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] relative bg-[#EDE9E6] rounded-lg overflow-hidden">
                <img
                  src="/Images/blacksofa.png"
                  alt="Modern interior with black sofa and minimal decor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Our service isn't just personal, it's actually hyper-personally
                exquisite
              </h1>
              <p className="text-gray-600 leading-relaxed">
                When we started Aluvo, the idea was simple: Make high-quality
                furniture affordable and available for the mass market.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Handmade, and lovingly crafted furniture and homewares is what
                we live, breathe and design so our Chelsea boutique become the
                hottest for the London interior design community.
              </p>
              <button className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </main>

      <section className="max-w-7xl mx-auto py-24 px-4 bg-[#F9F9F9]">
        <h2 className="text-2xl md:text-3xl text-center mb-16 font-semibold">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6 text-[#2A254B]">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

          <section>
            <Newsletter />
          </section>
    </>
  );
}