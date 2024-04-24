import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { redirect } from "next/navigation";
import { ThemeProvider } from "@/providers/theme-provider";
import HeadNav from "@/components/navbar/HeadNav";
import Navbar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (params.locale.toString() !== "tr" && params.locale.toString() !== "en") {
    return redirect(`/en/not-found`);
  }

  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeadNav/>
          <Navbar/>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

// Can be imported from a shared config
const locales = ["en", "tr"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}