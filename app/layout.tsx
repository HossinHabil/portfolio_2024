import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import HeaderComponent from "@/components/HeaderComponent";
import Navbar from "@/components/Navbar";
import { Toaster } from 'sonner'

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hossin Habil | Front End Web Developer",
  description: "Front End Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderComponent />
          <Navbar />
          <Toaster position="top-left"/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
