import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string); // ✅ no apiVersion

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.cart || body.cart.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      customer_email: body.email,
      shipping_address_collection: { allowed_countries: ["US", "CA", "PK"] },
      line_items: body.cart.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: item.image ? [item.image] : [],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
