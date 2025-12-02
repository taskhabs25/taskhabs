import type { Metadata } from "next"
import { Card, CardContent } from "@/app/components/ui/card"
import { Shield, FileText, Users, Lock, Eye, Scale } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - IMEER",
  description: "Terms of Service and Privacy Policy for IMEER family task management app.",
}

const termsData = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content:
      "By downloading, installing, or using the IMEER application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.",
  },
  {
    icon: Users,
    title: "Description of Service",
    content:
      "IMEER is a family task and habit management application designed to help parents and children organize daily routines, track progress, and build positive habits through a reward system.",
  },
  {
    icon: Shield,
    title: "User Accounts",
    content:
      "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.",
  },
  {
    icon: Scale,
    title: "Acceptable Use",
    content:
      "You agree to use IMEER only for lawful purposes and in accordance with these Terms. You may not use the service to harm minors in any way or to violate any applicable laws or regulations.",
  },
  {
    icon: Shield,
    title: "Limitation of Liability",
    content:
      'IMEER is provided "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.',
  },
  {
    icon: Lock,
    title: "Privacy and Data Security",
    content:
      "We are committed to protecting your privacy. Any personal information you provide while using IMEER will be handled in accordance with our Privacy Policy. Please review it to understand how your data is collected, used, and safeguarded.",
  },
]

const privacyData = [
  {
    icon: Eye,
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, such as when you create an account, set up family profiles, or contact us for support. This may include names, email addresses, and task/reward preferences.",
  },
  {
    icon: Users,
    title: "How We Use Your Information",
    content:
      "We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure the safety and security of our platform.",
  },
  {
    icon: Shield,
    title: "Information Sharing",
    content:
      "We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information only in limited circumstances, such as to comply with legal obligations or protect our rights.",
  },
  {
    icon: Users,
    title: "Children's Privacy",
    content:
      "We are committed to protecting children's privacy. We do not knowingly collect personal information from children under 13 without parental consent. Parents have control over their children's profiles and can delete them at any time.",
  },
  {
    icon: Lock,
    title: "Data Security",
    content:
      "We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
  },
  {
    icon: Scale,
    title: "Your Rights",
    content:
      "You have the right to access, update, or delete your personal information. You can do this through your account settings or by contacting us directly.",
  },
]

export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        className="scroll-header-offset hero-gradient py-16 sm:py-24"
      >
        <div className="w-full px-[10%]">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--brand-pro))] to-[hsl(var(--brand-playful))] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Terms &{" "}
              <span className="text-[hsl(var(--brand-playful))]">
                Privacy
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-4 leading-relaxed">
              Your trust is important to us. Here&apos;s how we protect your family&apos;s
              privacy and what you need to know about using IMEER.
            </p>
            <p className="text-sm text-white/60">Last updated: June 2025</p>
          </div>
        </div>
      </section>

      {/* Terms of Service Section */}
      <section className="py-16 sm:py-24 section-dark-bg border-t border-white/10">
        <div className="w-full px-[10%]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Terms of{" "}
                <span className="text-[hsl(var(--brand-playful))]">
                  Service
                </span>
              </h2>
              <p className="text-lg text-white/70">
                Please read these terms carefully before using our service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {termsData.map((term, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 bg-gradient-to-br from-[hsl(var(--brand-pro))] to-[hsl(var(--brand-playful))] shadow">
                        <term.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{term.title}</h3>
                        <p className="text-white/80 leading-relaxed">
                          {term.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="py-16 sm:py-24 bg-black border-t border-white/10">
        <div className="w-full px-[10%]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Privacy{" "}
                <span className="text-[hsl(var(--brand-playful))]">
                  Policy
                </span>
              </h2>
              <p className="text-lg text-white/70">
                How we collect, use, and protect your family&apos;s information.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {privacyData.map((privacy, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 bg-gradient-to-br from-[hsl(var(--brand-playful))] to-[hsl(var(--brand-pro))] shadow">
                        <privacy.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{privacy.title}</h3>
                        <p className="text-white/80 leading-relaxed">
                          {privacy.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-black border-t border-white/10">
        <div className="w-full px-[10%]">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 border border-white/10 rounded-2xl shadow-xl">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Questions About Our Terms?
                </h2>
                <p className="text-white/80 mb-6 text-lg max-w-2xl mx-auto">
                  If you have any questions about these Terms of Service or our
                  Privacy Policy, we&apos;re here to help.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="font-bold mb-1 text-[hsl(var(--brand-playful))]">
                      Email
                    </p>
                    <p className="font-semibold text-white">
                      info@iMEER.com.au
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="font-bold mb-1 text-[hsl(var(--brand-playful))]">
                      More Support
                    </p>
                    <p className="font-semibold text-white/80">
                      Visit our Contact page for more options.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
