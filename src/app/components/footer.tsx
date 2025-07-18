import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
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
                TaskHabs
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Empowering families to build healthy habits and create positive routines together.
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

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--brand-playful))]">Contact Info</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-[hsl(var(--brand-pro))]" />
                <span>hello@taskhabs.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-[hsl(var(--brand-pro))]" />
                <span>1-800-TASK-HABS</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-[hsl(var(--brand-pro))]" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white/70 leading-relaxed">
              © 2025 TaskHabs. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-white/70 leading-relaxed"
              >
                Terms
              </Link>
              <Link
                href="/terms"
                className="text-white/70 leading-relaxed"
              >
                Privacy
              </Link>
              <Link
                href="/contact"
                className="text-white/70 leading-relaxed"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
