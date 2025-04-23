import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/src/components/ui/sonner";
import Navbar from "@/src/components/common/navbar";
import Footer from "@/src/components/common/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import GoogleAnalyticsScripts from "@/src/components/analytics";

const workSans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pure Clean Jönköping",
  description: "A friendly cleaning business from Jönköping, Sweden.",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as "sv" | "en")) {
    notFound();
  }
  const messages = await getMessages(locale as { locale?: string | undefined });
  
  return (
    <html className="bg-primary-black" lang={locale}>
      <head>
      </head>
      <body className={workSans.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          <GoogleAnalyticsScripts/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
