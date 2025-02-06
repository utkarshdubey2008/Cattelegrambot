import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TheSmartStories - Premium eBooks",
  description: "Get Premium Knowledge from TheSmartStories. Expand your mind with our curated collection of eBooks.",
  keywords: "ebooks, digital books, online learning, TheSmartStories, education",
  openGraph: {
    title: "TheSmartStories - Premium eBooks",
    description: "Get Premium Knowledge from TheSmartStories. Expand your mind with our curated collection of eBooks.",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TheSmartStories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheSmartStories - Premium eBooks",
    description: "Get Premium Knowledge from TheSmartStories. Expand your mind with our curated collection of eBooks.",
    image: "https://example.com/twitter-image.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

