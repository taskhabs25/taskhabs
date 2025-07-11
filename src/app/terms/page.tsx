import type { Metadata } from "next"
import { Card, CardContent } from "@/app/components/ui/card"
import { Shield, FileText, Users, Lock, Eye, Scale } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - TASK HABS",
  description: "Terms of Service and Privacy Policy for TASK HABS family task management app.",
}

const termsData = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content:
      "By downloading, installing, or using the TASK HABS application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.",
  },
  {
    icon: Users,
    title: "Description of Service",
    content:
      "TASK HABS is a family task and habit management application designed to help parents and children organize daily routines, track progress, and build positive habits through a reward system.",
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
      "You agree to use TASK HABS only for lawful purposes and in accordance with these Terms. You may not use the service to harm minors in any way or to violate any applicable laws or regulations.",
  },
  {
    icon: Shield,
    title: "Limitation of Liability",
    content:
      'TASK HABS is provided "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.',
  },
  {
  icon: Lock,
  title: "Privacy and Data Security",
  content:
    "We are committed to protecting your privacy. Any personal information you provide while using TASK HABS will be handled in accordance with our Privacy Policy. Please review it to understand how your data is collected, used, and safeguarded.",
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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="w-full px-[10%]">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Terms & <span className="text-blue-600">Privacy</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Your trust is important to us. Here's how we protect your family's privacy and what you need to know about
              using TASK HABS.
            </p>
            <p className="text-sm text-gray-500">Last updated: June 2025</p>
          </div>
        </div>
      </section>

      {/* Terms of Service Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Terms of <span className="text-blue-600">Service</span>
              </h2>
              <p className="text-lg text-gray-600">Please read these terms carefully before using our service.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {termsData.map((term, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <term.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{term.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{term.content}</p>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Privacy <span className="text-blue-600">Policy</span>
              </h2>
              <p className="text-lg text-gray-600">How we collect, use, and protect your family's information.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {privacyData.map((privacy, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <privacy.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{privacy.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{privacy.content}</p>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white">
              <CardContent className="p-8 text-center">
                {/* <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-white" />
                  <Star className="w-4 h-4 text-blue-600 fill-current" />
                </div> */}
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Questions About Our Terms?</h2>
                <p className="text-blue-100 mb-6 text-lg">
                  If you have any questions about these Terms of Service or Privacy Policy, we're here to help.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-white bg-opacity-10 rounded-xl p-4">
                    <p className="font-bold mb-1 text-blue-600">Email</p>
                    <p className="font-semibold text-blue-600">legal@taskhabs.com</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-xl p-4">
                    <p className="font-bold mb-1 text-blue-600">Phone</p>
                    <p className="font-semibold text-blue-600">1-800-TASK-HABS</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-xl p-4">
                    <p className="font-bold mb-1 text-blue-600">Address</p>
                    <p className="font-semibold text-blue-600">San Francisco, CA</p>
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
