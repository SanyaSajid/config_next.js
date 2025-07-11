"use client";
import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="bg-white ">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Furniro Logo"
            className="h-8"
          />
          <span className="ml-3 font-bold text-xl text-gray-800">Furniro</span>
        </div>

        <nav className="flex items-center space-x-8">
          <a href="/" className="text-gray-800 hover:text-gray-600">
            Home
          </a>
          <a href="/shop" className="text-gray-800 hover:text-gray-600">
            Shop
          </a>
          <a href="/about" className="text-gray-800 hover:text-gray-600">
            About
          </a>
        </nav>

        <div className="flex items-center space-x-6">

            <SignedOut>
              <a href="/sign-in">
                 <img src="/images/user.png" alt="User" className="h-6" />
               </a>
            </SignedOut>

          <SignedIn>
                 <UserButton afterSignOutUrl="/" />
             </SignedIn>
          <a href="/shop">
          <img src="/images/search.png" alt="Search" className="h-6" /></a>
          <a href="/cart"><img src="/images/heart.png" alt="Wishlist" className="h-6" />
          </a>
          
          <a href="/cartside"><img src="/images/cart.png" alt="Cart" className="h-6" /></a>

        </div>
      </div>
    </header>
  );
};

export default Header;
