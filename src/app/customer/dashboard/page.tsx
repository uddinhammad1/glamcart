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
            <h2 className="font-semibold mb-2">Orders</h2>
            <p>You don’t have any orders yet.</p>
          </div>

          <div className="p-4 border rounded-lg bg-[#fefefe] shadow">
            <h2 className="font-semibold mb-2">Notifications</h2>
            <p>No new notifications 📩</p>
          </div>

          <div className="p-4 border rounded-lg bg-[#fefefe] shadow">
            <h2 className="font-semibold mb-2">Support</h2>
            <p>Need help? Contact our support team.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
