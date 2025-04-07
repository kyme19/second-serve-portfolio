import React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/navbar').then(mod => mod.Navbar), {
  ssr: true
})
import Footer from "@/components/footer"
import { ThemeProvider } from "next-themes"  // Import directly from next-themes

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fusion Technologies | Innovation Through Technology",
  description:
    "We are Fusion Technologies, a forward-thinking technology company that combines innovation with expertise to deliver transformative digital solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

