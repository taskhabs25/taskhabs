"use client"

import { useState, useEffect, FormEvent } from "react"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { Logo } from "@/app/components/logo"
import {
  ShieldCheck,
  Gift,
  Trophy,
  TrendingDown,
  Play,
  Users,
  Award,
  TrendingUp,
  Star,
} from "lucide-react"

const APP_STORE_URL = "" // TODO
const PLAY_STORE_URL = "" // TODO

type View = "parent" | "kid"

export default function HeroV2() {
  const [view, setView] = useState<View>("parent")
  const [statsVisible, setStatsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [showModal, setShowModal] = useState(false)

  // reveal stat cards
  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 600)
    return () => clearTimeout(t)
  }, [])

 const handleJoin = async (e: FormEvent) => {
  e.preventDefault()
  try {
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
    const data = await res.json()
    if (res.ok) {
      setShowModal(true)     // show your custom thank‑you modal
      setEmail("")
    } else {
      console.error(data.error)
      // optionally show an inline error message
    }
  } catch (err) {
    console.error(err)
    // show error to user
  }
}


  // assets
  const parentImg = "/images/home-parent.png"
  const kidImg = "/images/home-child.png"
  const mascotImg = "/images/mascot.png"

  return (
    <>
    {showModal && (
  <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
    <div className="bg-white rounded-2xl p-6 max-w-sm w-full relative text-center">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >
        ×
      </button>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Thank you!</h3>
      <p className="text-gray-700 mb-6">
        We’ve added you to the waitlist—watch your inbox for updates.
      </p>
      <button
        onClick={() => setShowModal(false)}
        className="px-6 py-2 bg-[hsl(var(--brand-playful))] text-white rounded-full hover:brightness-110 transition"
      >
        Close
      </button>
    </div>
  </div>
)}

    <section
      id="hero"
      className="relative overflow-hidden hero-gradient text-white pt-28 pb-32 sm:pt-32 sm:pb-40"
    >
      {/* Floating owl mascot */}
      <div className="hero-mascot" aria-hidden="true">
        <Image src={mascotImg} alt="" width={220} height={220} priority />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 mb-4 backdrop-blur-sm">
          <Logo className="h-6 w-auto" />
          <span className="text-xs font-semibold tracking-wide uppercase">
            Introducing TaskHabs
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-5xl mx-auto">
          Guide Better Habits. <br className="hidden sm:block" />
          Enjoy More{" "}
          <span className="text-[hsl(var(--brand-playful))]">Family Time</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
          Set chores, track progress, and manage screen time from one app.
          Families using TaskHabs report up to{" "}
          <span className="font-semibold text-[hsl(var(--brand-playful))]">
            30% less screen time
          </span>{" "}
          in the first month.
        </p>

        

        {/* Waitlist Form (attention‑grabber) */}
        <form
          onSubmit={handleJoin}
          className="relative max-w-md mx-auto mb-12"
        >
          {/* Glow overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-3xl bg-[hsl(var(--brand-playful))]/30 blur-xl animate-pulse"
          />
          {/* Actual form card */}
          <div className="relative flex flex-col sm:flex-row gap-2 bg-white/10 backdrop-blur-md p-4 sm:p-2 rounded-3xl">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full text-white placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 px-6 py-3 rounded-full bg-[hsl(var(--brand-playful))] text-white font-semibold hover:brightness-110 transition relative overflow-hidden"
            >
              <span className="relative z-10">Join Waitlist</span>
              {/* subtle “shine” on hover */}
              <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-30 transition-opacity rounded-full" />
            </button>
          </div>
        </form>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button
            variant="secondary"
            className="secondary-btn-lg"
            onClick={() =>
              document
                .getElementById("how-it-works")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Play className="w-5 h-5 mr-2" />
            See How It Works
          </Button>
        </div>

        {/* Messaging Pills */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-16 text-sm">
          <div className="pill-parent">
            <ShieldCheck className="w-4 h-4 mr-2" /> Parental Controls
          </div>
          <div className="pill-parent">
            <TrendingDown className="w-4 h-4 mr-2" /> Reduce Screen Time
          </div>
          <div className="pill-kid">
            <Gift className="w-4 h-4 mr-2" /> Earn Rewards
          </div>
          <div className="pill-kid">
            <Trophy className="w-4 h-4 mr-2" /> Collect Badges
          </div>
        </div>

        {/* Stats + Screenshot Grid */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid gap-8 items-start lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            {/* Left Stats */}
            <div className="space-y-6 order-2 lg:order-1">
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

            {/* Screenshot Toggle */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-full max-w-[300px]">
                {/* Tabs */}
                <div className="inline-flex rounded-full bg-white/10 p-1 mb-6">
                  <button
                    className={`screenshot-tab ${view === "parent" ? "is-active" : ""}`}
                    onClick={() => setView("parent")}
                  >
                    For Parents
                  </button>
                  <button
                    className={`screenshot-tab ${view === "kid" ? "is-active" : ""}`}
                    onClick={() => setView("kid")}
                  >
                    For Kids
                  </button>
                </div>
                {/* 3D Flip */}
                <div className="relative phone-frame mx-auto flip3d-wrapper">
                  <div className={`flip3d-inner ${view === "kid" ? "is-flipped" : ""}`}>
                    <div className="flip3d-face flip3d-front overflow-hidden rounded-[2rem] pb-3">
                      <Image
                        src={parentImg}
                        alt="Parent dashboard screenshot"
                        width={360}
                        height={720}
                        className="w-full h-full object-contain"
                        priority
                      />
                    </div>
                    <div className="flip3d-face flip3d-back overflow-hidden rounded-[2rem] pb-3">
                      <Image
                        src={kidImg}
                        alt="Kid view screenshot"
                        width={360}
                        height={720}
                        className="w-full h-full object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
                {/* Captions */}
                <div className="mt-4 text-center leading-snug px-2">
                  {view === "parent" ? (
                    <>
                      <strong className="block text-base sm:text-lg font-semibold text-white">
                        Parent Dashboard
                      </strong>
                      <span className="block text-xs sm:text-sm text-white/80">
                        All kids in one view. Assign chores, track progress & screen limits.
                      </span>
                    </>
                  ) : (
                    <>
                      <strong className="block text-base sm:text-lg font-semibold text-white">
                        Child Dashboard
                      </strong>
                      <span className="block text-xs sm:text-sm text-white/80">
                        Tap to complete, earn points, unlock badges. The owl cheers you on!
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Stats */}
            <div className="space-y-6 order-3">
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
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className={`stats-counter ${statsVisible ? "opacity-100" : "opacity-0"}`}>
                  <p className="hero-title text-3xl font-bold">95%</p>
                  <p className="hero-description text-sm">Task Completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store Badges */}
        <div id="cta" className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src="/images/apple_logo_white.svg"
              alt="Download on the App Store"
              width={200}
              height={70}
              className="hover:opacity-90 transition-opacity"
            />
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src="/images/playstore_logo.png"
              alt="Get it on Google Play"
              width={200}
              height={70}
              className="hover:opacity-90 transition-opacity"
            />
          </a>
        </div>
      </div>
    </section>
    </>
  )
}
