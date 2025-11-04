"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabaseClient";

export default function OrderList() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from("orders")
        .select(`
          id,
          full_name,
          email,
          total_amount,
          status,
          created_at,
          order_items (
            quantity,
            price,
            products:products (
              name
            )
          )
        `)
        .order("created_at", { ascending: false });

      if (!error) setOrders(data || []);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">🛒 Customer Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Customer</th>
                <th className="p-2 border">Products</th>
                <th className="p-2 border">Qty</th>
                <th className="p-2 border">Total</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="text-center border-t">
                  
                  {/* ✅ Correct name field */}
                  <td className="p-2 border">{order.full_name || order.email}</td>

                  <td className="p-2 border">
                    {order.order_items?.map((item: any, i: number) => (
                      <div key={i}>{item.products?.name}</div>
                    ))}
                  </td>

                  <td className="p-2 border">
                    {order.order_items?.map((item: any, i: number) => (
                      <div key={i}>{item.quantity}</div>
                    ))}
                  </td>

                  <td className="p-2 border">$ {order.total_amount}</td>
                  <td className="p-2 border font-semibold">{order.status}</td>
                  <td className="p-2 border text-sm">
                    {new Date(order.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
