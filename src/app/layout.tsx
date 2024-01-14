import type { Metadata } from "next"

// import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "YokoCut | Home",
  description: "A site to shorten URLs",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${GeistMono.className} container relative m-auto grid min-h-screen grid-rows-[1fr,auto] bg-background px-4 font-mono antialiased`}
      >
        <main className="mx-auto grid w-full">
          {children}
          <Toaster closeButton duration={3000} position="top-right" />
        </main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} shortnosquisurl
        </footer>
      </body>
    </html>
  )
}
