"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/app/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Mother of 2",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "IMEER has completely transformed our morning routine! My kids actually look forward to completing their tasks now.",
  },
  {
    name: "Mike Chen",
    role: "Father of 3",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The reward system is genius. Screen time went from a battle to a privilege they earn. Highly recommend!",
  },
  {
    name: "Emily Rodriguez",
    role: "Single Mom",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "As a busy single mom, this app helps me stay organized and keeps my daughter motivated. It's a lifesaver!",
  },
  {
    name: "David Thompson",
    role: "Father of 1",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "My son loves earning points and choosing his rewards. It's made parenting so much more positive and fun.",
  },
  {
    name: "Lisa Park",
    role: "Mother of 4",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Managing tasks for four kids was chaos until we found IMEER. Now everyone knows what to do and when!",
  },
  {
    name: "James Wilson",
    role: "Father of 2",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The family dashboard gives us a clear overview of everyone's progress. It's brought us closer together.",
  },
  {
    name: "Maria Garcia",
    role: "Mother of 1",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "My daughter went from forgetting her chores to asking for more tasks to earn extra points. Amazing!",
  },
  {
    name: "Robert Kim",
    role: "Father of 3",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The app works perfectly on all our devices. Kids can check their tasks anywhere, anytime.",
  },
]
export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isPaused) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth
    let scrollPosition = 0

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += 0.5
        if (scrollPosition >= scrollWidth - clientWidth) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
    }

    const intervalId = setInterval(scroll, 5)
    return () => clearInterval(intervalId)
  }, [isPaused])

  return (
    <section
      id="testimonials"
      className="scroll-header-offset py-16 sm:py-24 section-dark-bg"
      /* removed overflow-hidden here */
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What <span className="text-[hsl(var(--brand-playful))]">Parents</span> Are Saying
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join thousands of families who have transformed their daily routines with IMEER.
          </p>
        </div>

        {/* Auto‑scroll row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden overflow-y-visible pt-8 pb-8 select-none"
          style={{ width: "100%" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card
              key={index}
              className="border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl transform hover:-translate-y-2 hover:scale-105 flex-shrink-0"
              style={{ width: "calc(25% - 18px)", minWidth: "280px" }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-gradient-to-br from-[hsl(var(--brand-pro))] to-[hsl(var(--brand-playful))] rounded-full flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-white/80 mb-6 leading-relaxed flex-grow">
                  “{testimonial.text}”
                </p>

                {/* Author */}
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--brand-pro))] to-[hsl(var(--brand-playful))] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}