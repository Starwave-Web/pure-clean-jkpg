import type { Metadata } from "next";
import { Work_Sans} from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

const workSans = Work_Sans({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Pure Clean Jönköping",
  description: "A friendly cleaning business from Jönköping, Sweden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-primary-black" lang="en">
      <head>
      </head>
      <body className={workSans.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
