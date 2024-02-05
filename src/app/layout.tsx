import type { Metadata } from "next"

import { GeistMono } from "geist/font/mono"

import "./globals.css"

import { Toaster } from "@/components/ui/sonner"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "YokoCut | Home",
  description: "A site to shorten URLs",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${GeistMono.className} container relative z-50 m-auto grid min-h-screen grid-rows-[auto_1fr] scroll-auto bg-background px-4 font-mono antialiased`}
      >
        <Header />
        <main className="mx-auto h-full w-full">
          {children}
          <Toaster closeButton duration={3000} position="top-right" />
        </main>
      </body>
    </html>
  )
}
