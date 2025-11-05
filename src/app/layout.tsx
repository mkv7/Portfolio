import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Professional Developer",
  description: "Full-stack developer portfolio showcasing modern web applications, innovative projects, and technical expertise. Hire a skilled developer for your next project.",
  keywords: ["developer", "portfolio", "full-stack", "web development", "react", "next.js", "typescript"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Professional Developer",
    description: "Full-stack developer portfolio showcasing modern web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
