import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "S.O.S Electric | Calgary Electrical Contractor Since 1996",
  description:
    "S.O.S Electric - Calgary's trusted electrical contractor since 1996. Residential & commercial electrical services, panel upgrades, EV charger installation, and 24/7 emergency service.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
