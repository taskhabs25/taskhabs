import Image from "next/image"
import { Star } from "lucide-react"
import Link from "next/link"
import {Logo} from "@/app/components/logo"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-12 sm:py-20">
      {/* <div className="w-full px-[10%]"> */}
      <div className="w-full px-[10%]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Logo/Mascot */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center ">
                <Logo/>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome To <span className="text-blue-600">TASK HABS</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0">
              Empower your child to build healthy habits while keeping things fun and organized.
            </p>

            {/* Performance Benefit */}
            <div className="bg-yellow-100 border border-yellow-200 rounded-2xl p-4 mb-8 inline-block">
              <p className="text-yellow-800 font-semibold flex items-center justify-center">
                <Star className="w-5 h-5 mr-2 text-yellow-600" />
                Reduce screen time by 30%!
              </p>
            </div>

              {/* App Store Buttons */}
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

          {/* App Screenshot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
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

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-4 h-4 text-yellow-800 fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
