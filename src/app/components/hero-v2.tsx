"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { Star, Smartphone, Play, Users, Award, TrendingUp, Shield } from "lucide-react"
import { Logo } from "@/app/components/logo"

export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="gradient-mesh-bg min-h-screen relative">
      {/* Floating Orbs */}
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Content */}
        <div className="pt-20 pb-16">
          <div className="text-center mb-16">
            {/* Brand Badge */}
            <div className="inline-flex items-center space-x-2 feature-pill rounded-full px-6 py-3 mb-8">
              {/* <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                
              </div> */}
              <Logo className="w-8 h-8"/>
              <span className="hero-subtitle font-semibold">Introducing TASK HABS</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto leading-tight">
              Transform Your Family's
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Daily Routine
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-description text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              The smart family task management app that makes building healthy habits fun, engaging, and rewarding for
              everyone.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="primary-btn text-white px-10 py-6 rounded-2xl text-lg font-semibold flex items-center justify-center min-h-[64px] glow-effect">
                <Smartphone className="w-6 h-6 mr-3" />
                Get Started Free
              </Button>
              <Button className="secondary-btn text-white px-10 py-6 rounded-2xl text-lg font-semibold flex items-center justify-center min-h-[64px]">
                <Play className="w-6 h-6 mr-3" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="feature-pill rounded-full px-6 py-3 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="hero-subtitle text-sm font-medium">100% Safe for Kids</span>
            </div>
            <div className="feature-pill rounded-full px-6 py-3 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="hero-subtitle text-sm font-medium">30% Less Screen Time</span>
            </div>
            <div className="feature-pill rounded-full px-6 py-3 flex items-center space-x-2">
              <Award className="w-5 h-5 text-purple-400" />
              <span className="hero-subtitle text-sm font-medium">Reward System</span>
            </div>
          </div>

          {/* Phone Mockup Section */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Left Stats */}
              <div className="space-y-6">
                <div className="hero-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className={`stats-counter ${statsVisible ? "opacity-100" : "opacity-0"}`}>
                    <p className="hero-title text-3xl font-bold">10K+</p>
                    <p className="hero-description text-sm">Happy Families</p>
                  </div>
                </div>

                <div className="hero-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className={`stats-counter ${statsVisible ? "opacity-100" : "opacity-0"}`}>
                    <p className="hero-title text-3xl font-bold">4.9★</p>
                    <p className="hero-description text-sm">App Store Rating</p>
                  </div>
                </div>
              </div>

              {/* Center Phone */}
              <div className="flex justify-center">
                <div className="phone-container">
                  <div className="phone-mockup rounded-[2.5rem] p-3">
                    <div className="bg-white rounded-[2rem] overflow-hidden">
                      <Image
                        src="/images/onboarding.png"
                        alt="TASK HABS App Screenshot"
                        width={280}
                        height={560}
                        className="w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Stats */}
              <div className="space-y-6">
                <div className="hero-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className={`stats-counter ${statsVisible ? "opacity-100" : "opacity-0"}`}>
                    <p className="hero-title text-3xl font-bold">30%</p>
                    <p className="hero-description text-sm">Screen Time Reduced</p>
                  </div>
                </div>

                <div className="hero-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div className={`stats-counter ${statsVisible ? "opacity-100" : "opacity-0"}`}>
                    <p className="hero-title text-3xl font-bold">95%</p>
                    <p className="hero-description text-sm">Task Completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="hero-description text-lg mb-6">Join thousands of families building better habits together</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="secondary-btn text-white px-8 py-4 rounded-2xl flex items-center justify-center cursor-pointer">

                <Smartphone className="w-5 h-5 mr-2" />
                Download on App Store
              </Button>
              <Button className="secondary-btn text-white px-8 py-4 rounded-2xl flex items-center justify-center cursor-pointer">
                <Smartphone className="w-5 h-5 mr-2" />
                Get it on Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
