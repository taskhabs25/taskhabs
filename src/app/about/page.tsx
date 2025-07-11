import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/app/components/ui/card"
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
  description: "Learn about our mission to help families build healthy habits and create positive routines together.",
}

const values = [
  {
    icon: Heart,
    title: "Family First",
    description: "We believe strong families are built on positive routines and shared achievements.",
  },
  {
    icon: Shield,
    title: "Child Safety",
    description: "Your child's safety and privacy are our top priorities in everything we build.",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "We help families set meaningful goals and celebrate every milestone along the way.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive community of parents helping each other succeed.",
  },
]

const storySteps = [
  {
    icon: AlertCircle,
    title: "The Problem",
    content:
      "TASK HABS started when our founder, a parent of three, realized that traditional chore charts weren't working for modern families. Kids were losing interest, parents were frustrated, and the whole system felt more like punishment than positive reinforcement.",
    bgColor: "bg-red-50",
    iconBg: "bg-red-500",
  },
  {
    icon: Search,
    title: "The Research",
    content:
      "After months of research and conversations with child psychologists, educators, and hundreds of parents, we discovered that children thrive when they have clear goals, immediate feedback, and meaningful rewards that they help choose.",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-500",
  },
  {
    icon: CheckCircle,
    title: "The Solution",
    content:
      "We built TASK HABS to be more than just a digital chore chart. It's a comprehensive system that helps families communicate better, celebrate achievements together, and build habits that contribute to long-term success and happiness.",
    bgColor: "bg-green-50",
    iconBg: "bg-green-500",
  },
  {
    icon: TrendingUp,
    title: "The Impact",
    content:
      "Today, thousands of families use TASK HABS to create more organized, positive, and connected home environments. We're proud to be part of their journey and committed to continuously improving our platform based on their feedback and needs.",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-500",
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 sm:py-24">
        <div className="w-full px-[10%]">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">TASK HABS</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to help families build healthy habits and create positive routines that bring everyone
              closer together.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="w-full px-[10%]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    TASK HABS was born from the simple belief that every child deserves to feel accomplished and every
                    parent deserves tools that make parenting more joyful.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We've seen how traditional reward charts and chore systems often fall short. That's why we created a
                    digital solution that grows with your family, adapts to your needs, and makes building good habits
                    feel like a game rather than a chore.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our app isn't just about getting kids to do their tasks—it's about building confidence, teaching
                    responsibility, and creating positive family dynamics that last a lifetime.
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/home.png"
                    alt="TASK HABS Family Dashboard"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="w-full px-[10%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="w-full px-[10%]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From frustration to innovation - here's how TASK HABS came to life.
              </p>
            </div>

            <div className="grid gap-8">
              {storySteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {/* {index < storySteps.length - 1 && (
                    <div className="absolute left-1/2 top-20 w-0.5 h-24 bg-gray-200 -translate-x-1/2 z-0 hidden md:block"></div>
                  )} */}
                  {/* Icon and Card */}
                  <Card
                    className={`border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${step.bgColor}`}
                  >
                    <CardContent className="p-8">
                      <div className="relative flex items-start">
                        <div
                          className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg z-10`}
                        >
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                          <p className="text-lg text-gray-700 leading-relaxed">{step.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Quote Section */}
            <div className="mt-16">
              <Card className="border-0 shadow-xl rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <CardContent className="p-8 text-center">
                  {/* <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-4 h-4 text-blue-600 fill-current" />
                  </div> */}
                  <blockquote className="text-xl sm:text-2xl font-medium mb-6 italic">
                    "Every family deserves tools that bring them closer together, not drive them apart. That's the heart
                    of everything we build at TASK HABS."
                  </blockquote>
                  <p className="text-blue-200">— TASK HABS Founding Team</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
