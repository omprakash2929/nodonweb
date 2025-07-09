"use client"

import { motion } from "framer-motion"
import { Download, Layers, Rocket, ArrowRight, ArrowDown } from "lucide-react"
import { MagicCard } from "@/components/magicui/magic-card"

const steps = [
  {
    number: "01",
    title: "Install Nodon",
    description: "Get started with a single command. No complex setup required.",
    icon: Download,
    command: "npx create-nodon@latest",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "Select a Template",
    description: "Choose from our curated Next.js templates or create your own custom setup.",
    icon: Layers,
    command: "nodon create my-app --template nextjs",
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "03",
    title: "Start Building Instantly",
    description: "Your Next.js project is ready with best practices, testing, and deployment configs.",
    icon: Rocket,
    command: "cd my-app && npm run dev",
    color: "from-emerald-500 to-emerald-600",
  },
]

export function HowItWorks() {
  return (
    <section className="py-12 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Get from zero to production-ready in three simple steps
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <MagicCard className="text-center p-6">
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-slate-300 text-sm font-bold">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed text-sm md:text-base">{step.description}</p>

                  <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-xs md:text-sm overflow-x-auto">
                    <div className="flex items-center space-x-2 whitespace-nowrap">
                      <span className="text-emerald-400">$</span>
                      <span className="text-slate-300">{step.command}</span>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>

              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-6">
                  <div className="w-8 h-8 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-700/50">
                    <ArrowDown className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <MagicCard className="text-center p-6 lg:p-8 h-full">
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-slate-300 text-sm font-bold">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{step.description}</p>

                <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent flex space-x-2 items-center ">
                    <span className="text-emerald-400">$</span>
                    <span className="text-slate-300">{step.command}</span>
                    </div>
                  </div>
                </div>
              </MagicCard>

              {/* Desktop arrow indicator between cards */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-700/50">
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-full px-4 md:px-6 py-3">
            <Rocket className="w-4 md:w-5 h-4 md:h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-sm md:text-base">
              From idea to deployment in minutes, not days
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
