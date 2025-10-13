"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabaseClient";
import type { Product } from "../../../../types/Product";

interface AddProductFormProps {
  editProduct?: Product | null;
  onFinish?: () => void;
}

export default function AddProductForm({
  editProduct,
  onFinish,
}: AddProductFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // ✅ Prefill when editing
  useEffect(() => {
    if (editProduct) {
      setName(editProduct.name);
      setDescription(editProduct.description || "");
      setPrice(editProduct.price.toString());
    } else {
      resetForm();
    }
  }, [editProduct]);

  const resetForm = () => {
    setName("");
    setDescription("");
    setPrice("");
    setFile(null);
    setSuccessMsg("");
    setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    let imageUrl = editProduct?.image_url || "";

    // ✅ Upload image if selected
    if (file) {
      const fileName = `${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(fileName, file);

      if (uploadError) {
        setErrorMsg("Image upload failed: " + uploadError.message);
        setLoading(false);
        return;
      }

      const { data } = supabase.storage
        .from("product-images")
        .getPublicUrl(fileName);
      imageUrl = data.publicUrl;
    }

    let error;
    if (editProduct?.id) {
      console.log("Attempting to update product with id:", editProduct.id);
      // ✅ Update
      const { data: updateData, error: updateError } = await supabase
        .from("products")
        .update({
          name,
          description,
          price: parseFloat(price),
          image_url: imageUrl,
        })
        .eq("id", editProduct.id)
        .select(); // Get updated row(s)
      console.log("Update result:", updateData, updateError);
      error = updateError;
    } else {
      // ✅ Insert new
      const { error: insertError } = await supabase.from("products").insert([
        {
          name,
          description,
          price: parseFloat(price),
          image_url: imageUrl,
        },
      ]);
      error = insertError;
    }

    setLoading(false);

    if (error) setErrorMsg(error.message);
    else {
      setSuccessMsg(
        editProduct ? "✅ Product updated successfully!" : "✅ Product added successfully!"
      );
      resetForm();
      onFinish?.();
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">
        {editProduct ? "Edit Product" : "Add Product"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />

        <input
          type="number"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full"
        />

        {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
        {successMsg && <p className="text-green-600 text-sm">{successMsg}</p>}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-[#8b0000] text-white rounded-lg hover:bg-[#6b0000] disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : editProduct
              ? "Update Product"
              : "Add Product"}
          </button>

          {editProduct && (
            <button
              type="button"
              onClick={() => {
                resetForm();
                onFinish?.();
              }}
              className="py-2 px-4 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
