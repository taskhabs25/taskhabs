import type { Metadata } from "next"
import Hero from "@/app/components/hero-v4"
import VillageSection from "@/app/components/village-section"
import Features from "@/app/components/features"
import HowItWorks from "@/app/components/how-it-works"
import Testimonials from "@/app/components/testimonials"
import DownloadCTA from "@/app/components/download-cta"
import FAQ from "@/app/components/faq"

// export const metadata: Metadata = {
//   title: "iMEER — Kids Tasks, MeerCoins & Family Rewards | Australia",
//   description:
//     "Empower your child to build healthy habits while keeping things fun and organized. Reduce screen time by 30% with our family-friendly task management app.",
//   keywords: "family app, kids tasks, habit tracking, parenting, screen time, rewards system",
// }

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <VillageSection />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      <DownloadCTA />
      <FAQ />
    </main>
  )
}
