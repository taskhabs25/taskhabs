import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import {Logo} from "@/app/components/logo"

export default function DownloadCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
      {/* Background Decorations */}
      {/* <div className="absolute top-10 left-[10%] w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-[10%] w-16 h-16 bg-white rounded-full opacity-10"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-yellow-300 rounded-full opacity-30"></div> */}

      <div className="w-full px-[10%]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <Logo className="w-20"/>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Family's Routine?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 lg: ">
              Join thousands of families who have already discovered the joy of organized, motivated kids.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
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

            <div className="flex flex-col sm:flex-row gap-4 justify-start mb-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-start mb-8">
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
          </div>

          {/* App Screenshots */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Phone */}
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/home.png"
                    alt="TASK HABS Home Screen"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Secondary Phone (Partially Visible) */}
              <div className="absolute -right-16 top-8 bg-gray-900 rounded-[2.5rem] p-2 shadow-xl opacity-80 scale-75">
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
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-4 h-4 text-yellow-800 fill-current" />
              </div>
              <div className="absolute -bottom-4 right-4 w-6 h-6 bg-yellow-300 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
