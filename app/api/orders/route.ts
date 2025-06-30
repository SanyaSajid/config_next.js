import { NextResponse } from "next/server";
import { writeClient } from '@/sanity/lib/writeClient' 
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  try {
    const query = `*[_type == "order" && userId == $userId && paid == true] | order(_createdAt desc)`;
    const orders = await writeClient.fetch(query, { userId });

    return NextResponse.json({ orders });
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return NextResponse.json({ error: "Error fetching orders" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userId = body.userId;

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: body.items.map((item: any) => ({
        price_data: {
          currency: "pkr",
          product_data: {
            name: item.name,
            images: item.imageUrl ? [item.imageUrl] : [],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      success_url: `${request.headers.get("origin")}/order-history`,
      cancel_url: `${request.headers.get("origin")}/cart`,
      metadata: {
  userId: userId,
  cart: JSON.stringify(
    body.items.map((item: any) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      imageUrl: item.imageUrl || null,
    }))
  ),
},

    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Error creating Stripe Checkout Session" },
      { status: 500 }
    );
  }
}