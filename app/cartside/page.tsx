// pages/cart.tsx
import React from 'react';

import ProductPage from '../Product/page.jsx'; // adjust the path
import Link from "next/link";

const CartPage = () => {
  return (
    <div className="relative h-screen">
      {/* ProductPage as background */}
      <div className="absolute inset-0 z-0">
        <ProductPage />
      </div>

      {/* Shadow grey overlay */}
      <div className="absolute inset-0 bg-gray-800 min-h-screen bg-opacity-50 z-10"></div>


      {/* Shopping cart sidebar */}
      <div className="absolute top-0 right-0 h-[450px] w-96 bg-white z-20 shadow-lg">
  <div className=" p-6">
    <div className='flex border-b'>
    <h2 className="text-2xl font-bold mb-6 mr-10 pr-8">Shopping Cart</h2>
    <img src="/images/Group.png" alt="group" className="w-6 h-6 ml-10 mt-1" /></div>
    <ul className="space-y-6">
      <li className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center space-x-4">
          <img src="/images/Asgaard5.png" alt="Asgaard sofa" className="w-16 h-16 rounded-lg" />
          <div>
            <p className="font-medium">Asgaard sofa</p>
            <p className="text-gray-500">1 x <span className="text-yellow-600 font-semibold">Rs. 250,000.00</span></p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">&times;</button>
      </li>
      <li className="flex items-center justify-between border-b pb-4 mb-10">
        <div className="flex items-center space-x-4 ">
          <img src="/images/Asgaard5(1).png" alt="Casaliving Wood" className="w-16 h-16 rounded-lg" />
          <div>
            <p className="font-medium">Casaliving Wood</p>
            <p className="text-gray-500">1 x <span className="text-yellow-600 font-semibold">Rs. 270,000.00</span></p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">&times;</button>
      </li>
    </ul>
    <div className="mt-6 border-t pt-4 mt-10">
      <div className="flex justify-between font-semibold text-lg ">
        <span>Subtotal</span>
        <span className="text-yellow-600">Rs. 520,000.00</span>
      </div>
    </div>
    <div className="mt-6 flex space-x-4">
    <Link href="/cart">
      <button className="w-[150px] border border-black text-black py-2 rounded-2xl">Cart</button>  </Link>
      <button className="w-[150px]  border border-black text-black py-2 rounded-2xl ">Checkout</button>
    </div>
  </div>
</div>

    </div>
  );
};

export default CartPage;
