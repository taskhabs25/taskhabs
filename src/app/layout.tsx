import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "iMEER — Kids Tasks, MeerCoins & Family Rewards | Australia",
  metadataBase: new URL("https://imeer.com.au"),
  description:
    "iMEER turns everyday chores, homework and habits into real money your children earn. Build your Guardian Circle — parents, grandparents, aunties and uncles all rewarding your child together. Launching on iOS & Android. Join the waitlist.",
  keywords: "family app, kids tasks, habit tracking, parenting, screen time, rewards system",
  authors: [{ name: "IMEER Team" }],
  creator: "IMEER",
  publisher: "IMEER",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imeer.com.au",
    title: "iMEER — Kids Tasks, MeerCoins & Family Rewards | Australia",
    description: "iMEER turns everyday chores, homework and habits into real money your children earn. Build your Guardian Circle — parents, grandparents, aunties and uncles all rewarding your child together. Launching on iOS & Android. Join the waitlist.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "iMEER - Kids Tasks & Family Rewards",
      },
    ],
    siteName: "IMEER",
  },
  twitter: {
    card: "summary_large_image",
    title: "iMEER — Kids Tasks, MeerCoins & Family Rewards | Australia",
    description: "iMEER turns everyday chores, homework and habits into real money your children earn. Build your Guardian Circle — parents, grandparents, aunties and uncles all rewarding your child together. Launching on iOS & Android. Join the waitlist.",
    images: ["/og-image.png"],
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