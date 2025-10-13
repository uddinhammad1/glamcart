export interface Product {
    id: string; // ✅ must match Supabase DB column
    name: string;
    price: number;
    description?: string | null;
    image_url?: string | null;
}
