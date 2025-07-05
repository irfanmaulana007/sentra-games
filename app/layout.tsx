import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SentraGamers",
  description: "Your ultimate gaming destination",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  keywords: ["SentraGamers", "Gaming", "News", "Reviews", "Community"],
  authors: [{ name: "SentraGamers" }],
  creator: "SentraGamers",
  publisher: "SentraGamers",
  openGraph: {
    title: "SentraGamers",
    description: "Your ultimate gaming destination",
    type: "website",
    locale: "en_US",
    siteName: "SentraGamers",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SentraGamers",
      },
    ],
  },
    twitter: {
    title: "SentraGamers",
    description: "Your ultimate gaming destination",
    card: "summary_large_image",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SentraGamers",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
