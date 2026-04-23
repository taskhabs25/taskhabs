"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/app/components/ui/card"
import {
  Mail,
  Users,
  ClipboardList,
  Timer,
  CheckCircle2,
  Wallet,
  Gift,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

/* ------------------------------------------------------------------
   Steps Data (original 3 + 4 new ones you noted in comments)
   NOTE: image paths assume files live in /public/images/...
   ------------------------------------------------------------------ */
const steps = [
  {
    icon: Mail,
    title: "Join the Waitlist",
    description:
      "Enter your email at imeer.com.au to secure your spot. You will be the first to know when iMEER launches on iOS and Android.",
    image: "/images/Login.png",
  },
  {
    icon: Users,
    title: "Set Up Your Family",
    description:
      "Add each child's profile — name, age, and avatar. Your whole family is set up in under 5 minutes",
    image: "/images/screen-2.png",
  },
  {
    icon: ClipboardList,
    title: "Assign Tasks",
    description:
      "Create tasks for each child — chores, homework, habits, and life skills. Set the MeerCoin reward, due time, and whether it repeats daily or weekly.",
    image: "/images/create-task.png",
  },
  {
    icon: Timer,
    title: "Children Complete & Earn",
    description:
      "Children see their task list on their own device. The countdown timer keeps them focused. When done, they upload a photo and mark it complete — earning MeerCoins instantly.",
    image: "/images/screen-4.png",
  },
  {
    icon: CheckCircle2,
    title: "You Review & Approve",
    description:
      "You review the photo proof and approve the task. MeerCoins are only awarded after your approval — you stay in control at every step.",
    image: "/images/screen-5.png",
  },
  {
    icon: Wallet,
    title: "Redeem Rewards",
    description:
      "Children browse the Rewards Shop and request what they want — real money, screen time, outings, ice cream treats, or savings toward something bigger. You approve every redemption.",
    image: "/images/screen-6.png",
  },
  {
    icon: Gift,
    title: "Invite Your Village",
    description:
      "Invite grandparents, aunties, uncles and older siblings to your Guardian Circle. They contribute MeerCoins and send encouragement. Your village is complete.",
    image: "/images/screen-7.png",
  },
]

/* keep in sync w/ CSS animation length */
const ANIM_MS = 600

export default function HowItWorks() {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [dir, setDir] = useState<"fwd" | "back">("fwd")

  /* clear prev step after animation completes */
  useEffect(() => {
    if (prevIndex === null) return
    const t = setTimeout(() => setPrevIndex(null), ANIM_MS)
    return () => clearTimeout(t)
  }, [prevIndex])

  const total = steps.length

  function goTo(next: number) {
    if (next === index) return
    setPrevIndex(index)
    setDir(next > index ? "fwd" : "back")
    setIndex((next + total) % total)
  }

  const goNext = () => goTo((index + 1) % total)
  const goPrev = () => goTo((index - 1 + total) % total)

  const currentStep = steps[index]
  const prevStep = prevIndex !== null ? steps[prevIndex] : null

  /* animation class names */
  const enterClass =
    dir === "fwd" ? "hiw-enter-from-right" : "hiw-enter-from-left"
  const exitClass =
    dir === "fwd" ? "hiw-exit-to-left" : "hiw-exit-to-right"

  return (
    <section
      id="how-it-works"
      // className="scroll-header-offset py-16 sm:py-24 bg-gradient-to-b from-[#1a1a2e] via-[#0f3460]/60 to-[#000000]"
      className="scroll-header-offset relative py-16 sm:py-24 section-dark-bg"
    >
      <div className="w-full px-[10%] max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            How <span className="text-[hsl(var(--brand-playful))]">IMEER</span> Works
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Get started in the following steps and transform your family&apos;s daily routine.
          </p>
        </div>

        {/* Slider Stage */}
        <div className="relative hiw-stage">
          {/* Prev Arrow (desktop) */}
          <button
            aria-label="Previous step"
            onClick={goPrev}
            className="hidden sm:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm items-center justify-center shadow-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow (desktop) */}
          <button
            aria-label="Next step"
            onClick={goNext}
            className="hidden sm:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm items-center justify-center shadow-lg transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Outgoing step (animates out) */}
          {prevStep && (
            <div className={`hiw-step-anim ${exitClass}`}>
              {/* <StepContent step={prevStep} stepNumber={prevIndex! + 1} /> */}
              <StepContent
                step={prevStep}
                stepNumber={prevIndex! + 1}
                isWaitlistCard={prevStep.title === "Join the Waitlist"}
              />
            </div>
          )}

          {/* Current step (animates in if transitioning) */}
          <div className={prevStep ? enterClass : ""}>
            {/* <StepContent step={currentStep} stepNumber={index + 1} /> */}
            <StepContent
              step={currentStep}
              stepNumber={index + 1}
              isWaitlistCard={currentStep.title === "Join the Waitlist"}
            />
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="mt-10 flex sm:hidden items-center justify-center gap-6">
          <button
            aria-label="Previous step"
            onClick={goPrev}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium backdrop-blur-sm transition-colors"
          >
            Prev
          </button>
          <span className="text-white/70 text-sm">
            Step {index + 1} of {total}
          </span>
          <button
            aria-label="Next step"
            onClick={goNext}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium backdrop-blur-sm transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Presentational Step (reuses your markup pattern)
   ------------------------------------------------------------------ */
function StepContent({
  step,
  stepNumber,
  isWaitlistCard = false,
}: {
  step: {
    icon: any
    title: string
    description: string
    image: string
  }
  stepNumber: number
  isWaitlistCard?: boolean

}) {
  const Icon = step.icon
  return (
    <div className="text-center">
      {/* Step Number */}
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
        {stepNumber}
      </div>

      {/* Phone Mockup */}
      <div className="mb-8 flex justify-center">
        <div className="bg-gray-900 rounded-[2rem] p-2 shadow-xl max-w-[200px]">
          <div className="bg-white rounded-[1.5rem] overflow-hidden">
            <Image
              src={step.image || "/placeholder.svg"}
              alt={step.title}
              width={200}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Content Card */}
      <Card
        onClick={
          isWaitlistCard
            ? () =>
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
            : undefined
        }
        className={`bg-white/5 border border-white/10 shadow-lg rounded-2xl min-h-[160px] flex transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 ${
          isWaitlistCard
            ? "cursor-pointer hover:shadow-2xl"
            : "hover:shadow-xl"
        }`}
      >
        <CardContent className="p-6 flex flex-col justify-center w-full">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
          <p className="text-white/80 leading-relaxed">{step.description}</p>
        </CardContent>
      </Card>
    </div>
  )
}
