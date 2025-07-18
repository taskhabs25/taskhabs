import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Logo } from "@/app/components/logo"

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
            <Logo className="w-20 mx-auto lg:mx-0 mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-[hsl(var(--brand-playful))]">Transform</span> Your Family&apos;s Routine?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Join thousands of families who have already discovered the joy of organized, motivated kids.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8 text-white/80 text-base">
              <div className="flex items-center justify-center lg:justify-start">
                <Star className="w-5 h-5 text-yellow-400 mr-2 fill-current" />
                <span>Free to download</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Star className="w-5 h-5 text-yellow-400 mr-2 fill-current" />
                <span>Works on all devices</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Star className="w-5 h-5 text-yellow-400 mr-2 fill-current" />
                <span>No ads or subscriptions</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Star className="w-5 h-5 text-yellow-400 mr-2 fill-current" />
                <span>Safe for kids</span>
              </div>
            </div>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {/* App Store Button - Blue */}
              <Link
                href={APP_STORE_URL}
                className="flex items-center bg-[hsl(var(--brand-pro))] hover:bg-[hsl(var(--brand-pro))/0.9] text-white rounded-2xl px-6 py-3 shadow-lg transition-all duration-200 min-h-[60px]"
              >
                <img
                  src="/images/appstore-logo.png"
                  alt="App Store"
                  width={44}
                  height={44}
                  className="mr-4 h-11 w-auto"
                  style={{ objectFit: "contain" }}
                />
                <span className="text-lg font-semibold">Download on App Store</span>
              </Link>

              {/* Play Store Button - Dark */}
              <Link
                href={PLAY_STORE_URL}
                className="flex items-center bg-black hover:bg-gray-800 text-white rounded-2xl px-6 py-3 shadow-lg transition-all duration-200 min-h-[60px]"
              >
                <img
                  src="/images/playstore-logo.png"
                  alt="Google Play"
                  width={44}
                  height={44}
                  className="mr-4 h-11 w-auto"
                  style={{ objectFit: "contain" }}
                />
                <span className="text-lg font-semibold">Get it on Google Play</span>
              </Link>
            </div>
          </div>

          {/* App Screenshots */}
          <div className="flex justify-center lg:justify-end">
            {/* group for hover pop */}
            <div className="relative group download-cta-phones">
              {/* Main Phone */}
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/home-parent.png"
                    alt="TASK HABS Home Screen"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Secondary Phone (Partially Visible) */}
              <div className="absolute -right-16 top-8 bg-gray-900 rounded-[2.5rem] p-2 shadow-xl opacity-80 scale-75 transition-transform duration-300 ease-out group-hover:scale-90 group-hover:-translate-y-1 group-hover:translate-x-3">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/rewards.png"
                    alt="TASK HABS Rewards Screen"
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
