import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabase } from "../../lib/supabaseClient";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        user_id: body.user_id,
        full_name: body.full_name,
        email: body.email,
        phone: body.phone,
        address: body.address,
        city: body.city,
        postal_code: body.postal_code,
        country: body.country,
        total_amount: body.items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0),
      })
      .select()
      .single();

    if (orderError) throw orderError;

    await supabase.from("order_items").insert(
      body.items.map((item: any) => ({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
      }))
    );

    // ✅ CREATE STRIPE CHECKOUT SESSION
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "https://glamcart-xi.vercel.app/thank-you",
      cancel_url: "https://glamcart-xi.vercel.app/checkout",
      customer_email: body.email,
      line_items: body.items.map((item: any) => ({
        price_data: {
          currency: "USD",
          product_data: { name: item.name },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
    });

    // ✅ RETURN PAYMENT URL
    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
