import { Card, CardContent } from "@/app/components/ui/card"
import { Monitor, Gift, Clock, Bell, Users, Target, Smartphone, Award } from "lucide-react"

const features = [
  {
    icon: Monitor,
    title: "Screen Time Control",
    description: "Monitor and manage your child's device usage with smart controls and healthy limits.",
  },
  {
    icon: Gift,
    title: "Reward System",
    description: "Motivate kids with points and rewards for completing tasks and building good habits.",
  },
  {
    icon: Clock,
    title: "Task Scheduling",
    description: "Set up daily, weekly, and monthly tasks with flexible scheduling options.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Gentle reminders and notifications to keep everyone on track without being pushy.",
  },
  {
    icon: Users,
    title: "Family Dashboard",
    description: "Track progress for multiple children with a comprehensive family overview.",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set and achieve meaningful goals together as a family with visual progress tracking.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Works perfectly on all devices - phones, tablets, and computers.",
  },
  {
    icon: Award,
    title: "Achievement System",
    description: "Celebrate milestones and build confidence with badges and achievements.",
  },
]

export default function Features() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="w-full px-[10%]">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for <span className="text-blue-600">Family Success</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to make parenting easier and help kids develop healthy habits that last a
            lifetime.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl transform hover:-translate-y-2 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
