"use client";

import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Simulating cart item count update
  useEffect(() => {
    const itemCount = localStorage.getItem("cartItemCount");
    setCartItemCount(itemCount ? Number.parseInt(itemCount) : 0);
  }, []);

  // Simulating user authentication status
  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setIsLoggedIn(!!userToken);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleCartClick = () => {
    router.push("./Cart");
  };

  const handleUserClick = () => {
    router.push(isLoggedIn ? "/profile" : "/login");
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        {/* Hamburger Menu (Mobile View) */}
        <button
          className="block md:hidden p-2 hover:bg-gray-100 rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>

        {/* Brand Name */}
        <Link href="/" className="text-2xl font-light">
          Avion
        </Link>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-2">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-2 py-1 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <button type="submit" className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <Search className="w-4 h-4 text-gray-400" />
            </button>
          </form>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
  <Link href="/cart">
    <ShoppingCart className="w-5 h-5 text-gray-700" />
    {cartItemCount > 0 && (
      <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
        {cartItemCount}
      </span>
    )}
  </Link>
</button>
          <button className="p-2 hover:bg-gray-100 rounded-full" onClick={handleUserClick}>
            <User className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <div className="md:flex hidden items-center justify-center px-4 max-w-7xl mx-auto">
          <ul className="flex items-center gap-8 py-4 text-sm text-gray-700">
            {["About", "Products", "Cart", "chairs", "crockery", "tableware", "cutlery"].map((item) => (
              <li key={item}>
                <Link href={`/${item}`} className="hover:text-gray-900 transition-colors">
                  {item.replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-start gap-4 py-4 px-4 text-sm text-gray-700">
              {["plant-pots", "ceramics", "cart", "chairs", "crockery", "tableware", "cutlery"].map((item) => (
                <li key={item}>
                  <Link href={`/${item}`} className="hover:text-gray-900 transition-colors">
                    {item.replace("-", " ")}
                  </Link>
                </li>
              ))}
              <li>
                <div className="flex items-center gap-4 mt-4">
                  <form onSubmit={handleSearch} className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-2 py-1 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                    <button type="submit" className="absolute left-2 top-1/2 transform -translate-y-1/2">
                      <Search className="w-4 h-4 text-gray-400" />
                    </button>
                  </form>
                  <button className="p-2 hover:bg-gray-100 rounded-full relative" onClick={handleCartClick}>
                    <ShoppingCart className="w-5 h-5 text-gray-700" />
                    {cartItemCount > 0 && (
                      <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        {cartItemCount}
                      </span>
                    )}
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full" onClick={handleUserClick}>
                    <User className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
