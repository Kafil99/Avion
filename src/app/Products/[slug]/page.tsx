import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/app/components/Navbar";

interface ProductPageProps {
    params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
            _id,
            name,
            _type,
            image,
            price,
            description,
        }`,
        { slug }
    );
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = params;
    const product = await getProduct(slug);

    return (
        <>
        
        <Navbar />
        
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden p-6">
                        {product.image && (
                            <Image
                                src={urlFor(product.image).url()}
                                alt={product.name}
                                width={600}
                                height={600}
                                className="w-full h-full object-contain" />
                        )}
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col gap-8">
                        <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
                        <p className="text-2xl font-semibold text-gray-800">
                            ${product.price}
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Call-to-Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="w-full sm:w-auto bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                Add to Cart
                            </button>
                            <button className="w-full sm:w-auto bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                                Buy Now
                            </button>
                        </div>

                        {/* Additional Information (Optional) */}
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-700">Availability:</span>
                                <span className="text-green-600 font-medium">In Stock</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}