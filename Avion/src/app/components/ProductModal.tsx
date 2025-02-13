import React from 'react';
import Image from 'next/image';

interface ProductModalProps {
  product: {
    name: string;
    price: string;
    image: string;
    description: string;
  };
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-xl font-semibold mb-4">{product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <button className="bg-[#2A254B] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;