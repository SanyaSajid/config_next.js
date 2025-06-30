
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid"; 

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature")!;
  const rawBody = await req.text();

  let event: Stripe.Event;
  

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error(" Webhook signature verification failed:", err);
    return new Response(`Webhook Error: ${err}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.userId;
    const cart = session.metadata?.cart;

    if (!userId || !cart) {
      console.error(" Missing userId or cart in metadata");
      return NextResponse.json({ received: true });
    }
    

    try {
      const products = JSON.parse(cart).map((item: any) => ({ 
        _key: uuidv4(),
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.imageUrl,
      }));
       
      await client.create({
        _type: "order",
        userId,
        products,
        totalPrice: session.amount_total! / 100,
        paid: true,
      });

      console.log(` Order saved for user: ${userId}`);
    } catch (err) {
      console.error(" Error saving order to Sanity:", err);
    }
  }

  return NextResponse.json({ received: true });
}

export const config = {
  api: {
    bodyParser: false,
  },
};


