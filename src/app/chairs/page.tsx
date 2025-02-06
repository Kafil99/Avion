"use client"

import Image from "next/image";
import { DollarSign, Minus, Paintbrush, Plus, Recycle, Truck } from "lucide-react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const products = [
        {
            id: 1,
            name: "The Dandy chair",
            price: "£250",
            image: "/Images/RightImage.png",
        },
        {
            id: 2,
            name: "Rustic Vase Set",
            price: "£155",
            image: "/Images/Vase.png",
        },
        {
            id: 3,
            name: "The Silky Vase",
            price: "£125",
            image: "/Images/Silkyvase.png",
        },
        {
            id: 4,
            name: "The Lucy Lamp",
            price: "£399",
            image: "/Images/Lucylamp.png",
        },
    ];

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
            <div>
                <Navbar />
            </div>
            <main className="min-h-screen bg-[#F5F5F5] px-4 py-8 md:px-8 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-8 md:flex-row md:gap-16">
                        {/* Product Image */}
                        <div className="w-full md:w-1/2">
                            <div className="aspect-square w-full bg-[#F5F5F5]">
                                <img
                                    src="/Images/Dandychair.png"
                                    alt="The Dandy Chair - A black modern chair with metal frame"
                                    className="h-full w-full object-contain" />
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="w-full md:w-1/2">
                            <h1 className="font-clash-display text-4xl font-medium text-gray-900 md:text-5xl">
                                The Dandy Chair
                            </h1>

                            <p className="mt-4 text-2xl font-medium text-gray-900">£250</p>

                            <div className="mt-8">
                                <h2 className="text-lg font-medium text-gray-900">Description</h2>
                                <p className="mt-2 text-gray-600">
                                    A timeless design, with premium materials features as one of our
                                    most popular and iconic pieces. The dandy chair is perfect for
                                    any stylish living space with beech legs and lambskin leather
                                    upholstery.
                                </p>

                                <ul className="mt-6 space-y-2 text-gray-600">
                                    <li>• Premium material</li>
                                    <li>• Handmade upholstery</li>
                                    <li>• Quality timeless classic</li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-lg font-medium text-gray-900">Dimensions</h2>
                                <table className="mt-4 w-full text-left">
                                    <thead>
                                        <tr className="border-b text-sm">
                                            <th className="pb-2">Height</th>
                                            <th className="pb-2">Width</th>
                                            <th className="pb-2">Depth</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-gray-600">
                                            <td className="pt-2">110cm</td>
                                            <td className="pt-2">75cm</td>
                                            <td className="pt-2">50cm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="flex items-center">
                                    <span className="mr-4 text-gray-700">Amount:</span>
                                    <button
                                        onClick={decreaseQuantity}
                                        className="flex h-8 w-8 items-center justify-center rounded-full border"
                                        aria-label="Decrease quantity"
                                    >
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="mx-4 min-w-[2rem] text-center">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={increaseQuantity}
                                        className="flex h-8 w-8 items-center justify-center rounded-full border"
                                        aria-label="Increase quantity"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>

                                <button className="rounded bg-[#2A254B] px-8 py-2 text-white transition hover:bg-[#2A254B]/90">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="max-w-7xl mx-auto py-24 px-4">
                <h2 className="text-2xl font-normal mb-12">New Ceramics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {products.map((product) => (
                        <div key={product.id} className="group p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-square overflow-hidden bg-[#F5F5F5] mb-6">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-[1.1rem] font-medium text-gray-900">{product.name}</h3>
                                <p className="text-gray-600">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button className="border border-gray-900 text-gray-900 px-12 py-3 hover:bg-gray-900 hover:text-white transition-colors text-sm rounded-md">
                        View Collection
                    </button>
                </div>
            </section>
            
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

      <Newsletter/>

          <Footer />

            </>
    );
}