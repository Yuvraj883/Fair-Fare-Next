import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignIn } from "@clerk/nextjs";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FairFare",
  description: "Never pay extra for rides!!!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider frontendApi={process.env.NEXT_PUBLIC_}>
    <html lang="en">
      <body className={inter.className}>{children}
      <Header/>
      </body>


    </html>

    </ClerkProvider>
  );
}
