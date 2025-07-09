"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown, HelpCircle } from "lucide-react"
import { MagicCard } from "@/components/magicui/magic-card"

const faqs = [
  {
    question: "Do I need prior setup or configuration?",
    answer:
      "No! Nodon handles all the initial setup for you. Just install the CLI tool and you're ready to create projects. No need to configure build tools, linters, or testing frameworks manually.",
  },
  {
    question: "Is Nodon beginner-friendly?",
    answer:
      "Nodon is designed with beginners in mind. It provides sensible defaults, clear documentation, and follows Node.js best practices. You can start building immediately without deep knowledge of complex configurations.",
  },
  {
    question: "Can I use my custom templates?",
    answer:
      "Yes! While Nodon comes with curated templates, you can create and use your own custom templates. You can also modify the generated projects to fit your specific needs and save them as templates for future use.",
  },
  {
    question: "What Node.js versions are supported?",
    answer:
      "Nodon supports Node.js 16.x and above. We recommend using the latest LTS version for the best experience and security updates.",
  },
  {
    question: "Can I modify the generated project structure?",
    answer:
      "Of course! Once generated, the project is entirely yours. You can modify, add, or remove any files and configurations. Nodon just gives you a solid starting point with best practices.",
  },
  {
    question: "Is there TypeScript support?",
    answer:
      "Yes! Nodon has excellent TypeScript support with dedicated templates and configurations. You can choose TypeScript for any template, and it comes with proper tsconfig, type definitions, and build scripts.",
  },
  {
    question: "How do I deploy my Nodon project?",
    answer:
      "Nodon projects come with deployment configurations for popular platforms like Vercel, Netlify, and Docker. Each template includes deployment scripts and documentation to get you started quickly.",
  },
  {
    question: "Is Nodon free to use?",
    answer:
      "Yes! Nodon is completely free and open-source. You can use it for personal and commercial projects without any restrictions. We believe in making Node.js development accessible to everyone.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-4 bg-slate-900/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about Nodon and how to get started
          </p>
        </div>

        <MagicCard className="p-2">
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "border rounded-xl transition-all duration-300",
                  openIndex === index
                    ? "border-emerald-500/30 bg-slate-800/50"
                    : "border-slate-700/50 bg-slate-900/30 hover:bg-slate-800/30",
                )}
              >
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-white pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-colors",
                        openIndex === index ? "text-emerald-400" : "text-slate-400",
                      )}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-slate-300 leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </MagicCard>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.com/invite/32QKxVcG"
              className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Join our community discussions</span>
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                →
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
