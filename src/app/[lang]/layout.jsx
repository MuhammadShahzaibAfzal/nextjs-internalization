import { Inter } from "next/font/google";
import "./../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Internalization",
  description: "Internalization in Next JS",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Navbar lang={params.lang} />
        <main className="mt-7 text-center min-h-[72vh]">{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
