"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { removeFromCart } from "@/app/store/cartSlice";
import ProductPage from "../Product/page.jsx";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { useAuth } from "@clerk/nextjs";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
 const { isSignedIn, user } = useUser();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleStripeCheckout = async () => {
    if (!isSignedIn) {
      setShouldRedirect(true);
      return;
    }

    const stripe = await stripePromise;

    const res = await fetch("/api/orders", {
     method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      userId: user.id,
    items: cartItems.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      imageUrl: item.imageUrl,
      price: item.price,
    })),
  }),
});

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Stripe checkout failed.");
    }
  };

  if (shouldRedirect) {
    return <RedirectToSignIn />;
  }

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <ProductPage />
      </div>

      <div className="absolute inset-0 bg-gray-800 min-h-screen bg-opacity-50 z-10"></div>

      <div className="absolute top-0 right-0 h-[515px] w-96 bg-white z-20 shadow-lg p-6">
        <div className="flex border-b pb-4">
          <h2 className="text-2xl font-bold mr-auto">Shopping Cart</h2>
          <button className="p-2">
            <a href="/Product" className="block w-full h-full">
              <img
                src="/images/Group.png"
                alt="group"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
          </button>
        </div>

        <ul className="space-y-4 mt-4 overflow-auto max-h-64">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
                <li key={item.id || `${item.name}-${index}`} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-lg" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500">
                      {item.quantity} x{" "}
                      <span className="text-yellow-600 font-semibold">
                        Rs. {item.price.toLocaleString()}
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  className="text-gray-400 hover:text-gray-600"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  &times;
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-4">Your cart is empty.</p>
          )}
        </ul>

        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between font-semibold text-lg">
            <span>Subtotal</span>
            <span className="text-yellow-600">Rs. {subtotal.toLocaleString()}</span>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <Link href="/cart">
            <button className="w-[100px] border border-black text-black py-2 rounded-3xl">
              Cart
            </button>
          </Link>
          <button
            onClick={handleStripeCheckout}
            className="w-[130px] border border-black text-black py-2 rounded-3xl"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
