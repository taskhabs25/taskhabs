import type { Metadata } from "next"
import Link from "next/link"
import { Check, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"

export const metadata: Metadata = {
  title: "Pricing - iMEER",
  description:
    "Simple, fair pricing for every family. Start with a 14-day free trial and choose the iMEER plan that fits your home.",
}

const monthlyFeatures = [
  "Full family access",
  "Parent dashboard",
  "Child task & reward system",
  "Shared family participation",
  "Progress tracking",
  "Cancel anytime",
  "14-day free trial",
]

const annualFeatures = [
  "All Monthly features included",
  "Better value vs monthly plan",
  "Full family access",
  "14-day free trial",
]

function PlanCard({
  name,
  price,
  period,
  description,
  features,
  ctaLabel,
  highlighted = false,
}: {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  ctaLabel: string
  highlighted?: boolean
}) {
  return (
    <Card
      className={[
        "relative h-full overflow-hidden rounded-3xl border text-white shadow-2xl",
        "bg-white/5 backdrop-blur-xl",
        highlighted
          ? "border-[hsl(var(--brand-playful))]/60 ring-1 ring-[hsl(var(--brand-playful))]/40"
          : "border-white/10",
      ].join(" ")}
    >
      {highlighted && (
        <div className="absolute right-5 top-5 rounded-full bg-[hsl(var(--brand-playful))] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-lg">
          Best Value
        </div>
      )}

      <CardContent className="flex h-full flex-col p-8 pt-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--brand-playful))]">
            {name}
          </p>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-4xl font-bold sm:text-5xl">{price}</span>
            <span className="pb-1 text-sm text-white/70">AUD / {period}</span>
          </div>
          <p className="mt-4 text-base leading-relaxed text-white/75">{description}</p>
        </div>

        <ul className="mb-8 space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-white/85">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-pro))]/20 text-[hsl(var(--brand-pro))]">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Button
            asChild
            size="lg"
            className={[
              "w-full rounded-xl px-6 text-sm font-semibold",
              highlighted
                ? "bg-[hsl(var(--brand-playful))] text-black hover:bg-[hsl(var(--brand-playful))]/90"
                : "bg-[hsl(var(--brand-pro))] text-white hover:bg-[hsl(var(--brand-pro))]/90",
            ].join(" ")}
          >
            <Link href="/#hero">{ctaLabel}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="hero-gradient relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.2),_transparent_34%)]" />

        <div className="relative w-full px-[10%]">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[hsl(var(--brand-playful))]" />
              Premium pricing for modern families
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Simple, Fair <span className="text-[hsl(var(--brand-playful))]">Pricing</span> for Every Family
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Choose the plan that works best for your family. Start with a free 14-day trial and
              experience how iMEER helps build habits, responsibility, and motivation at home.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="w-full px-[10%]">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <PlanCard
              name="Monthly"
              price="$4.99"
              period="month"
              description="A flexible option for families who want to get started with full access and no long-term commitment."
              features={monthlyFeatures}
              ctaLabel="Start Free Trial"
            />

            <PlanCard
              name="Annual"
              price="$49.99"
              period="year"
              description="Our recommended plan for families who want the best value and a simple long-term routine builder."
              features={annualFeatures}
              ctaLabel="Get Started"
              highlighted
            />
          </div>

          <div className="mx-auto mt-8 max-w-6xl rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm text-white/75 backdrop-blur-md sm:text-base">
            No lock-in contracts. Cancel anytime.
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="w-full px-[10%]">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.03] p-8 text-center backdrop-blur-md sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--brand-playful))]">
              Our Brand Message
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              It takes a village to raise a child.
            </h2>
            <p className="mt-4 text-lg text-white/75 sm:text-xl">Create your village with iMEER.</p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl bg-[hsl(var(--brand-playful))] px-8 text-black hover:bg-[hsl(var(--brand-playful))]/90">
                <Link href="/#hero">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-white/20 bg-white/5 px-8 text-white hover:bg-white/10 hover:text-white">
                <Link href="/contact">Ask a Question</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
