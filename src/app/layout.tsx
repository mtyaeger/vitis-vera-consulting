import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vitisvera.com"),
  title: { default: "Vitis Vera | Proprietary Business Systems", template: "%s | Vitis Vera" },
  description: "Vitis Vera builds proprietary business systems that buy back time, reduce manual work, and improve decision-making.",
  keywords: ["workflow automation", "operational systems", "business process automation", "custom internal tools", "operations consulting"],
  openGraph: {
    title: "Vitis Vera | Proprietary Business Systems",
    description: "Proprietary business systems that buy back time and improve decision-making.",
    url: "https://vitisvera.com",
    siteName: "Vitis Vera",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Vitis Vera | Proprietary Business Systems", description: "Proprietary business systems that buy back time and improve decision-making." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} ${cormorant.variable} antialiased`}>
      <body><SiteHeader /><main>{children}</main><SiteFooter /></body>
    </html>
  );
}
