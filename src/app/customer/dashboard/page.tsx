"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient"; // adjust path if needed
import { useRouter } from "next/navigation";

export default function CustomerDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login"); // not logged in
      } else if (user.user_metadata.role !== "customer") {
        router.push("/admin/dashboard"); // wrong role
      } else {
        setUser(user);
      }
      setLoading(false);
    };
    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (!error) setOrders(data || []);
    };

    fetchOrders();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#f9fdee] p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Customer Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-[#8b0000] text-white rounded-lg hover:bg-[#6b0000]"
          >
            Logout
          </button>
        </div>

        <p className="mb-4">
          Welcome, <span className="font-semibold">{user?.email}</span> 🎉
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg bg-[#fefefe] shadow">
            <h2 className="font-semibold mb-2">Your Profile</h2>
            <p>Email: {user?.email}</p>
            <p>Role: {user?.user_metadata?.role}</p>
          </div>

          <div className="p-4 border rounded-lg bg-[#fefefe] shadow">
            <h2 className="font-semibold mb-2">Your Orders</h2>

            {orders.length === 0 ? (
              <p>You don’t have any orders yet.</p>
            ) : (
              <ul className="space-y-2">
                {orders.map((order) => (
                  <li key={order.id} className="border p-3 rounded">
                    <p><b>Product:</b> {order.product_name}</p>
                    <p><b>Quantity:</b> {order.quantity}</p>
                    <p><b>Total:</b> Rs {order.total_amount}</p>
                    <p><b>Status:</b> {order.status}</p>
                    <p className="text-sm text-gray-500">{new Date(order.created_at).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          
        </div>
      </div>
    </div>
  );
}
