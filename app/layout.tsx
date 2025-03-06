import type React from "react"
import type { Metadata } from "next"
import { Roboto_Condensed } from "next/font/google"
import "./globals.css"

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto-condensed",
})

export const metadata: Metadata = {
  title: "Carlos Vessup - UGC Creator & Content Partner",
  description: "Professional content creator specializing in UGC, videography, and photography.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        url: '/favicon-96x96.png',
      },
      {
        rel: 'manifest',
        url: '/web-app-manifest-192x192.png'
      },
      {
        rel: 'manifest',
        url: '/web-app-manifest-512x512.png'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>{children}</body>
    </html>
  )
}

