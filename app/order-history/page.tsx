"use client";

import React, { useEffect, useState } from "react";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  _id: string;
  userId: string;
  products: OrderItem[];
  totalPrice: number; 
  _createdAt: string;
  deliveryDate?: string;
}

export default function OrderHistory() {
  const { isSignedIn, user } = useUser();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      try {
        const res = await fetch(`/api/orders?userId=${user.id}`);
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("text/html")) {
          throw new Error("Invalid JSON response. Are you calling the correct API?");
        }

        const data = await res.json();
        setOrders(data.orders || []);
      } catch (err: any) {
        console.error("Failed to fetch orders", err);
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (!isSignedIn) return <RedirectToSignIn />;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6 ml-7">Order History</h1>
        {loading ? (
          <p className="ml-7">Loading orders...</p>
        ) : error ? (
          <p className="ml-7 text-red-600">{error}</p>
        ) : orders.length === 0 ? (
          <p className="ml-7 text-gray-600">You have no orders yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 ml-7 mr-7">
            {orders.map((order) => (
              <div key={order._id} className="border p-6 rounded-lg shadow-sm bg-[#F9F1E7]">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">
                    Order #{order._id.slice(0, 6).toUpperCase()}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Ordered on {new Date(order._createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="space-y-4">
                  {(order.products || []).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                      
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            {item.quantity} x Rs. {item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <p className="text-yellow-600 font-semibold">
                        Rs. {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 border-t pt-4 flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-[#B88E2F]">
                    Rs. {order.totalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Estimated delivery:{" "}
                  {order.deliveryDate
                    ? new Date(order.deliveryDate).toLocaleDateString()
                    : "Pending"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
