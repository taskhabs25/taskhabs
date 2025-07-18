"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Sparkles } from "lucide-react"
import { Logo } from "@/app/components/logo"

export default function Hero() {
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createStars = () => {
      const starsContainer = starsRef.current
      if (!starsContainer) return

      // Clear existing stars
      starsContainer.innerHTML = ""

      // Create 50 animated stars
      for (let i = 0; i < 50; i++) {
        const star = document.createElement("div")
        const starType = Math.floor(Math.random() * 4) + 1
        star.className = `star star-${starType}`

        // Random position
        star.style.left = Math.random() * 100 + "%"
        star.style.top = Math.random() * 100 + "%"

        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + "s"

        starsContainer.appendChild(star)
      }
    }

    createStars()
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black min-h-screen">
      {/* Animated Stars Background */}
      <div
        ref={starsRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      ></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Logo/Mascot */}
            <div className="flex justify-center lg:justify-start mb-6">
              <Logo className="w-16 h-16 text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight glow-text">
              Welcome To{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                TASK HABS
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0">
              Empower your child to build healthy habits while keeping things fun and organized in a magical digital space.
            </p>

            {/* Performance Benefit */}
            <div className="glass-card rounded-2xl p-4 mb-8 inline-block floating-card">
              <p className="text-yellow-300 font-semibold flex items-center justify-center">
                <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                Reduce screen time by 30%!
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {/* App Store Button - Blue */}
              <Link
                href="/"
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-6 py-3 shadow-lg transition-all duration-200 min-h-[60px]"
              >
                <img
                  src="/images/appstore-logo.png"
                  alt="App Store Logo"
                  width={44}
                  height={44}
                  className="mr-4"
                  style={{ objectFit: "contain" }}
                />
                <span className="text-lg font-semibold">Download on App Store</span>
              </Link>

              {/* Play Store Button - Black */}
              <Link
                href="/"
                className="flex items-center bg-black hover:bg-gray-800 text-white rounded-2xl px-6 py-3 shadow-lg transition-all duration-200 min-h-[60px]"
              >
                <img
                  src="/images/playstore-logo.png"
                  alt="Play Store Logo"
                  width={44}
                  height={44}
                  className="mr-4"
                  style={{ objectFit: "contain" }}
                />
                <span className="text-lg font-semibold">Get it on Google Play</span>
              </Link>
            </div>
          </div>

          {/* App Screenshot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative floating-card">
              {/* Phone Frame with glow */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl glow-button">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/onboarding.png"
                    alt="TASK HABS App Screenshot"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Floating Elements with glow */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg glow-button">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg glow-button"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg glow-button"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
