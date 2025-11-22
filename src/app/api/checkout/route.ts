import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const { customer, cart } = await req.json();

    if (!cart || cart.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const lineItems = cart.map((item: any) => ({
      price_data: {
        currency: "PKR", // ✅ Change to CAD/PKR as needed
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: customer.email,
      shipping_address_collection: {
        allowed_countries: ["PK", "US", "CA", "GB"],
      },
      success_url: `https://glamcart-xi.vercel.app/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://glamcart-xi.vercel.app/checkout`,
      line_items: lineItems,
      metadata: {
        full_name: customer.fullName,
        phone: customer.phone,
        address: customer.address,
        city: customer.city,
        postal_code: customer.postalCode,
        country: customer.country,
        cart: JSON.stringify(cart),
      },
    });

    return NextResponse.json({ url: session.url });

  } catch (err: any) {
    console.error("Stripe Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
