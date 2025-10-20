"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabaseClient";

interface Contact {
  id: number;
  full_name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setContacts(data || []);
    }
    setLoading(false);
  };

  if (loading) return <p className="text-center mt-4">Loading messages...</p>;
  if (errorMsg)
    return <p className="text-center text-red-600 mt-4">{errorMsg}</p>;

  if (contacts.length === 0)
    return <p className="text-center mt-4">No contact messages found.</p>;

  return (
    <div className="mt-8 text-left">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        📬 Contact Messages
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-sm">
          <thead className="bg-[#8b0000] text-white">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Full Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Message</th>
              <th className="py-3 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={contact.id}
                className={`border-t hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{contact.full_name}</td>
                <td className="py-3 px-4 text-blue-600">{contact.email}</td>
                <td className="py-3 px-4">{contact.message}</td>
                <td className="py-3 px-4 text-gray-500 text-sm">
                  {new Date(contact.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
