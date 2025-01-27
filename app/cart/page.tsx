"use client"; // Marks this file as a client component for using React hooks

import React, { useState } from "react";
import Header from "@/components/header"; // Import your header
import Footer from "@/components/footer"; // Import your footer
import Link from "next/link";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000,
      image: "./images/Asgaard.png",
    },
  ]);

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const value = Math.max(1, parseInt(e.target.value) || 1); // Ensure quantity is at least 1
    setQuantity(value);
  };

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const subtotal = quantity * (products.length ? products[0].price : 0);

  return (
    <div className="min-h-screen bg-white">
      <Header /> {/* Include header */}

      {/* Breadcrumb */}
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-4 ml-7">Cart</h1>
        <div className="text-lg text-gray-500 mb-4 ml-7">
          <span className="font-semibold text-black">Home</span> &gt;{" "}
          <span className="text-gray-500">Cart</span>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Cart Items */}
          <div className="col-span-8 p-6 w-[870px] mr-6">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] gap-4 text-sm font-semibold font-medium bg-[#F9F1E7] text-gray-600 border-b pt-3 pb-3 justify-items-center">
              <span className="pl-12">Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>

            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] gap-4 items-center text-sm mt-4"
              >
                {/* Product Info */}
                <div className="flex items-center">
                  <div className="bg-[#F9F1E7] p-2 rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-lg w-16 h-16"
                    />
                  </div>
                  <span className="ml-4 text-gray-800 pl-5 font-medium">
                    {product.name}
                  </span>
                </div>

                {/* Price */}
                <span className="text-gray-800 text-center ">
                  Rs. {product.price.toLocaleString()}
                </span>

                {/* Quantity */}
                <div className="pl-10">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(e, product.id)}
                    className="w-8 h-8 border pl-2 text-center rounded-md border-gray-300 flex items-center justify-center appearance-none leading-tight"
                  />
                </div>

                {/* Subtotal */}
                <span className="text-gray-800 text-center">
                  Rs. {(quantity * product.price).toLocaleString()}
                </span>

                {/* Action */}
                <button onClick={() => handleDeleteProduct(product.id)}>
                  <img
                    src="./images/delete.png"
                    alt="Delete"
                    className="w-6 h-6 mx-auto"
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Cart Totals */}
          <div className="col-span-4 bg-[#F5EFE7] p-6 h-[330px] w-[300px] mt-6 flex flex-col items-center justify-center ml-12">
            <h2 className="text-2xl font-bold mb-8">Cart Totals</h2>
            <div>
              <div className="flex justify-between text-sm mt-8 mb-5">
                <span className="text-black text-base pr-8">Subtotal</span>
                <span className="font-medium text-gray-600 pl-5">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-black text-base pr-5">Total</span>
                <span className="font-bold text-[#B88E2F] text-lg">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>
            </div>
            <Link href="/checkout">
            <button className="w-[150px] mt-4 mb-10 text-black border border-black p-2 rounded-md px-4 py-2">
              Check Out
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="h-[200px] bg-black text-white mt-20 mb-10 flex items-center">
        <div className="flex justify-between space-x-5 max-w-screen-lg w-full text-sm">
          {/* High Quality */}
          <div className="flex items-center space-x-4 ml-12 pl-12 mr-10">
            <img
              src="/images/trophy.png"
              alt="High Quality"
              className="h-15"
            />
            <div className="flex flex-col">
              <span className="text-[#B88E2F] font-semibold whitespace-nowrap text-lg">
                High Quality
              </span>
              <span className="whitespace-nowrap">
                crafted from the top materials
              </span>
            </div>
          </div>

          {/* Warranty Protection */}
          <div className="flex items-center space-x-4 ml-12 pl-12 mr-10 pr-10">
            <img
              src="/images/guarantee.png"
              alt="Warranty Protection"
              className="h-15"
            />
            <div className="flex flex-col">
              <span className="text-[#B88E2F] font-semibold whitespace-nowrap text-lg">
                Warranty Protection
              </span>
              <span className="whitespace-nowrap">Over 2 years</span>
            </div>
          </div>

          {/* Free Shipping */}
          <div className="flex items-center space-x-4 ml-12 pl-12 mr-10 pr-10">
            <img
              src="/images/shipping.png"
              alt="Free Shipping"
              className="h-15"
            />
            <div className="flex flex-col">
              <span className="text-[#B88E2F] font-semibold whitespace-nowrap text-lg">
                Free Shipping
              </span>
              <span className="whitespace-nowrap">Order over 150$</span>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="flex items-center space-x-4 ml-12 pl-12 mr-2">
            <img
              src="/images/customer-support.png"
              alt="24/7 Support"
              className="h-15"
            />
            <div className="flex flex-col">
              <span className="text-[#B88E2F] font-semibold whitespace-nowrap text-lg">
                24/7 Support
              </span>
              <span className="whitespace-nowrap">Dedicated support</span>
            </div>
          </div>
        </div>
      </div>

      <Footer /> {/* Include footer */}
    </div>
  );
}
