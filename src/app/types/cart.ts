// /types/cart.ts
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number; // 👈 important
}

export interface Products {
  id: string; // use string since Supabase returns string UUIDs
  name: string;
  description?: string;
  price: number;
  image_url?: string;
}