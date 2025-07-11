import type { Metadata } from "next"
import { Card, CardContent } from "@/app/components/ui/card"

import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - TASK HABS",
  description: "Get in touch with the TASK HABS team. We're here to help with questions, support, and feedback.",
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 sm:py-24">
        <div className="w-full px-[10%]">
          <div className="text-center mb-">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions, feedback, or need support? We'd love to hear from you. Our team is here to help make your
              family's experience with TASK HABS amazing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          {/* <div className="grid lg:grid-cols-2 gap-12"> */}
          {/* Contact Form */}
          {/* <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Your first name"
                        className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Your last name"
                        className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us how we can help..."
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card> */}

          {/* Centered Single Card for Contact Info */}
          <Card className="max-w-2xl w-full mx-auto border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Reach Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  Choose the method that works best for you. We typically respond within 24 hours during business days.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-2">For general questions and support</p>
                    <a href="mailto:hello@taskhabs.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      hello@taskhabs.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                    <p className="text-gray-600 mb-2">Monday - Friday, 9 AM - 6 PM PST</p>
                    <a href="tel:1-800-TASK-HABS" className="text-blue-600 hover:text-blue-700 font-medium">
                      1-800-TASK-HABS
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                    <p className="text-gray-600 mb-2">Available in the app for instant help</p>
                    <span className="text-blue-600 font-medium">Open the TASK HABS app</span>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Office</h3>
                    <p className="text-gray-600">
                      123 Family Street
                      <br />
                      San Francisco, CA 94102
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* </div> */}
        </div>
      </section>
    </main>
  )
}
