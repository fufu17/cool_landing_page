import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NYC Eats - Discover the Best Food Spots in New York City",
  description: "Your ultimate guide to discovering the best food spots in New York City. From hidden gems to local favorites, explore curated collections across all five boroughs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
