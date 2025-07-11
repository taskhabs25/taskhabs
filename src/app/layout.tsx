import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "TASK HABS - Family Task & Habit Management App",
  description:
    "Empower your child to build healthy habits while keeping things fun and organized. Reduce screen time by 30% with our family-friendly task management app.",
  keywords: "family app, kids tasks, habit tracking, parenting, screen time, rewards system",
  authors: [{ name: "TASK HABS Team" }],
  creator: "TASK HABS",
  publisher: "TASK HABS",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taskhabs.com",
    title: "TASK HABS - Family Task & Habit Management App",
    description: "Empower your child to build healthy habits while keeping things fun and organized.",
    siteName: "TASK HABS",
  },
  twitter: {
    card: "summary_large_image",
    title: "TASK HABS - Family Task & Habit Management App",
    description: "Empower your child to build healthy habits while keeping things fun and organized.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}