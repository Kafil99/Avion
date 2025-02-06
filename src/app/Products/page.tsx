"use client";

import React, { useEffect, useState } from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { FilterDropdown } from "../components/FilterDropdown";
import Navbar from "../components/Navbar";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "../../../types/products";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2"


export default function Products() {

  const [product, setproduct] = useState<Product[]>([])
  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts)
      setproduct(fetchedProduct)
    }
    fetchProduct()
  })

  const handelAddToCart = (e : React.MouseEvent , product: Product) => {
    e.preventDefault()
    Swal.fire({
        position: "top-right",
        icon: "success",
        title: `${product.name} added to cart`,
        showConfirmButton: false,
        timer: 1000
    })
    addToCart(product)
  }

  
  const [category, setCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const categories = ["Electronics", "Clothing", "Books", "Home & Garden"];
  const productTypes = ["New", "Used", "Refurbished"];
  const priceRanges = ["Under $50", "$50-$100", "$100-$500", "Over $500"];
  const brands = [
    "IKEA",
    "Ashley Furniture",
    "West Elm",
    "Pottery Barn",
    "Restoration Hardware",
    "Crate & Barrel",
    "La-Z-Boy",
    "Ethan Allen",
  ];
  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Most Popular",
  ];
  const dateOptions = [
    "Last 24 hours",
    "Last 7 days",
    "Last 30 days",
    "Last year",
  ];
  return (
    <>
    <div>
      <Navbar />
    </div>
    <Router>
      <div className="w-full min-h-full">
        <section className="relative w-full h-[300px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("/Images/books-bg.png")',
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              All products
            </h1>
          </div>
        </section>
        <div className="w-full border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-4">
                <FilterDropdown
                  label="Category"
                  options={categories}
                  value={category}
                  onChange={setCategory}
                />
                <FilterDropdown
                  label="Product type"
                  options={productTypes}
                  value={productType}
                  onChange={setProductType}
                />
                <FilterDropdown
                  label="Price"
                  options={priceRanges}
                  value={price}
                  onChange={setPrice}
                />
                <FilterDropdown
                  label="Brand"
                  options={brands}
                  value={brand}
                  onChange={setBrand}
                />
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-sm text-gray-500">Sorting by:</span>
                <FilterDropdown
                  label="Sort by"
                  options={sortOptions}
                  value={sortBy}
                  onChange={setSortBy}
                />
                <FilterDropdown
                  label="Date added"
                  options={dateOptions}
                  value={dateAdded}
                  onChange={setDateAdded}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {product.map((product) => (
            <div
              key={product._id}
              className="group p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/Products/${product.slug.current}`} className="block">
                <div className="aspect-square overflow-hidden bg-[#F5F5F5] mb-6">
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url() || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width={500}
                      height={500}
                    />
                  )}
                </div>
                <h3 className="text-[1.1rem] font-medium text-gray-900">{product.name}</h3>
              </Link>
              <p className="text-gray-600">£{product.price}</p>
              <button
                className="mt-2 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                onClick={(e) => handelAddToCart(e , product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </Router>
    </>
  );
}
