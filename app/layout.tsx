import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getLocale } from "next-intl/server"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import QueryProvider from "./providers/QueryProvider"

// Configure Inter for English (Latin)
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

// Configure Cairo for Arabic text
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
})

// Configure Playfair Display for headings (Latin only)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Estate & Co. - Premium Real Estate",
  description: "Discover your dream property with Estate & Co. - Contemporary architectural excellence.",
  generator: "v0.app",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const messages = await getMessages()
  const locale = await getLocale()
  const direction = locale === "ar" ? "rtl" : "ltr"

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} ${cairo.variable} ${GeistMono.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>
            <QueryProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <Navbar />
              {children}
              <Footer />
            </Suspense>
            </QueryProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
