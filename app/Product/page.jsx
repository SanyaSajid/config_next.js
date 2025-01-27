
"use client"; // Marks this file as a client component for using React hooks

import React from "react";
import Image from "next/image"; // Import Image from next/image
import Header from "@/components/header"; // Import your header
import Footer from "@/components/footer"; // Import your footer
import Link from "next/link";

const products = [
    { name: "Syltherine", price: "Rp 2.500.000", image: "/images/image 1.png", description: "Stylish cafe chair" },
    { name: "Leviosa", price: "Rp 2.500.000", image: "/images/image2.png", description: "Stylish cafe chair" },
    { name: "Lolito", price: "Rp 7.000.000", image: "/images/image 3.png", description: "Luxury big sofa" },
    { name: "Respira", price: "Rp 500.000", image: "/images/image 4.png", description: "Outdoor bar table and stool" },  
  ];

export default function ProductPage() {
  return (
    <>
      <Header />

      {/* Breadcrumb Section */}
      <div className="flex h-[53px] bg-[#F9F1E7] text-lg text-gray-500 mt-4 pt-2 pl-7">
        <span className="text-gray-500 p-[2px]">Home</span>
        <span className="text-black p-[2px]"> &gt; </span>
        <span className="text-gray-500 p-[2px]">Shop</span>
        <span className="text-black p-[2px]"> &gt; </span>
        <div className="w-[1px] h-[25px] bg-gray-500 mr-1 ml-2 "></div>
        <span className="text-gray-500 ml-2 p-[2px]">Asgaard Sofa</span>
      </div>

      {/* Main Product Section */}
      <div className="min-h-screen py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Left Section: Images */}
 <div className="grid grid-cols-[auto_1fr] gap-x-1">
 {/* Left thumbnails */}
 <div className="flex flex-col gap-y-2 mt-12">
   {[1, 2, 3, 4].map((_, index) => (
     <div key={index} className="aspect-w-1 aspect-h-1">
       <Image
         src={`/images/${index + 1}.png`} // Replace with your thumbnails
         alt={`Thumbnail ${index + 1}`}
         width={70}
         height={80}
         className="object-cover m-3 bg-[#F9F1E7]"
       />
     </div>
   ))}
 </div>

 {/* Large Image */}
 <div className="w-full h-[600px] flex items-center justify-center">
   <Image
     src="/images/Asgaard sofa 3.png" // Replace with your image
     alt="Asgaard Sofa"
     width={400}
     height={500}
     className="object-cover bg-[#F9F1E7]"
   />
 </div>
</div>

          {/* Right Section: Product Details */}
          <div>
            <h1 className="text-3xl font-semibold mb-3">Asgaard Sofa</h1>
            <p className="text-xl text-gray-500 font-medium mb-12">Rs. 250,000.00</p>
            <p className="text-gray-600 mb-6 mt-2">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
              highs for a sound.
            </p>

            {/* Size Options */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-300 ">Size</h3>
              <div className="flex space-x-3">
                {['L', 'XL', 'XS'].map((size, index) => (
                  <button
                    key={index}
                    className="border px-4 py-2 rounded-lg hover:bg-[#B88E2F] transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-300 ">Color</h3>
              <div className="flex space-x-3">
                {['#816DFA', '#000000', '#B88E2F'].map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border-2"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div  className="flex">
            <div className="flex items-center border border-black rounded-lg p-2 w-[180px] justify-between">
      <span className="text-lg font-bold px-4 py-2">-</span>
      <span className="text-lg font-semibold">1</span>
      <span className="text-lg font-bold px-4 py-2">+</span>
    </div>
            <Link href="/cartside">
            <button className="w-[210px] py-3 ml-6 text-black border border-black rounded-lg transition" >
              Add To Cart
            </button>
            </Link>
          
      </div>
            <div className="border-t-2 border-gray-300 mt-10 mb-4"></div>


          {/* Additional Info */}
<div className="mt-8 flex flex-row">
  {/* First Column (Labels) */}
  <div className="space-y-4 text-sm text-gray-600 pl-2 pr-6 font-medium">
    <p>SKU</p>
    <p>Category</p>
    <p>Tags</p>
    <p>Share</p>
  </div>

  {/* Second Column (Values for SKU S5001) */}
  <div className="space-y-4 text-sm text-gray-600 pr-6 font-medium">
    <p>:</p>
    <p>:</p>
    <p>:</p>
    <p>:</p>
  </div>

  {/* Third Column (Values for SKU SS001) */}
  <div className="space-y-4 text-sm text-gray-600 font-medium">
    <p>SS001</p>
    <p>Chairs</p>
    <p>Chair, Furniture, Living Room</p>
    <div className="flex items-center space-x-2">
      <Image src="/images/facebook.png" alt="Facebook" width={20} height={20} />
      <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} />
      <Image src="/images/twitter.png" alt="Twitter" width={20} height={20} />
    </div>
  </div>
</div>


          </div>
        </div>

        {/* Description Section */}
        <div className="mt-12">
          <div className="flex space-x-6 border-t pt-8 pr-12 items-center justify-center">
            <button className="text-lg font-semibold border-black ">Description</button>
            <button className="text-lg font-semibold text-gray-400 pl-8">Additional Information</button>
          </div>

          <p className="mt-6 text-gray-700 pl-5">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker
            takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on
            the road.
          </p>
          <p className="mt-6 text-gray-700 pl-5">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
            <Image
              src="/images/sofa.png" // Replace with your images
              alt="Description Image 1"
              width={540}
              height={300}
              className="rounded-lg object-cover ml-5 bg-[#F9F1E7]"
            />
            <Image
              src="/images/sofa.png" // Replace with your images
              alt="Description Image 2"
              width={540}
              height={300}
              className="rounded-lg object-cover bg-[#F9F1E7]"
            />
          </div>
        </div>
      </div>
      {/* Our Products Section */}
         <div className="border-t border-gray-300 pb-5 pt-10 mt-5">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Related Products</h2>
                <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-4 gap-3 py-6 mt-6 "> {/* Reduced gap and padding */}
                {products.map((product, index) => (
                  <div key={index} className="relative bg-white shadow-md overflow-hidden group ml-4 mr-4 mt-2 mb-2">
                    <Image src={product.image} alt={product.name} width={110} height={140} className="w-full" /> {/* Reduced image size */}
                    <div className="p-2"> {/* Reduced padding */}
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-500 text-sm">{product.description}</p>
                      <p className="text-gray-900 font-bold">{product.price}</p>
                    </div>
             
            
              
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <button className="bg-white text-[#B88E2F] px-4 py-2 font-semibold rounded-md mb-2">Add to cart</button>
                      <div className="flex space-x-3"> {/* Reduced space between buttons */}
                        <button className="bg-transparent text-white px-4 py-2 flex items-center justify-center space-x-2">
                          <Image src="/images/share.png" alt="Share" width={20} height={20} />
                          <span className="text-sm font-medium">Share</span>
                        </button>
                        <button className="bg-transparent text-white px-4 py-2 flex items-center justify-center space-x-2">
                          <Image src="/images/heart1.png" alt="Like" width={20} height={20} />
                          <span className="text-sm font-medium">Like</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center space-x-4 my-6">
              <button className="bg-white text-[#B88E2F] border border-[#B88E2F] px-6 py-2 ">
                Show More
              </button>
                    </div>
                    </div>
     
      <Footer />
    </>
  );
}
