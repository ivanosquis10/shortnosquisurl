import type { Metadata } from "next"

import { GeistSans } from "geist/font/sans"

import "./globals.css"

export const metadata: Metadata = {
  title: "shortnosquisurl",
  description: "Generated by appncy",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-background px-4 font-sans antialiased`}
      >
        <header className="text-xl font-bold leading-[4rem]">shortnosquisurl</header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} shortnosquisurl
        </footer>
      </body>
    </html>
  )
}
