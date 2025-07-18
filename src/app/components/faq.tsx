"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Is TASK HABS free to use?",
    answer:
      "Yes! TASK HABS is completely free to download and use. There are no hidden fees, subscriptions, or in-app purchases required for core functionality.",
  },
  {
    question: "What ages is TASK HABS suitable for?",
    answer:
      "TASK HABS is designed for children ages 4-16. The interface is intuitive enough for young children while offering features that engage teenagers.",
  },
  {
    question: "How does the reward system work?",
    answer:
      "Children earn points by completing tasks and maintaining good habits. These points can be redeemed for rewards that you set up, such as extra screen time, special treats, or family activities.",
  },
  {
    question: "Can I use TASK HABS for multiple children?",
    answer:
      "TASK HABS supports multiple child profiles within one family account. You can track each child's progress individually and set age-appropriate tasks and rewards.",
  },
  {
    question: "Does TASK HABS work offline?",
    answer:
      "Yes, most features work offline. Tasks can be completed and progress tracked without an internet connection. Data syncs automatically when you're back online.",
  },
  {
    question: "How secure is my family's data?",
    answer:
      "We take privacy seriously. All data is encrypted and stored securely. We never share personal information with third parties and comply with all child privacy protection laws.",
  },
  {
    question: "Can I customize tasks and rewards?",
    answer:
      "Yes! You have complete control over creating custom tasks, setting point values, and defining rewards that work best for your family's needs and values.",
  },
  {
    question: "What devices does TASK HABS work on?",
    answer:
      "TASK HABS works on iOS and Android smartphones and tablets. We also offer a web version that works on computers and laptops.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="scroll-header-offset py-16 sm:py-24 section-dark-bg"
    >
      <div className="w-full px-[10%]">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--brand-pro))] to-[hsl(var(--brand-playful))] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked{" "}
            <span className="text-[hsl(var(--brand-playful))]">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Got questions? We&apos;ve got answers. Here are the most common questions parents ask about TASK HABS.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className={`rounded-2xl shadow-lg border backdrop-blur-sm transition-all duration-300 ${
                    isOpen
                      ? "border-[hsl(var(--brand-playful))]/70 bg-white/10 scale-[1.02] shadow-xl"
                      : "border-white/10 bg-white/5 hover:border-[hsl(var(--brand-playful))]/50 hover:bg-white/10"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between rounded-2xl transition-colors hover:bg-white/5"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="font-bold text-sm text-[hsl(var(--brand-playful))]">
                          Q{index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[hsl(var(--brand-playful))] text-white rotate-180"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                      <div className="ml-14 pl-4">
                        <p className="text-white/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA (optional) */}
        {/*
        <div className="text-center mt-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-white/80 mb-6">
              Our support team is here to help! Get in touch and we'll get back to you within 24 hours.
            </p>
            <button className="primary-btn-lg">
              Contact Support
            </button>
          </div>
        </div>
        */}
      </div>
    </section>
  )
}
