import type { Metadata } from "next"
import { Card, CardContent } from "@/app/components/ui/card"
import { Mail, Globe } from "lucide-react"
import Image from "next/image"
export const metadata: Metadata = {
  title: "Contact Us - IMEER",
  description:
    "Get in touch with the IMEER team. We're here to help with questions, support, and feedback.",
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section
        id="contact-hero"
        className="scroll-header-offset hero-gradient py-16 sm:py-24"
      >
        <div className="w-full px-[10%]">
          <div className="text-center mb-">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-[hsl(var(--brand-playful))]">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Have questions, feedback, or need support? We&apos;d love to hear from you.
              Our team is here to help make your family&apos;s experience with TaskHabs
              amazing.
            </p>
          </div>
        </div>
      </section>

    {/* Contact Info */}
<section className="py-16 sm:py-24">
  <div className="w-full px-[10%] flex justify-center">
    <Card className="max-w-2xl w-full mx-auto bg-white/5 border border-white/10 text-white shadow-lg rounded-2xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-6">
            How to <span className="text-[hsl(var(--brand-playful))]">Reach Us</span>
          </h2>
          <p className="text-white/80 leading-relaxed">
            Choose the method that works best for you. We typically respond within 24 hours during business days.
          </p>
        </div>

        <div className="space-y-8">
          {/* Email */}
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 bg-gradient-to-br from-[hsl(var(--brand-pro))] to-[hsl(var(--brand-playful))] shadow">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-white/80 mb-2">For general questions and support</p>
              <a
                href="mailto:info@iMEER.com.au "
                className="font-medium text-[hsl(var(--brand-pro))] hover:underline"
              >
                info@iMEER.com.au 
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 bg-gradient-to-br from-[hsl(var(--brand-pro))] to-[hsl(var(--brand-playful))] shadow">
              {/* you could also import SVGs; using next/image keeps it simple */}
              {/* <Image src="/images/insta.png" alt="Instagram" width={26} height={26} /> */}
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Follow & DM Us</h3>
              <p className="text-white/80 mb-3">Quick updates, tips & support via socials</p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://www.instagram.com/imeerapp?igsh=MTFmYTI3N3ltanNxNQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 transition"
                >
                  <Image src="/images/insta.png" alt="Instagram" width={20} height={20} />
                  <span className="text-sm font-medium">@IMEER</span>
                </a>

                <a
                  href="https://www.tiktok.com/@taskhabs?_t=ZS-8yEdgoDI3Oi&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 transition"
                >
                  <Image src="/images/tiktok.png" alt="TikTok" width={20} height={20} />
                  <span className="text-sm font-medium">@IMEER</span>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61583722330840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 transition"
                >
                  <div className="w-5 h-5 rounded-full overflow-hidden">
                    <Image
                      src="/images/fb.png"
                      alt="Facebook"
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">@IMEER</span>
                </a>

              </div>
            </div>
          </div>

          {/* Office */}
          {/* <div className="flex items-start">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 bg-gradient-to-br from-[hsl(var(--brand-pro))] to-[hsl(var(--brand-playful))] shadow">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Our Office</h3>
              <p className="text-white/80 leading-relaxed">
                Sydney, Australia
              </p>
            </div>
          </div> */}
        </div>
      </CardContent>
    </Card>
  </div>
</section>

    </main>
  )
}
