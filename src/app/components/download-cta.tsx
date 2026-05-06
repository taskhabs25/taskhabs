"use client"
import Image from "next/image"
// import Link from "next/link"
import { Star, Lock } from "lucide-react"
import { Logo } from "@/app/components/logo"
import Flag from "react-world-flags"

const APP_STORE_URL = "/" // TODO: real link
const PLAY_STORE_URL = "/" // TODO: real link

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="py-16 sm:py-24 section-dark-bg text-white relative overflow-hidden"
    >
      <div className="w-full px-[10%]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left relative z-10">
            <Logo className="w-25 mx-auto lg:mx-0 mb-4" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Your village is waiting. Build it with{" "}
              <span className="text-[hsl(var(--brand-playful))]">
                iMEER
              </span>.
            </h2>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Get started with iMEER today. Download the app on iOS or Android and begin building habits, responsibility, and motivation at home.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8 text-white/80 text-base">
              <div className="flex items-center justify-center lg:justify-start">
                <span>✅ 14-day free trial</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <span>🔒 Parent-controlled always</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <span>📱 iOS & Android</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <span>🛡️ Safe for children 4-17</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Flag code="AU" style={{ width: 20, height: 20 }} />
                <span>Built in Australia</span>
              </div>
            </div>

            {/* Store Buttons (currently disabled) */}
            {/*
            <div
              id="cta"
              className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-4 lg:justify-start lg:items-start"
            >
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
            */}

            {/* Button 1 — Join the Waitlist */}
            <button
              onClick={() =>
                document
                  .getElementById("cta")
                  ?.scrollIntoView({ behavior: "smooth" , block: "center"})
              }
              className="relative px-8 py-4 rounded-full font-semibold text-white text-lg 
              bg-gradient-to-r from-orange-400 via-pink-500 to-pink-600 
              shadow-[0_10px_30px_rgba(236,72,153,0.4)] 
              hover:scale-[1.03] hover:brightness-110 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">🚀 Download the App</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-20 transition rounded-full" />
            </button>
          </div>

          {/* App Screenshots */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group download-cta-phones">
              
              {/* Main Phone */}
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/home-parent.png"
                    alt="IMEER Home Screen"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="absolute -right-16 top-8 bg-gray-900 rounded-[2.5rem] p-2 shadow-xl opacity-80 scale-75 transition-transform duration-300 ease-out group-hover:scale-90 group-hover:-translate-y-1 group-hover:translate-x-3">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/rewards.png"
                    alt="IMEER Rewards Screen"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Floating Stars */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1"
              >
                <Star className="w-4 h-4 text-yellow-800 fill-current" />
              </div>

              <div
                aria-hidden="true"
                className="absolute -bottom-4 right-4 w-6 h-6 bg-yellow-300 rounded-full shadow-lg transition-transform duration-300 ease-out group-hover:scale-125 group-hover:translate-y-1"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}