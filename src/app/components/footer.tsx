import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"
import { Logo } from "@/app/components/logo"

export default function Footer() {
  return (
    <footer className="section-dark-bg text-white py-12 sm:py-16 relative">
      <div className="w-full px-[10%]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-10 h-10" />
              <span className="font-bold tracking-tight text-lg leading-none text-white">
                I M E E R
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              It takes a village to raise a child. iMEER brings yours together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--brand-playful))]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/70 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--brand-playful))]">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Report a Bug
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Feature Request
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--brand-playful))]">Contact Info</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-[hsl(var(--brand-pro))]" />
                <span>info@iMEER.com.au </span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-[hsl(var(--brand-pro))]" />
                <span>Sydney, Australia</span>
              </li>
            </ul>

            <div className="mt-6">
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.instagram.com/imeerapp?igsh=MTFmYTI3N3ltanNxNQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity"
                  aria-label="IMEER on Instagram"
                >
                  <Image
                    src="/images/insta.png"
                    alt="Instagram"
                    width={28}
                    height={28}
                  />
                </Link>

                <Link
                  href="https://www.tiktok.com/@imeerapp?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity"
                  aria-label="IMEER on TikTok"
                >
                  <Image
                    src="/images/tiktok.png"
                    alt="TikTok"
                    width={28}
                    height={28}
                  />
                </Link>

                <Link
                  href="https://www.facebook.com/profile.php?id=61583722330840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity"
                  aria-label="IMEER on Facebook"
                >
                  <div className="w-7 h-7 rounded-full overflow-hidden">
                    <Image
                      src="/images/fb.png"
                      alt="Facebook"
                      width={28}
                      height={28}
                      className="object-cover"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <p>247+ families on the waitlist · Launching soon on iOS & Android</p>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white/70 leading-relaxed">
              © 2026 iMEER by TaskHabs. All rights reserved.
            </p>

            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="/terms" className="text-white/70 leading-relaxed hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/terms" className="text-white/70 leading-relaxed hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="text-white/70 leading-relaxed hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
