import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { profile } from "@/data/profile";
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
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    type: "website",
    locale: "en_US",
    siteName: `${profile.name} — Portfolio`,
  },
  twitter: { card: "summary", title: `${profile.name} | ${profile.title}`, description: profile.summary },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
