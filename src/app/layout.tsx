import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ItensNav from "@/components/itensNav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RW Soluções",
  description:
    "Soluções industriais",
  icons: {
    icon: "/rw.png",
    shortcut: "/rw.png",
    apple: "/rw.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="light" className="min-h-screen">
      <body className={inter.className}>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Navbar />
            {children}
          </div>
          <ItensNav />
        </div>

        <Footer />
      </body>
    </html>
  )
}
