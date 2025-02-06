import { ArrowRight, Search, ShoppingCart, User, Menu, X } from "lucide-react";
import Link from "next/link";

import React, { useState } from "react";
export default function Navbar2() {
  const [showBanner, setShowBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="w-full bg-white">
      {showBanner && (
        <div className="bg-[#1C1B1F] text-white px-6 py-3 flex justify-between items-center">
          <p className="text-[13px] text-center flex-1 font-light tracking-wide">
            Free delivery on all orders over £50 with code easter checkout
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="hover:opacity-75 transition-opacity"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-[72px]">
            <div className="flex-shrink-0">
             <Link href={"/"}><span className="text-xl tracking-tight font-normal">Avion</span></Link> 
            </div>

            <div className="hidden md:flex items-center space-x-10">
              <a className="text-[15px] text-gray-600 hover:text-black transition-colors">
                All products
              </a>
              <a className="text-[15px] text-gray-600 hover:text-black transition-colors">
                Plant pots
              </a>
              <a className="text-[15px] text-gray-600 hover:text-black transition-colors">
                Ceramics
              </a>
              <a className="text-[15px] text-gray-600 hover:text-black transition-colors">
                Tables
              </a>
              <a className="text-[15px] text-gray-600 hover:text-black transition-colors">
                Chairs
              </a>
              <a className="text-[15px] text-gray-600 hover:text-black transition-colors">
                Crockery
              </a>
              <a className="text-[15px] text-gray-600 hover:text-black transition-colors">
                Tableware
              </a>
              <a className="text-[15px] text-gray-600 hover:text-black transition-colors">
                Cutlery
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <button className="text-gray-600 hover:text-black transition-colors p-1">
                <Search className="w-[18px] h-[18px]" />
              </button>
              <button className="text-gray-600 hover:text-black transition-colors p-1">
                <ShoppingCart className="w-[18px] h-[18px]" />
              </button>
              <button className="text-gray-600 hover:text-black transition-colors p-1">
                <User className="w-[18px] h-[18px]" />
              </button>
              <button
                className="md:hidden p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <a className="block px-2 py-2 text-[15px] text-gray-600 hover:text-black transition-colors">
                All products
              </a>
              <a className="block px-2 py-2 text-[15px] text-gray-600 hover:text-black transition-colors">
                Plant pots
              </a>
              <a className="block px-2 py-2 text-[15px] text-gray-600 hover:text-black transition-colors">
                Ceramics
              </a>
              <a className="block px-2 py-2 text-[15px] text-gray-600 hover:text-black transition-colors">
                Tables
              </a>
              <a className="block px-2 py-2 text-[15px] text-gray-600 hover:text-black transition-colors">
                Chairs
              </a>
              <a className="block px-2 py-2 text-[15px] text-gray-600 hover:text-black transition-colors">
                Crockery
              </a>
              <a className="block px-2 py-2 text-[15px] text-gray-600 hover:text-black transition-colors">
                Tableware
              </a>
              <a className="block px-2 py-2 text-[15px] text-gray-600 hover:text-black transition-colors">
                Cutlery
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}