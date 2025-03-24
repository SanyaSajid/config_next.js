"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/cartSlice";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

type Product = {
  _id: string;
  name: string;
  image: string;
  price: number;
  description?: string; 
};

export default function Shop() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(
        `*[_type == "product" && name != "Asgaard sofa"]{
          _id, 
          name, 
          "image": image.asset->url, 
          price, 
          description
        }[0...8]`
      );
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header />

      <div className="bg-[#F9F1E7] pb-6">
        <div className="py-10 text-center mb-18">
          <h2 className="text-4xl font-semibold mt-6">Shop</h2>
          <p className="text-gray-600 mt-3 mb-9 text-lg">
            <span className="font-semibold">Home</span> &gt; Shop
          </p>
        </div>

        <div className="py-2 border-t-2 border-gray-50 mt-8">
          <div className="max-w-screen-xl pt-1 px-6 flex justify-between items-center text-gray-700 pt-5">
            <div className="flex items-center space-x-4">
              <Image src="/images/filter.png" alt="Filter" width={24} height={24} />
              <span className="text-lg">Filter</span>
              <Image src="/images/a.png" alt="Pic" width={24} height={24} />
              <Image src="/images/b.png" alt="Pict1" width={24} height={24} />
              <div className="h-6 w-px bg-gray-400"></div>
              <span className="text-lg">Showing 1-16 of 32 results</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-lg">Show</span>
              <button className="border px-4 py-0 rounded-md text-lg bg-white text-gray-500">
                16
              </button>
              <span className="text-lg">Sort by</span>
              <button className="border px-4 py-0 rounded-md flex items-center text-lg bg-white text-gray-500">
                Default
              </button>
            </div>
          </div>
        </div>
        </div>

        <div className="container mx-auto mt-4 p-4">
       
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={`${product._id}-${index}`} className="border rounded-lg shadow-lg group relative bg-white">
                <Link href={`/product/${encodeURIComponent(product.name)}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </Link>
                <h2 className="text-lg font-semibold pl-2 mt-2">{product.name}</h2>

                {product.description && (
                  <p className="text-gray-700 text-lg pl-2 pt-1">{product.description}</p>
                )}

                <p className="text-base font-semibold pl-2 pt-1 mb-2">Rp {product.price}.000</p>

                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <Button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: index,
                          name: product.name,
                          price: product.price,
                          quantity: 1,
                          imageUrl: product.image,
                        })
                      )
                    }
                    
                    className="bg-white !text-[#B88E2F] px-4 py-2 font-semibold rounded-md mb-2"
                  >
                    Add to Cart
                  </Button>
                  <div className="flex space-x-3">
                    <button className="bg-transparent text-white px-4 py-2 flex items-center justify-center space-x-2">
                      <Image src="/images/share.png" alt="Share" width={20} height={20} />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="bg-transparent text-white px-4 py-2 flex items-center justify-center space-x-2">
                      <Image src="/images/heartt.png" alt="Like" width={20} height={20} />
                      <span className="text-sm font-medium">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4 my-6 pt-4">
            <button className="bg-[#B88E2F] text-white px-6 py-2 rounded-lg">1</button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg">2</button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg">3</button>
            <button className="bg-[#B88E2F] text-white px-6 py-2 rounded-lg">Next</button>
          </div>
          </div>

          <div className="h-[200px] bg-black text-white mt-20 mb-10 flex items-center">
            <div className="flex justify-between space-x-5 max-w-screen-lg w-full text-sm">
              {[
                { src: "/images/trophy.png", title: "High Quality", desc: "crafted from the top materials" },
                { src: "/images/guarantee.png", title: "Warranty Protection", desc: "Over 2 years" },
                { src: "/images/shipping.png", title: "Free Shipping", desc: "Order over 150$" },
                { src: "/images/customer-support.png", title: "24/7 Support", desc: "Dedicated support" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <Image src={item.src} alt={item.title} width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="text-[#B88E2F] font-semibold whitespace-nowrap text-lg">{item.title}</span>
                    <span className="whitespace-nowrap">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
      

      <Footer />
    </>
  );
}
