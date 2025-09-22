import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import { CartProvider } from "./contexts/CartContext";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "GlamCart",
  description: "Makeup that moves with you",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
       
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
