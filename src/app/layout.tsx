// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
// import { Inter } from "next/font/google";
// import { cn } from "@/lib/utils";
import "./globals.css";
import { ReactNode } from "react";

// const fontHeading = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-heading",
// });

// const fontBody = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-body",
// });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className="antialiased dark"
        // className={cn(
        //   "antialiased dark",
        //   fontHeading.variable,
        //   fontBody.variable
        // )}
      >
        {children}
      </body>
    </html>
  );
}
