// /src/app/reviews/page.tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Minus } from "lucide-react"

interface Review {
  quote: string
  author: string
  region: string
}

interface Category {
  id: string
  label: string
  reviews: Review[]
}

const CATEGORIES: Category[] = [
  {
    id: "moms",
    label: "What Moms Say",
    reviews: [
      {
        quote:
          "TASK HABS has made our mornings so much smoother. My kids actually ask to do chores now!",
        author: "– The Johnson Family (CA)",
        region: "CA",
      },
      {
        quote:
          "I love that I can see everyone’s schedule in one place and set gentle reminders.",
        author: "– The Lee Family (NY)",
        region: "NY",
      },
    ],
  },
  {
    id: "dads",
    label: "What Dads Say",
    reviews: [
      {
        quote:
          "Finally a chore app that both my kids *and* I love. Screen time is now a reward—not a fight.",
        author: "– The Patel Family (TX)",
        region: "TX",
      },
      {
        quote:
          "I get notifications when tasks are done—no more nagging!",
        author: "– The Nguyen Family (WA)",
        region: "WA",
      },
    ],
  },
  {
    id: "large",
    label: "Families of 3+ Kids",
    reviews: [
      {
        quote:
          "Keeping track of five kids used to be chaos. Now everyone knows where they should be.",
        author: "– The Ramirez Family (FL)",
        region: "FL",
      },
      {
        quote:
          "We assign age‑appropriate chores easily and the reward system motivates them.",
        author: "– The Cohen Family (IL)",
        region: "IL",
      },
    ],
  },
  {
    id: "single",
    label: "Single Parents",
    reviews: [
      {
        quote:
          "As a single mom, this app is a lifesaver. Tasks, rewards, bedtime—all in one place.",
        author: "– The Smith Family (OR)",
        region: "OR",
      },
      {
        quote:
          "I don’t have to juggle calendars anymore; TASK HABS organizes it for me!",
        author: "– The García Family (AZ)",
        region: "AZ",
      },
    ],
  },
]

export default function ReviewsPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="hero-gradient py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Our customers say it <span className="text-[hsl(var(--brand-playful))]">best...</span>
        </h1>
        
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Accordion */}
          <div className="space-y-4">
            {CATEGORIES.map((cat) => {
              const isOpen = openCategory === cat.id
              return (
                <div
                  key={cat.id}
                  className="bg-white/5 border border-white/10 rounded-lg"
                >
                  <button
                    onClick={() =>
                      setOpenCategory(isOpen ? null : cat.id)
                    }
                    className="w-full px-4 py-3 flex justify-between items-center text-lg font-semibold text-white"
                  >
                    {cat.label}
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[hsl(var(--brand-playful))]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[hsl(var(--brand-playful))]" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 space-y-2">
                      {cat.reviews.map((r, i) => (
                        <p key={i} className="text-white/80 text-sm leading-relaxed">
                          {r.quote} <br />
                          <span className="block mt-1 font-medium text-white/90">
                            {r.author}
                          </span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right: Scrolling map‑style quotes */}
          <div className="lg:col-span-2 overflow-y-auto space-y-8 h-[60vh] pr-4">
            {CATEGORIES.flatMap((cat) => cat.reviews).map((r, i) => (
              <div
                key={i}
                className="flex bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                {/* Quote bubble */}
                <div className="flex-1 p-6 text-white/80">
                  <p className="italic mb-4">&ldquo;{r.quote}&rdquo;</p>
                  <p className="font-medium text-white/90">{r.author}</p>
                </div>
                {/* Simple map placeholder */}
                {/* <div className="w-32 h-32 relative">
                  <Image
                    src={`/images/maps/${r.region}.png`}
                    alt={r.region}
                    fill
                    className="object-cover"
                    placeholder="empty"
                  />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
