import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GrowifyAI Call Agent - Conversations, Not Calls",
  description: "Multilingual, emotion-aware voice agents that qualify leads & schedule visits — at 1/10th the cost.",
  keywords: ["AI", "voice agent", "lead qualification", "appointment booking", "conversational AI"],
  authors: [{ name: "GrowifyAI Team" }],
  openGraph: {
    title: "GrowifyAI Call Agent - Conversations, Not Calls",
    description: "Multilingual, emotion-aware voice agents that qualify leads & schedule visits — at 1/10th the cost.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
