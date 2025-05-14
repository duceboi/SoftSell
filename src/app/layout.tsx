import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SoftSell | Software License Resale Marketplace",
  description:
    "SoftSell helps businesses buy and sell unused software licenses at competitive prices. Get instant valuations and quick payments for your idle software assets.",
  keywords: [
    "software resale",
    "license marketplace",
    "sell software licenses",
    "buy software licenses",
    "software asset management",
  ],
  authors: [{ name: "SoftSell Team" }],
  openGraph: {
    title: "SoftSell | Software License Resale Marketplace",
    description:
      "Buy and sell unused software licenses at competitive prices. Get instant valuations and quick payments.",
    url: "https://softsell-marketplace.com",
    siteName: "SoftSell",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SoftSell - Software License Marketplace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ToastContainer position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
