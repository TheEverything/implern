import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const font = Inter({ subsets: ["latin"] });

import ClerkProvider from "@/providers/clerk-provider";
import QueryProvider from "@/providers/query-provider";

export const metadata: Metadata = {
  title: "Implern"
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <QueryProvider>
          <ClerkProvider>{children}</ClerkProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

export default Layout;
