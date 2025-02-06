import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
}

interface ProductDetailProps {
  products: Product[];
}

export function ProductDetail({ products }: ProductDetailProps) {
  const router = useRouter();
  const { id } = router.query;
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
        <Link href="/" className="text-blue-600 hover:underline">
          Return to products
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (value: number) => {
    if (value >= 1) setQuantity(value);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to products
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-gray-100 relative">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-xl text-gray-900 mt-2">£{product.price}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Description</h3>
              <p className="text-gray-500">{product.description}</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity</span>
                <div className="flex items-center border border-gray-200 rounded">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(parseInt(e.target.value))
                    }
                    className="w-12 text-center border-x border-gray-200"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors">
                Add to cart
              </button>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-medium mb-2">Dimensions</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <span className="text-gray-500 text-sm">Height</span>
                  <p>{product.dimensions.height}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Width</span>
                  <p>{product.dimensions.width}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Depth</span>
                  <p>{product.dimensions.depth}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
