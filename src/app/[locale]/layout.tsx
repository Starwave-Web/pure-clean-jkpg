import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://purecleanjkpg.se"),
  openGraph: {
    siteName: "PureClean Jönköping",
    type: "website",
    locale: "sv_SE",
    description: "PureClean Jönköping erbjuder professionella och pålitliga städtjänster i Jönköping, Sverige. Vi specialiserar oss på hemstädning, kontorsstädning och djupstädning, med fokus på kvalitet och kundnöjdhet.",
    images: [
      {
        url: "https://purecleanjkpg.se/og-image.jpg",
        width: 1280,
        height: 852
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  applicationName: "PureClean Jönköping",
  appleWebApp: {
    title: "PureClean Jönköping",
    statusBarStyle: "default",
    capable: true
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE || "",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_MICROSOFT_VERIFICATION_CODE || "", 
      "facebook-domain-verification": process.env.NEXT_PUBLIC_META_VERIFICATION_CODE || ""
    }
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180", 
        type: "image/png"
      }
    ]
  }
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
