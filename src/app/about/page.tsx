import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/app/components/ui/card"
import { Logo } from "@/app/components/logo" 
import {
  Users,
  Heart,
  Target,
  Shield,
  Sparkles,
  Lightbulb,
  AlertCircle,
  Search,
  CheckCircle,
  TrendingUp,
  Star,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - TASK HABS",
  description:
    "Learn about our mission to help families build healthy habits and create positive routines together.",
}

/* Values */
const values = [
  {
    icon: Heart,
    title: "Family First",
    description:
      "We believe strong families are built on positive routines and shared achievements.",
  },
  {
    icon: Shield,
    title: "Child Safety",
    description:
      "Your child's safety and privacy are our top priorities in everything we build.",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description:
      "We help families set meaningful goals and celebrate every milestone along the way.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building a supportive community of parents helping each other succeed.",
  },
]

/* Story steps */
const storySteps = [
  {
    icon: AlertCircle,
    title: "The Problem",
    content:
      "TASK HABS started when our founder, a parent of three, realized that traditional chore charts weren't working for modern families. Kids were losing interest, parents were frustrated, and the whole system felt more like punishment than positive reinforcement.",
  },
  {
    icon: Search,
    title: "The Research",
    content:
      "After months of research and conversations with child psychologists, educators, and hundreds of parents, we discovered that children thrive when they have clear goals, immediate feedback, and meaningful rewards that they help choose.",
  },
  {
    icon: CheckCircle,
    title: "The Solution",
    content:
      "We built TASK HABS to be more than just a digital chore chart. It's a comprehensive system that helps families communicate better, celebrate achievements together, and build habits that contribute to long-term success and happiness.",
  },
  {
    icon: TrendingUp,
    title: "The Impact",
    content:
      "Today, thousands of families use TASK HABS to create more organized, positive, and connected home environments. We're proud to be part of their journey and committed to continuously improving our platform based on their feedback and needs.",
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="scroll-header-offset hero-gradient py-16 sm:py-24">
        <div className="w-full px-[10%]">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-[hsl(var(--brand-playful))]">TaskHabs</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We&apos;re on a mission to help families build healthy habits and create
              positive routines that bring everyone closer together.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 ">
  <div className="w-full px-[10%]">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <Card className="bg-white/5 border border-white/10 text-white shadow-lg rounded-2xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2">
        <CardContent className="p-8 text-white [&_p]:text-white transition-none">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--brand-pro))] to-[hsl(var(--brand-playful))] rounded-xl flex items-center justify-center mr-4">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Our <span className="text-[hsl(var(--brand-playful))]">Mission</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              TASK HABS was born from the simple belief that every child deserves to
              feel accomplished and every parent deserves tools that make parenting
              more joyful.
            </p>
            <p>
              We&apos;ve seen how traditional reward charts and chore systems often fall
              short. That&apos;s why we created a digital solution that grows with your
              family, adapts to your needs, and makes building good habits feel like a
              game rather than a chore.
            </p>
            <p>
              Our app isn&apos;t just about getting kids to do their tasks—it&apos;s about
              building confidence, teaching responsibility, and creating positive family
              dynamics that last a lifetime.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Mission Screenshot w/ hover pop */}
      <div className="flex justify-center">
        <div className="relative group">
          <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl transition-transform duration-300 ease-out group-hover:scale-[1.01] group-hover:-translate-y-2">
            <div className="bg-white rounded-[2rem] overflow-hidden">
              <Image
                src="/images/home-parent.png"
                alt="TaskHabs Family Dashboard"
                width={300}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</section>


      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0f3460] via-[#1a1a2e] to-[#000000]">
        <div className="w-full px-[10%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="text-[hsl(var(--brand-playful))]">Values</span>
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
              These core values guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white/5 border border-white/10 shadow-lg rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--brand-pro))] to-[hsl(var(--brand-playful))] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-white/80 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 section-dark-bg">
        <div className="w-full px-[10%]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--brand-pro))] to-[hsl(var(--brand-playful))] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="text-[hsl(var(--brand-playful))]">Story</span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                From frustration to innovation — here&apos;s how TaskHabs came to life.
              </p>
            </div>

            <div className="grid gap-8">
              {storySteps.map((step, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border border-white/10 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div className="relative flex items-start">
                      <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--brand-pro))] to-[hsl(var(--brand-playful))] rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg z-10">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                        <p className="text-lg text-white/80 leading-relaxed">
                          {step.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quote Section */}
            <div className="mt-16">
              <Card className="relative overflow-hidden bg-white/5 border border-white/10 shadow-xl rounded-2xl text-white text-center">
                {/* subtle brand glow overlay */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-pro))/0.25] via-transparent to-[hsl(var(--brand-playful))/0.25]" />
                <CardContent className="relative p-8">
                  {/* <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-gradient-to-br from-[hsl(var(--brand-pro))] to-[hsl(var(--brand-playful))] flex items-center justify-center">
                    {/* <Star className="w-6 h-6 text-white" /> *}
                  </div> */}
                  <Logo className="w-12 h-12 mx-auto mb-6"/>
                  <blockquote className="text-xl sm:text-2xl font-medium mb-6 italic">
                    &quot;Every family deserves tools that bring them closer together, not drive them apart. That&apos;s the heart of everything we build at TaskHabs.&quot;
                  </blockquote>
                  <p className="text-white/80">— TaskHabs Founding Team</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
