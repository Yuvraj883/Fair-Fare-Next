import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignIn } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FairFare",
  description: "Never pay extra for rides!!!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    
    </html>

    </ClerkProvider>
  );
}
