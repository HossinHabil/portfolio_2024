import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import HeaderComponent from "@/components/HeaderComponent";

import { Toaster } from "sonner";

import { Analytics } from "@vercel/analytics/react";

const sora = Sora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
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
          <HeaderComponent />
          <Toaster position="top-left" />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
