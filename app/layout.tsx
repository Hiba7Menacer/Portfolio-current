import React from "react"
import type { Metadata, Viewport } from "next"
import { Abhaya_Libre, Montserrat } from "next/font/google"

import "./globals.css"

const _abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
})

const _montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hiba Menacer | Portfolio",
    template: "%s | Hiba Menacer",
  },
  description:
    "Designer & Front-End Developer blending art and code. Portfolio showcasing web design, UI/UX, and creative development projects.",
  keywords: [
    "Hiba Menacer",
    "Portfolio",
    "Front-End Developer",
    "Web Design",
    "UI/UX",
    "React",
    "Data Analysis",
  ],
  authors: [{ name: "Hiba Menacer" }],
  creator: "Hiba Menacer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Hiba Menacer | Portfolio",
    title: "Hiba Menacer | Portfolio",
    description:
      "Designer & Front-End Developer blending art and code. Portfolio showcasing web design, UI/UX, and creative development projects.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiba Menacer | Portfolio",
    description:
      "Designer & Front-End Developer blending art and code. Portfolio showcasing web design, UI/UX, and creative development projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0b2c47",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_abhayaLibre.variable} ${_montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
