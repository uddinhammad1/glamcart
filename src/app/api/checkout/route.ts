import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-08-27.basil", // use latest Stripe API version
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "http://localhost:3000/success",  // ✅ change to your domain
      cancel_url: "http://localhost:3000/cancel",
      customer_email: body.email, // from form
      shipping_address_collection: { allowed_countries: ["US", "CA", "PK"] }, // add more countries if needed
      line_items: body.cart.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image || ""],
          },
          unit_amount: item.price * 100, // cents
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
