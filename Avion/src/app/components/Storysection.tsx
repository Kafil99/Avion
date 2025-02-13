
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function StorySection() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-[#2A2549] text-white p-8 md:p-16 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6">
          It started with a small idea
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
          A global brand with local beginnings, our story begain in a small
          studio in South London in early 2014
        </p>
        <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors w-fit">
          View collection
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="w-full md:w-1/2 min-h-[400px] md:min-h-[600px] relative">
        <Image
          src="/Images/yellowchair.png"
          alt="Modern interior with yellow armchair and minimalist artwork"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}