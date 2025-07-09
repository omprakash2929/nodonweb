"use client"

import { useState } from "react"
import { Check, X, Zap, ChevronDown, ChevronUp } from "lucide-react"
import { MagicCard } from "@/components/magicui/magic-card"
import { motion } from "framer-motion"

const comparisonData = [
  {
    feature: "Project Ready in",
    nodon: { value: "Seconds", icon: "check", highlight: true },
    manual: { value: "Hours", icon: "x", highlight: false },
  },
  {
    feature: "Built-in Security",
    nodon: { value: "✅", icon: "check", highlight: true },
    manual: { value: "🚫", icon: "x", highlight: false },
  },
  {
    feature: "Best Practices by Default",
    nodon: { value: "✅", icon: "check", highlight: true },
    manual: { value: "❌", icon: "x", highlight: false },
  },
  {
    feature: "TypeScript Support",
    nodon: { value: "✅", icon: "check", highlight: true },
    manual: { value: "Depends", icon: "question", highlight: false },
  },
  {
    feature: "Testing Setup",
    nodon: { value: "✅", icon: "check", highlight: true },
    manual: { value: "Manual", icon: "x", highlight: false },
  },
  {
    feature: "Next.js Integration",
    nodon: { value: "✅", icon: "check", highlight: true },
    manual: { value: "DIY", icon: "x", highlight: false },
  },
  {
    feature: "API Routes",
    nodon: { value: "✅", icon: "check", highlight: true },
    manual: { value: "❌", icon: "x", highlight: false },
  },
  {
    feature: "Documentation",
    nodon: { value: "Auto-generated", icon: "check", highlight: true },
    manual: { value: "Write yourself", icon: "x", highlight: false },
  },
]

export function ComparisonSection() {
  const [showAll, setShowAll] = useState(false)
  const visibleItems = showAll ? comparisonData : comparisonData.slice(0, 4)

  return (
    <section className="py-12 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Nodon VS Others Comparison</h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            See how Nodon stacks up against traditional manual setup and other tools
          </p>
        </div>

        {/* Mobile Card Layout */}
        <div className="md:hidden space-y-4 mb-6">
          {visibleItems.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <MagicCard className="p-4">
                <h3 className="text-white font-semibold mb-4 text-center">{row.feature}</h3>

                <div className="grid grid-cols-2 gap-4">
                  {/* Nodon Column */}
                  <div className="text-center p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-md flex items-center justify-center">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white font-semibold text-sm">Nodon</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      {row.nodon.icon === "check" && <Check className="w-4 h-4 text-emerald-400" />}
                      {row.nodon.icon === "x" && <X className="w-4 h-4 text-red-400" />}
                      <span
                        className={`text-sm ${row.nodon.highlight ? "text-emerald-400 font-semibold" : "text-slate-300"}`}
                      >
                        {row.nodon.value}
                      </span>
                    </div>
                  </div>

                  {/* Manual Column */}
                  <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-slate-400 font-semibold text-sm">Manual Setup</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      {row.manual.icon === "check" && <Check className="w-4 h-4 text-emerald-400" />}
                      {row.manual.icon === "x" && <X className="w-4 h-4 text-red-400" />}
                      <span className="text-slate-400 text-sm">{row.manual.value}</span>
                    </div>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}

          {/* Show More/Less Button for Mobile */}
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center space-x-2 mx-auto px-4 py-2 bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 rounded-lg transition-colors text-slate-300 hover:text-white"
            >
              <span>{showAll ? "Show Less" : "Show More"}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Desktop Table Layout */}
        <div className="hidden md:block">
          <MagicCard className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-4 lg:p-6 text-white font-semibold text-base lg:text-lg">Feature</th>
                    <th className="text-center p-4 lg:p-6 text-white font-semibold text-base lg:text-lg">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        <span>Nodon</span>
                      </div>
                    </th>
                    <th className="text-center p-4 lg:p-6 text-slate-400 font-semibold text-base lg:text-lg">
                      Manual Setup
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors"
                    >
                      <td className="p-4 lg:p-6 text-slate-300 font-medium text-sm lg:text-base">{row.feature}</td>
                      <td className="p-4 lg:p-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          {row.nodon.icon === "check" && <Check className="w-5 h-5 text-emerald-400" />}
                          {row.nodon.icon === "x" && <X className="w-5 h-5 text-red-400" />}
                          <span
                            className={`text-sm lg:text-base ${row.nodon.highlight ? "text-emerald-400 font-semibold" : "text-slate-300"}`}
                          >
                            {row.nodon.value}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 lg:p-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          {row.manual.icon === "check" && <Check className="w-5 h-5 text-emerald-400" />}
                          {row.manual.icon === "x" && <X className="w-5 h-5 text-red-400" />}
                          <span className="text-slate-400 text-sm lg:text-base">{row.manual.value}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </MagicCard>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-full px-4 md:px-6 py-3">
            <Zap className="w-4 md:w-5 h-4 md:h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-sm md:text-base">
              Save 90% of your setup time with Nodon
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
