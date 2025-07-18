"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { Star, Smartphone, Play, Users, Award, TrendingUp, Shield, Sparkles, Zap } from "lucide-react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [statsVisible, setStatsVisible] = useState(false)
  const particleSystemRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorTrailRef = useRef<HTMLDivElement>(null)

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Update custom cursor position
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 10 + "px"
        cursorRef.current.style.top = e.clientY - 10 + "px"
      }

      // Update cursor trail with delay
      setTimeout(() => {
        if (cursorTrailRef.current) {
          cursorTrailRef.current.style.left = e.clientX - 4 + "px"
          cursorTrailRef.current.style.top = e.clientY - 4 + "px"
        }
      }, 100)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Create dynamic particle system
  useEffect(() => {
    const createParticles = () => {
      const container = particleSystemRef.current
      if (!container) return

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div")
        particle.className = "particle"
        particle.style.left = Math.random() * 100 + "%"
        particle.style.animationDelay = Math.random() * 8 + "s"
        particle.style.animationDuration = Math.random() * 3 + 5 + "s"
        container.appendChild(particle)
      }
    }

    createParticles()

    // Stats reveal animation
    const timer = setTimeout(() => setStatsVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="cinematic-hero cursor-interactive min-h-screen relative">
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={cursorTrailRef} className="custom-cursor-trail"></div>

      {/* Dynamic Morphing Background */}
      <div className="morphing-bg"></div>

      {/* Liquid Blobs */}
      <div className="liquid-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>

      {/* Particle System */}
      <div ref={particleSystemRef} className="particle-system"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-20 pb-16">
          {/* Brand Introduction */}
          <div className="text-center mb-12 cinematic-reveal">
            <div className="premium-glass rounded-full px-8 py-4 inline-flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="premium-subtitle font-semibold text-lg">
                Introducing the Future of Family Management
              </span>
            </div>
          </div>

          {/* Magnificent Main Headline */}
          <div className="text-center mb-16 cinematic-reveal cinematic-reveal-delay-1">
            <h1 className="holographic-text text-6xl sm:text-7xl lg:text-8xl mb-8 max-w-6xl mx-auto leading-tight">
              TASK HABS
              <span className="block text-5xl sm:text-6xl lg:text-7xl mt-4">Redefines Family Harmony</span>
            </h1>

            <p className="premium-description text-2xl sm:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Experience the most advanced family task management system ever created.
              <span className="premium-subtitle block mt-2">Where technology meets parenting excellence.</span>
            </p>
          </div>

          {/* Magnificent CTA Section */}
          <div className="text-center mb-20 cinematic-reveal cinematic-reveal-delay-2">
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button className="magnificent-btn text-white px-12 py-8 rounded-3xl text-xl font-bold flex items-center justify-center min-h-[72px] group">
                <Zap className="w-7 h-7 mr-4 group-hover:animate-pulse" />
                Experience the Magic
              </Button>
              <Button className="premium-glass text-white px-12 py-8 rounded-3xl text-xl font-semibold flex items-center justify-center min-h-[72px] group">
                <Play className="w-7 h-7 mr-4 group-hover:scale-110 transition-transform" />
                Watch Cinematic Demo
              </Button>
            </div>

            {/* Premium Feature Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="premium-glass rounded-2xl px-6 py-4 flex items-center space-x-3">
                <Shield className="w-6 h-6 text-emerald-400" />
                <span className="premium-subtitle font-medium">Military-Grade Security</span>
              </div>
              <div className="premium-glass rounded-2xl px-6 py-4 flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <span className="premium-subtitle font-medium">AI-Powered Insights</span>
              </div>
              <div className="premium-glass rounded-2xl px-6 py-4 flex items-center space-x-3">
                <Award className="w-6 h-6 text-purple-400" />
                <span className="premium-subtitle font-medium">Gamification 3.0</span>
              </div>
            </div>
          </div>

          {/* Magnificent 3D Phone Showcase */}
          <div className="relative max-w-7xl mx-auto cinematic-reveal cinematic-reveal-delay-3">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              {/* Left Stats Column */}
              <div className="lg:col-span-1 space-y-8">
                <div
                  className={`stats-card-magnificent rounded-3xl p-8 text-center ${statsVisible ? "cinematic-reveal" : "opacity-0"}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <p className="premium-text text-4xl font-bold mb-2">50K+</p>
                  <p className="premium-description text-sm font-medium">Elite Families</p>
                </div>

                <div
                  className={`stats-card-magnificent rounded-3xl p-8 text-center ${statsVisible ? "cinematic-reveal cinematic-reveal-delay-1" : "opacity-0"}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="premium-text text-4xl font-bold mb-2">4.98★</p>
                  <p className="premium-description text-sm font-medium">Perfect Rating</p>
                </div>
              </div>

              {/* Center 3D Phone */}
              <div className="lg:col-span-3 flex justify-center">
                <div className="phone-3d">
                  <div className="phone-mockup-3d rounded-[3rem] p-4">
                    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
                      <Image
                        src="/images/onboarding.png"
                        alt="TASK HABS Revolutionary Interface"
                        width={320}
                        height={640}
                        className="w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Stats Column */}
              <div className="lg:col-span-1 space-y-8">
                <div
                  className={`stats-card-magnificent rounded-3xl p-8 text-center ${statsVisible ? "cinematic-reveal cinematic-reveal-delay-2" : "opacity-0"}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <p className="premium-text text-4xl font-bold mb-2">47%</p>
                  <p className="premium-description text-sm font-medium">Productivity Boost</p>
                </div>

                <div
                  className={`stats-card-magnificent rounded-3xl p-8 text-center ${statsVisible ? "cinematic-reveal cinematic-reveal-delay-3" : "opacity-0"}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Star className="w-8 h-8 text-white fill-current" />
                  </div>
                  <p className="premium-text text-4xl font-bold mb-2">99.2%</p>
                  <p className="premium-description text-sm font-medium">Success Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Magnificent CTA */}
          <div className="text-center mt-24 cinematic-reveal cinematic-reveal-delay-4">
            <p className="premium-description text-xl mb-8 max-w-3xl mx-auto">
              Join the revolution that's transforming how families connect, grow, and thrive together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="premium-glass text-white px-10 py-6 rounded-2xl text-lg font-semibold flex items-center justify-center group">
                <Smartphone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                Download on App Store
              </Button>
              <Button className="premium-glass text-white px-10 py-6 rounded-2xl text-lg font-semibold flex items-center justify-center group">
                <Smartphone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                Get it on Google Play
              </Button>
            </div>

            <p className="premium-description text-sm mt-8 opacity-75">
              Available worldwide • No subscription required • Premium experience guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
