import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import { Toaster } from "sonner";

import { Analytics } from "@vercel/analytics/react";

const sora = localFont({
  src: "./fonts/Sora-VariableFont_wght.ttf",
  variable: "--font-sora",
  weight: "400 500 600 700",
});

export const metadata: Metadata = {
  title: "Hossin Habil | Front End Web Developer",
  description: "Front End Web Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={sora.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-left" />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
