"use client"; // Marks this file as a client component for using React hooks

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { removeFromCart, updateQuantity } from "@/app/store/cartSlice";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
 
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    dispatch(updateQuantity({ id, quantity: value }));
  };

  const handleDeleteProduct = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-4 ml-7">Cart</h1>
        <div className="text-lg text-gray-500 mb-4 ml-7">
          <span className="font-semibold text-black">Home</span> &gt; <span className="text-gray-500">Cart</span>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 p-6 w-[870px] mr-6">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] gap-4 text-sm font-semibold bg-[#F9F1E7] text-gray-600 border-b pt-3 pb-3 justify-items-center">
              <span className="pl-12">Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
            {cart.map((product) => {
              
                      return (
              <div key={product.id} className="grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] gap-4 items-center text-sm mt-4">
                <div className="flex items-center">
                  <div className="bg-[#F9F1E7] p-1 rounded-lg">
                    <img src={product.imageUrl} alt={product.name} className="rounded-lg w-16 h-16" />
                  </div>
                  <span className="ml-4 text-gray-800 pl-5 font-medium">{product.name}</span>
                </div>
                <span className="text-gray-800 text-center">Rs. {product.price.toLocaleString()}</span>
                <div className="pl-10">
                  <input type="number" value={product.quantity} onChange={(e) => handleQuantityChange(e, product.id)} className="w-8 h-8 border pl-2 text-center rounded-md border-gray-300" />
                </div>
                <span className="text-gray-800 text-center">Rs. {(product.quantity * product.price).toLocaleString()}</span>
                <button onClick={() => handleDeleteProduct(product.id)}>
                  <img src="./images/delete.png" alt="Delete" className="w-6 h-6 mx-auto" />
                </button>
              </div>
            )})}
          </div>
          <div className="col-span-4 bg-[#F5EFE7] p-6 h-[330px] w-[300px] mt-6 flex flex-col items-center justify-center ml-12">
            <h2 className="text-2xl font-bold mb-8">Cart Totals</h2>
            <div>
              <div className="flex justify-between text-sm mt-8 mb-5">
                <span className="text-black text-base pr-8">Subtotal</span>
                <span className="font-medium text-gray-600 pl-5">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-black text-base pr-5">Total</span>
                <span className="font-bold text-[#B88E2F] text-lg">Rs. {subtotal.toLocaleString()}</span>
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
      <Footer />
    </div>
  );
}
