import { Card, CardContent } from "@/app/components/ui/card"
import {
  Monitor,
  Wallet,
  Clock,
  Bell,
  Users,
  Camera,
  Smartphone,
  Award,
} from "lucide-react"

/* Your original feature data */
const features = [
  {
    icon: Monitor,
    title: "Screen Time Control",
    description:
      "Monitor and manage your child's device usage with smart controls and healthy limits.",
  },
  {
    icon: Wallet,
    title: "MeerCoin Wallet",
    description:
      "Children earn MeerCoins for every completed task. Their wallet shows their real-time balance, earning history, and dollar value — turning pocket money into a genuine learning moment.",
  },
  {
    icon: Clock,
    title: "Task Scheduling",
    description:
      "Set up daily, weekly, and monthly tasks with flexible scheduling options.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Gentle reminders and notifications to keep everyone on track without being pushy.",
  },
  {
    icon: Users,
    title: "Family Dashboard",
    description:
      "Track progress for multiple children with a comprehensive family overview.",
  },
  {
    icon: Camera,
    title: "Photo Proof",
    description:
      "Children upload a photo when they complete a task. You review it and approve before MeerCoins are awarded. Accountability is built into every single task.",
  },
  {
    icon: Users,
    title: "Guardian Circle",
    description:
      "Grandparents, aunties, uncles and older siblings join your Guardian Circle and contribute MeerCoins with a personal message — no app install required for extended family.",
  },
  {
    icon: Clock,
    title: "Countdown Timer",
    description:
      "Every task has a live countdown timer that shifts from green to orange to red as time runs out — keeping children focused and on track without a single reminder from you.",
  },
]

/* Color cycle for icon tiles (hero stat palette).
   If you prefer ALL blue like before, set this array to just one value:
   ["from-blue-500 to-blue-600"]
*/
const iconGradients = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-green-500 to-emerald-500",
  "from-orange-500 to-red-500",
]

export default function Features() {
  return (
    <section
      id="features"
      className="scroll-header-offset py-16 sm:py-24 bg-gradient-to-b from-[#0f3460] via-[#1a1a2e] to-[#000000]"
    >
      <div className="w-full px-[10%]">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need for{" "}
            <span className="text-[hsl(var(--brand-playful))]">
              Family Success
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to make parenting easier and help kids
            develop healthy habits that last a lifetime.
          </p>
        </div>

        {/* Feature Cards Grid (unchanged sizing) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const gradient = iconGradients[index % iconGradients.length]
            return (
              <Card
                key={index}
                className="border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl transform hover:-translate-y-2 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}