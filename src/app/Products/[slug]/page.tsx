import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/app/components/Navbar";
import { GetStaticProps, GetStaticPaths } from "next";

// Define your own type for the page props
interface ProductPageProps {
  product: Product;
}

async function getProduct(slug: string): Promise<Product | null> {
  try {
    return await client.fetch(
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
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// This function is used to generate the paths for all products
export const getStaticPaths: GetStaticPaths = async () => {
  const products = await client.fetch(
    groq`*[_type == "product"]{ "slug": slug.current }`
  );

  const paths = products.map((product: { slug: string }) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false, // Use false to show 404 for paths not in the array
  };
};

// This function fetches the data for each page at build time
export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const product = await getProduct(slug);

  if (!product) {
    return {
      notFound: true, // Return a 404 if the product is not found
    };
  }

  return {
    props: { product },
  };
};

export default function ProductPage({ product }: ProductPageProps) {
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
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-2xl font-semibold text-gray-800">${product.price}</p>
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-auto bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                  Add to Cart
                </button>
                <button className="w-full sm:w-auto bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300">
                  Buy Now
                </button>
              </div>

              {/* Additional Information */}
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
