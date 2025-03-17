"use client";
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image";

const products = [
  { name: "Syltherine", price: "Rp 2.500.000", image: "/images/image 1.png", description: "Stylish cafe chair" },
  { name: "Leviosa", price: "Rp 2.500.000", image: "/images/Leviosa.png", description: "Stylish cafe chair" },
  { name: "Lolito", price: "Rp 7.000.000", image: "/images/image 3.png", description: "Luxury big sofa" },
  { name: "Respira", price: "Rp 500.000", image: "/images/image 4.png", description: "Outdoor bar table and stool" },
  { name: "Syltherine", price: "Rp 2.500.000", image: "/images/image 1.png", description: "Stylish cafe chair" },
  { name: "Leviosa", price: "Rp 2.500.000", image: "/images/Leviosa.png", description: "Stylish cafe chair" },
  { name: "Lolito", price: "Rp 7.000.000", image: "/images/image 3.png", description: "Luxury big sofa" },
  { name: "Respira", price: "Rp 500.000", image: "/images/image 4.png", description: "Outdoor bar table and stool" },
  { name: "Syltherine", price: "Rp 2.500.000", image: "/images/image 1.png", description: "Stylish cafe chair" },
  { name: "Leviosa", price: "Rp 2.500.000", image: "/images/Leviosa.png", description: "Stylish cafe chair" },
  { name: "Lolito", price: "Rp 7.000.000", image: "/images/image 3.png", description: "Luxury big sofa" },
  { name: "Respira", price: "Rp 500.000", image: "/images/image 4.png", description: "Outdoor bar table and stool" },
];

const ShopPage = () => {
  return (
    <div>
      <Header />

      {/* Shop Header & Filter Section */}
      <div className="bg-[#F9F1E7] pb-6">
        <div className="py-10 text-center mb-18">
          <h2 className="text-4xl font-semibold mt-6">Shop</h2>
          <p className="text-gray-600 mt-3 mb-9 text-lg">
            <span className="font-semibold">Home</span> &gt; Shop
          </p>
        </div>

        {/* Filter & Sort Options */}
        <div className="py-2 border-t-2 border-gray-50 mt-8">
          <div className="max-w-screen-xl pt-1 px-6 flex justify-between items-center text-gray-700 pt-5">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <Image src="/images/filter.png" alt="Filter" width={24} height={24} />
              <span className="text-lg">Filter</span>
              <Image src="/images/a.png" alt="Pic" width={24} height={24} />
              <Image src="/images/b.png" alt="Pict1" width={24} height={24} />
              <div className="h-6 w-px bg-gray-400"></div>
              <span className="text-lg">Showing 1-16 of 32 results</span>
            </div>
            {/* Right Section */}
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

      {/* Product Grid */}
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-4 gap-3 py-6 mt-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md overflow-hidden group ml-4 mr-4 mt-2 mb-2"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={110}
              height={140}
              className="w-full"
            />
            <div className="p-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <p className="text-gray-900 font-bold">{product.price}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <button className="bg-white text-[#B88E2F] px-4 py-2 font-semibold rounded-md mb-2">
                Add to cart
              </button>
              <div className="flex space-x-3">
                <button className="bg-transparent text-white px-4 py-2 flex items-center justify-center space-x-2">
                  <Image
                    src="/images/share.png"
                    alt="Share"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-medium">Share</span>
                </button>
                <button className="bg-transparent text-white px-4 py-2 flex items-center justify-center space-x-2">
                  <Image
                    src="/images/heartt.png"
                    alt="Like"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-medium">Like</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center space-x-4 my-6">
        <button className="bg-[#B88E2F] text-white px-6 py-2 rounded-lg">
          1
        </button>
        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg">
          2
        </button>
        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg">
          3
        </button>
        <button className="bg-[#B88E2F] text-white px-6 py-2 rounded-lg">
          Next
        </button>
      </div>
      <div className="h-[200px] bg-black text-white mt-20 mb-10 flex items-center">
  <div className="flex justify-between space-x-5 max-w-screen-lg w-full text-sm">
    {/* High Quality */}
    <div className="flex items-center space-x-4 ml-12 pl-12 mr-10">
      <img src="/images/trophy.png" alt="High Quality" className="h-15" />
      <div className="flex flex-col">
      <span className="text-[#B88E2F] font-semibold whitespace-nowrap text-lg">High Quality</span>
        <span className="whitespace-nowrap">crafted from the top materials</span>
      </div>
    </div>

    {/* Warranty Protection */}
    <div className="flex items-center space-x-4 ml-12 pl-12 mr-10 pr-10">
      <img src="/images/guarantee.png" alt="Warranty Protection" className="h-15" />
      <div className="flex flex-col">
      <span className="text-[#B88E2F] font-semibold whitespace-nowrap text-lg">Warranty Protection</span>
        <span className="whitespace-nowrap">Over 2 years</span>
      </div>
    </div>

    {/* Free Shipping */}
    <div className="flex items-center space-x-4 ml-12 pl-12 mr-10 pr-10">
      <img src="/images/shipping.png" alt="Free Shipping" className="h-15" />
      <div className="flex flex-col">
      <span className="text-[#B88E2F] font-semibold whitespace-nowrap text-lg">Free Shipping</span>
        <span className="whitespace-nowrap">Order over 150$</span>
      </div>
    </div>

    {/* 24/7 Support */}
    <div className="flex items-center space-x-4 ml-12 pl-12 mr-2">
      <img src="/images/customer-support.png" alt="24/7 Support" className="h-15" />
      <div className="flex flex-col">
      <span className="text-[#B88E2F] font-semibold whitespace-nowrap text-lg">24/7 Support</span>
        <span className="whitespace-nowrap">Dedicated support</span>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
};

export default ShopPage;













