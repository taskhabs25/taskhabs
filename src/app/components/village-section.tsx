"use client"

export default function VillageSection() {
  const villageCards = [
    {
      emoji: "👨‍👩‍👧",
      title: "Parents & Guardians",
      description:
        "The heart of iMEER. Assign tasks, set coin values, review photo proof, approve payouts, and watch your children build real responsibility day by day.",
    },
    {
      emoji: "👵👴",
      title: "Grandparents",
      description:
        "No app install needed. Grandparents receive a simple link, tap it, and send MeerCoins to their grandchild with a personal message. Distance is no barrier to being part of the village.",
    },
    {
      emoji: "👩‍🦰👨",
      title: "Aunties & Uncles",
      description:
        "Extended family members can contribute to the reward pool, celebrate achievements, and send bonus coins for birthdays, school reports, or just because.",
    },
    {
      emoji: "🧑‍🎓",
      title: "Older Siblings",
      description:
        "Big brothers and sisters become role models. They can encourage younger siblings, set challenges, and demonstrate that effort and reward go hand in hand.",
    },
    {
      emoji: "🌍",
      title: "Family Anywhere",
      description:
        "Family overseas? No problem. The Guardian Circle works across borders. A grandmother in another country can be just as present in a child's reward journey as one living next door.",
    },
    {
      emoji: "👦",
      title: "The Child",
      description:
        "At the centre of everything. Every coin earned, every message from family — it tells the child one thing: your effort matters and your village believes in you.",
    },
  ]

  return (
    <section className="relative overflow-hidden hero-gradient text-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            It takes a village to{" "}
            <span className="bg-gradient-to-r from-[#FDE68A] to-[#F59E0B] bg-clip-text text-transparent">
              raise a child
            </span>
            . Build yours with iMEER.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
            iMEER brings your whole family together — everyone plays a role in
            rewarding your child&apos;s growth.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-300/10 px-5 py-2 text-sm sm:text-base font-semibold text-[#FDE68A] backdrop-blur-sm">
              Create Your Village · Raise Your Child Together 🏘️
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {villageCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
            >
              <div className="mb-4 text-3xl">{card.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="rounded-full px-8 py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-orange-400 via-pink-500 to-pink-600 shadow-[0_10px_30px_rgba(236,72,153,0.4)] hover:scale-[1.02] hover:brightness-110 transition-all duration-300"
          >
            Build Your Village Today 🏘️
          </button>
        </div>
      </div>
    </section>
  )
}