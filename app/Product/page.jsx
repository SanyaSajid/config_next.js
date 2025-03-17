"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { createClient } from "@sanity/client";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/cartSlice";


const sanityClient = createClient({
  projectId: "kd8y05km",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true, // Use CDN for faster responses
});

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productQuery = `*[_type == "product" && name == "Asgaard sofa"][0]{
          name, price, description, "imageUrl": image.asset->url, sku, category, tags
        }`;
        const relatedQuery = `*[_type == "product"][0..3]{
          name, price, description, "imageUrl": image.asset->url
        }`;

        const [productData, relatedData] = await Promise.all([
          sanityClient.fetch(productQuery),
          sanityClient.fetch(relatedQuery),
        ]);

        if (productData) {
          setProduct(productData);
        }
        setRelatedProducts(relatedData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(
      addToCart({
        id: product.sku || "unknown",
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity,
       
      })
    );
  };
  useEffect(() => {
    console.log("Fetched product data:", product);
  }, [product]);
  if (loading) {
    return <p className="text-center mt-10">Loading product details...</p>;
  }

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }
 
  return (
    <>
      <Header />
        
      {/* Breadcrumb */}
      <div className="flex h-[53px] bg-[#F9F1E7] text-lg text-gray-500 mt-4 pt-2 pl-7">
        <span className="text-gray-500 p-[5px]">Home</span>
        <span className="text-black p-[5px]"> &gt; </span>
        <span className="text-gray-500 p-[5px]">Shop</span>
        <span className="text-black p-[5px]"> &gt; </span>
        <div className="w-[1px] h-[25px] bg-gray-500 mr-1 ml-2 mt-2"></div>
        <span className="text-black ml-2 mt-1 p-[2px]">{product.name}</span>
      </div>
{/* Main Product Section */}
<div className="min-h-screen py-10 px-5">
  {/* Product Container in a Single Row */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Left Section: Images */}
    <div className="flex gap-8">
      {/* Thumbnail Images */}
      <div className="flex flex-col gap-y-2 ">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <Image
              src={`/images/${index + 1}.png`} // Replace with your thumbnails
              alt={`Thumbnail ${index + 1}`}
              width={120}
              height={150}
              className="object-cover p-2 mb-8 border rounded-lg  bg-[#F9F1E7]"
            />
          </div>
        ))}
      </div>

      {/* Main Product Image */}
      <div className="w-full h-[450px] flex items-center justify-center bg-[#F9F1E7]">
        <Image
          src={product.imageUrl}
          alt={`Image of ${product.name}`}
          width={400}
          height={500}
          priority // Ensure the main product image loads quickly
          className="object-cover"
        />
      </div>
    </div>

    {/* Right Section: Product Info */}
    <div>
      <h1 className="text-3xl font-semibold mb-3">{product.name}</h1>
      <p className="text-xl text-gray-500 font-medium mb-12">Rs {product.price}.00</p>
      <p className="text-gray-600 mb-6 mt-2">{product.description}</p>

      {/* Size Options */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Size</h3>
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
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Color</h3>
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

      {/* Add to Cart */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-[#A9A9A9] rounded-lg p-2 h-[50px] w-[110px] justify-between">
          <button
            onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            className="text-lg font-bold px-4 py-2"
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="text-lg font-bold px-4 py-2"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-[210px] py-3 text-black border border-black rounded-lg transition"
        >
          Add To Cart
        </button>
      </div>

      
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
</div>

 {/* Description Section */}
 <div className="mt-12">
          <div className="flex space-x-6 border-t pt-8 pr-12  items-center justify-center">
            <button className="text-lg font-semibold border-black ">Description</button>
            <button className="text-lg font-semibold text-[#9F9F9F] pl-8">Additional Information</button>
          </div>
        <div className="mr-10 ml-10 p-8">
          <p className="mt-6  pl-5 text-[#9F9F9F] ">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on
            the road.
          </p>
          <p className="mt-6 text-[#9F9F9F] pl-5">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          </div>
          <div className="flex flex-col items-center justify-center text-[#9F9F9F] text-center px-6">
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
  <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-4 gap-3 py-6 mt-6">
    {relatedProducts.map((relatedProduct, index) => (
      <div
        key={relatedProduct.sku || index}
        className="relative bg-white shadow-md overflow-hidden group ml-4 mr-4 mt-2 mb-2"
      >
        <Image
          src={relatedProduct.imageUrl}
          alt={`Image of ${relatedProduct.name}`}
          width={110}
          height={140}
          className="w-full"
          loading="lazy"
        />
        <div className="p-2">
          <h3 className="text-lg font-semibold">{relatedProduct.name}</h3>
          <p className="text-gray-500 text-sm">{relatedProduct.description || "No description available"}</p>
          <p className="text-gray-900 font-bold">${relatedProduct.price}</p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: relatedProduct.sku || relatedProduct.name,
                  name: relatedProduct.name,
                  price: relatedProduct.price,
                  imageUrl: relatedProduct.imageUrl,
                  quantity: 1,
                })
              )
            }
            className="bg-white text-[#B88E2F] px-4 py-2 font-semibold rounded-md mb-2"
          >
            Add to cart
          </button>
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
</div>

            
              
                  
                 
              <div className="flex justify-center items-center space-x-4 my-6">
              <button className="bg-white text-[#B88E2F] border border-[#B88E2F] px-6 py-2 ">
                Show More
              </button>
                    </div>
                  

      <Footer />
    </>
  );
}
