"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { RootState } from "@/app/store/store";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const cart = useSelector((state: RootState) => state.cart.items);
  const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <Header />
        <div className="p-10 mb-8">
          <h1 className="text-4xl font-bold mb-4 px-7">Checkout</h1>
          <div className="text-lg text-gray-500 mb-12 pb-5 px-7">
            <span className="font-semibold text-black cursor-pointer">Home</span> &gt;{" "}
            <span className="text-gray-500">Checkout</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-8 p-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Billing details</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First Name" required className="border border-gray-300 rounded-md p-2" />
                <Input label="Last Name" required className="border border-gray-300 rounded-md p-2" />
                <Input label="Company Name (Optional)" className="border border-gray-300 rounded-md p-2" />
              </form>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="relative w-full">
                  <Input label="Country / Region" placeholder="Sri Lanka" className="border border-gray-300 rounded-md p-2 pr-10" />
                  <img src="/images/arrow.png" alt="Dropdown Arrow" className="absolute right-3 top-1/2 mt-3 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <Input label="Street Address" required className="border border-gray-300 rounded-md p-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Input label="Town / City" required className="border border-gray-300 rounded-md p-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="relative w-full">
                  <Input label="Province" placeholder="Western Province" className="border border-gray-300 rounded-md p-2 pr-10" />
                  <img src="/images/arrow.png" alt="Dropdown Arrow" className="absolute right-3 top-1/2 mt-3 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Input label="ZIP Code" required className="border border-gray-300 rounded-md p-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Input label="Phone" required className="border border-gray-300 rounded-md p-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Input label="Email" required className="border border-gray-300 rounded-md p-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Input label="Additional Information" placeholder="Additional Information" className="border border-gray-300 rounded-md p-2" />
              </div>
            </div>


            <Card className="w-full max-w-md">
              <CardContent>
                <div className="pb-4 flex justify-between items-center">
                  <p className="text-2xl font-bold">Product</p>
                  <p className="text-2xl font-bold">Subtotal</p>
                </div>

                <div className="mt-2 space-y-4">
                  {cart.map((product) => (
                    <div key={product.id} className="flex justify-between">
                      <span>{product.name} x {product.quantity}</span>
                      <span>Rs. {(product.price * product.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-[#B88E2F]">Rs. {subtotal.toLocaleString()}</span>
                  </div>
                </div>

                <hr className="border-t-1 border-gray-300 my-4" />

                <div className="mt-6 space-y-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      className="h-4 w-4"
                      value="directBankTransfer"
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    <span>Direct Bank Transfer</span>
                  </label>

                  {selectedPayment === "directBankTransfer" && (
                    <div className="mt-4 space-y-4 border p-4 rounded-md">
                      <p className="text-sm text-gray-600">
                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                      </p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input type="radio" name="directPayment" className="h-4 w-4" value="cash" />
                          <span>Cash on Delivery</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input type="radio" name="directPayment" className="h-4 w-4" value="direct" />
                          <span>Direct Bank Transfer</span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-sm text-gray-600 mt-4">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                  <span className="font-semibold pl-1">privacy policy.</span>
                </div>

                <Button className="w-[250px] mt-8 flex items-center justify-center mx-auto h-[50px] rounded-full border-2 border-black font-medium">
                  Place Order
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="h-[200px] bg-black text-white mt-20 mb-10 flex items-center">
          <div className="flex justify-between space-x-5 max-w-screen-lg w-full text-sm">
        
          </div>
        </div>

        <Footer />
      </SignedIn>
    </>
  );
};

export default CheckoutPage;
