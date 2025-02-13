"use client";

import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaSkype, FaPinterest } from "react-icons/fa";
import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <footer className="bg-[#2B2844] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {[
                "New arrivals",
                "Best sellers",
                "Recently viewed",
                "Popular this week",
                "All products",
                "Crockery", // "Crockery" appears here
              ].map((item, index) => (
                <li key={`menu-${item}-${index}`}>
                  <a className="hover:opacity-80 transition-opacity">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {[
                "Crockery", // "Crockery" appears here as well
                "Furniture",
                "Homeware",
                "Plant pots",
                "Chairs",
              ].map((item, index) => (
                <li key={`categories-${item}-${index}`}>
                  <a className="hover:opacity-80 transition-opacity">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our company</h3>
            <ul className="space-y-2">
              {[
                "About us",
                "Vacancies",
                "Contact us",
                "Privacy",
                "Returns policy",
              ].map((item) => (
                <li key={item}>
                  <a className="hover:opacity-80 transition-opacity">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Mailing List Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Join our mailing list</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-[#1F1D32] rounded focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-[#2B2844] rounded hover:bg-opacity-90 transition-colors"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">Copyright 2022 Avion LTD</p>
            <div className="flex space-x-6">
              <a className="hover:opacity-80 transition-opacity">
                <FaLinkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a className="hover:opacity-80 transition-opacity">
                <FaFacebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a className="hover:opacity-80 transition-opacity">
                <FaInstagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a className="hover:opacity-80 transition-opacity">
                <FaSkype size={20} />
                <span className="sr-only">Skype</span>
              </a>
              <a className="hover:opacity-80 transition-opacity">
                <FaTwitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a className="hover:opacity-80 transition-opacity">
                <FaPinterest size={20} />
                <span className="sr-only">Pinterest</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
