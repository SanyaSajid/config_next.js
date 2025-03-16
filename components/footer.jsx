"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-black py-10 mt-10  border border-gray-300 pb-5 pt-10 ">
      <div className="max-w-screen-xl mx-auto px-6 flex gap-8">
        <div style={{ width: "35%" }}>
          <h3 className="text-lg font-bold mb-4 pl-12">Funiro.</h3>
        </div>
        <div style={{ width: "15%" }}>
          <h4 className="text-lg font-semibold mb-12 text-[#9F9F9F]">Links</h4>
          <ul className="space-y-8 ">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div style={{ width: "15%" }}>
          <h4 className="text-lg font-semibold mb-12 text-[#9F9F9F]">Help</h4>
          <ul className="space-y-8 ">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div style={{ width: "30%" }}>
          <h4 className="text-lg font-semibold mb-12 text-[#9F9F9F]">
            Newsletter
          </h4>
          <form>
            <div className="flex items-center space-x-4 border-b border-black pb-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 text-black rounded-md"
              />
              <button className="bg-white text-black px-4 py-2 rounded-md">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-8 border-t border-gray-600 pt-4 px-6 flex justify-between items-center">
        <p className="text-center mt-4 text-black">
          2023 Funiro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
