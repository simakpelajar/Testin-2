import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400", style: "normal" });

export const metadata = {
  title: "Mau Nembak Ceritanya",
  description: "Semoga diterima",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={(poppins.className, "bg-white min-h-screen overflow-x-hidden")}>{children}</body>
    </html>
  );
}
