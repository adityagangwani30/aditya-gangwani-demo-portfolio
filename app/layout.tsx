import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adityagangwani.me"),
  title: "Aditya Gangwani | Product Manager & AI Product Builder",
  description:
    "Portfolio of Aditya Gangwani, Associate Product Manager at Better and AI Product Builder. Explore evidence-backed case studies across AI tools, developer platforms, and learning systems.",
  keywords: [
    "Aditya Gangwani",
    "Product Manager",
    "Associate Product Manager",
    "AI Product Builder",
    "Better",
    "Bengaluru",
    "Prodily",
    "Featuresmith",
    "Operate",
    "Samsung PRISM",
  ],
  authors: [{ name: "Aditya Gangwani", url: "https://adityagangwani.me" }],
  creator: "Aditya Gangwani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityagangwani.me",
    title: "Aditya Gangwani | Product Manager & AI Product Builder",
    description:
      "Product manager who connects engineering systems with user value. Explore verified case studies in AI tools, developer infrastructure, and learning platforms.",
    siteName: "Aditya Gangwani Portfolio",
    images: [
      {
        url: "/aditya-gangwani-photo-square.jpg",
        width: 800,
        height: 800,
        alt: "Aditya Gangwani — Product Manager & AI Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Aditya Gangwani | Product Manager & AI Product Builder",
    description:
      "Product manager who connects engineering systems with user value. Associate Product Manager at Better.",
    images: ["/aditya-gangwani-photo-square.jpg"],
  },
  icons: {
    icon: "/aditya-gangwani-photo-square.jpg",
    apple: "/aditya-gangwani-photo-square.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090a0f] text-[#f8fafc] font-sans antialiased selection:bg-blue-600/30 selection:text-blue-200">
        {children}
      </body>
    </html>
  );
}
