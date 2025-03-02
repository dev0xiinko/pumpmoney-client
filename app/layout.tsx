import type React from "react"
import type { Metadata } from "next"
import { Luckiest_Guy } from "next/font/google"
import "./globals.css"

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "PUMPMONEY MERCH - Your #1 Crypto Merch House",
  description:
    "The premier destination for cryptocurrency merchandise and apparel. Shop the latest crypto-themed products.",
  keywords: ["crypto merch", "cryptocurrency apparel", "bitcoin clothing", "crypto gifts", "blockchain merchandise"],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#00ff66",
  openGraph: {
    title: "PUMPMONEY MERCH - Your #1 Crypto Merch House",
    description: "The premier destination for cryptocurrency merchandise and apparel.",
    url: "https://pumpmoney-merch.com",
    siteName: "PUMPMONEY MERCH",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PUMPMONEY MERCH",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PUMPMONEY MERCH - Your #1 Crypto Merch House",
    description: "The premier destination for cryptocurrency merchandise and apparel.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={luckiestGuy.className}>{children}</body>
    </html>
  )
}

