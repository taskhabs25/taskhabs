import Image from "next/image"
import { Card, CardContent } from "@/app/components/ui/card"
import { Download, UserPlus, Trophy } from "lucide-react"

const steps = [
  {
    icon: Download,
    title: "Download & Setup",
    description: "Get the app from apple app store or google play store and create your family profile in minutes.",
    image: "/images/onboarding.png",
  },
  {
    icon: UserPlus,
    title: "Add Tasks & Rewards",
    description: "Create custom tasks and set up exciting rewards that motivate your kids.",
    image: "/images/create-task.png",
  },
  {
    icon: Trophy,
    title: "Track & Celebrate",
    description: "Track progress and rewards, and celebrate achievements together as a family.",
    image: "/images/rewards.png",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="w-full px-[10%]">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-blue-600">TASK HABS</span> Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in three simple steps and transform your family's daily routine.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number */}
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
                {index + 1}
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
              <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 min-h-[160px] flex">
                <CardContent className="p-6 flex flex-col justify-center w-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
