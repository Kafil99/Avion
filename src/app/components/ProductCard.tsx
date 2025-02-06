import React from "react";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} passHref>
      <div className="group cursor-pointer">
        <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mt-4 space-y-1 text-center">
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">£{price}</p>
        </div>
      </div>
    </Link>
  );
}
