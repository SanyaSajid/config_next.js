"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";


interface CartItem {
  name: string;
  price: string;
  desc: string;
  src: string;
}
const products = [
  { name: "Syltherine", price: "Rp 2.500.000", image: "/images/image 1.png", description: "Stylish cafe chair" },
  { name: "Leviosa", price: "Rp 2.500.000", image: "/images/Leviosa.png", description: "Stylish cafe chair" },
  { name: "Lolito", price: "Rp 7.000.000", image: "/images/image 3.png", description: "Luxury big sofa" },
  { name: "Respira", price: "Rp 500.000", image: "/images/image 4.png", description: "Outdoor bar table and stool" },
  { name: "Grifo", price: "Rp 1.500.000", image: "/images/image 9.png", description: "Night lamp" },
  { name: "Muggo", price: "Rp 1.50.000", image: "/images/image 6.png", description: "Small mug" },
  { name: "Pingky", price: "Rp 7.000.000", image: "/images/image 7.png", description: "Cute bed sheet" },
  { name: "Potty", price: "Rp 500.000", image: "/images/image 8.png", description: "Minimalist flower pot" },
 
];

const Home = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[500px]  ">
        <Image
          src="/images/front.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute right-16 top-1/3 bg-[#FFF3E3] bg-opacity-80 p-6 rounded-lg shadow-lg max-w-md">
          <h2 className="text-4xl font-bold text-[#B88E2F] mb-4">
            Discover Our New Collection
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Link href="/shop">
        <button className="mt-6 bg-[#B88E2F] text-white px-6 py-3 rounded-md text-lg">
          Buy Now
        </button>
      </Link>
         
        </div>
      </section>

      {/* Browse The Range Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Browse The Range</h2>
        <p className="text-lg text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 px-20">
          <div className="flex flex-col items-center">
            <Image
              src="/images/image.png"
              alt="Dining"
              width={320}
              height={250}
            />
            <h3 className="text-xl font-semibold mt-4">Dining</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/image16.png"
              alt="Living Room"
              width={320}
              height={250}
            />
            <h3 className="text-xl font-semibold mt-4">Living Room</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/image10.png"
              alt="Bedroom"
              width={320}
              height={250}
            />
            <h3 className="text-xl font-semibold mt-4">Bedroom</h3>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-16 bg-white ">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Products</h2>
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
                    <Image src="/images/heartt.png" alt="Like" width={20} height={20} />
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
            
              <section className="bg-[#FCF8F3] p-8 text-center flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
<div className="w-full lg:w-[30%] text-left ml-0 lg:ml-20">
  <h1 className="text-2xl md:text-4xl font-bold mb-4">
    50+ Beautiful rooms <br /> Inspiration
  </h1>
  <p className="text-gray-600 mb-6">
    Our designer already made a lot of beautiful prototipes of rooms that inspire you.
  </p>
  <button className="bg-[#B88E2F] text-white py-2 px-6 md:py-4 md:px-12 font-bold text-sm hover:bg-yellow-600 transition rounded">
    Explore More
  </button>
</div>

<div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
  <div className="relative w-full sm:w-auto">
    <img
      src="/images/Rectangle 24.png"
      alt="frames"
      className="w-full sm:w-auto max-w-full h-auto"
    />
    <div className="flex">
      <div className="absolute  absolute top-3/4 left-1/3  transform -translate-x-1/2 ">
                <img
      src="/images/Rectangle 29.png"
      alt="box"
    />
</div>
      <div className="absolute bottom-5 left-2/3 sm:right-1/3">
        <button className="bg-[#B88E2F] px-3 sm:px-4 py-2 text-white font-bold">
          →
        </button>
      </div>
    </div>
  </div>
    <img src="/images/Rectangle 25.png"alt="dininghall" />
    <img src="/images/Rectangle 26.png" alt="half" />
    </div>
    </section>


        {/* Hashtag Section */}
        <div className="text-center mt-10 pt-10">
                    <p className="text-lg text-gray-800 mb-2">Share your setup with</p>
                    <h2 className="text-3xl text-black font-bold">#FuniroFurniture</h2>
                </div>
                <div className="min-h-screen py-16">
  <section className="text-center">
    <div className="flex">
    <div className="grid grid-cols-1 gap-1 max-w-6xl ">
      <img
        src="/images/Rectangle 36.png"
        alt="Furniture 1"
        className="col-span-1 row-span-1 "
      />
      <img
        src="/images/Rectangle 37.png"
        alt="Furniture 2"
        className="col-span-1 row-span-1 "
      />
      </div>
      <div className=' grid grid-cols-1 gap-2 max-w-6xl' >
      <img
        src="/images/Rectangle 38.png"
        alt="Furniture 3"
        className=""
      />
      <img
        src="/images/Rectangle 39.png"
        alt="Furniture 4"
        className="col-span-1 "
      />
      </div>
      <div  className=' m-4 items-center justify-center grid grid-cols-1 gap-2 max-w-6xl'>
      <img
        src="/images/Rectangle 40.png"
        alt="Furniture 5"
        className=""
      />
      </div>
      <div  className='m-4 pt-8 grid grid-cols-1 gap-2 max-w-6xl'>
      <img
        src="/images/Rectangle 43.png"
        alt="Furniture 6"
        className=""
      />
      <img
        src="/images/Rectangle 41.png"
        alt="Furniture 7"
        className=""
      />
      </div>
      <div className='m-4 grid grid-cols-1 gap-2 max-w-6xl'>
      <img
        src="/images/Rectangle 45.png"
        alt="Furniture 8"
        className=""
      />
      <img
        src="/images/Rectangle 44.png"
        alt="Furniture 9"
        className="col-span-1 row-span-1"
      />
    </div>
    </div>
  </section>
</div>


           
      </section>
    
      <Footer />
    </div>
  );
};

export default Home;