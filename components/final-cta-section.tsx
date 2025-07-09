"use client"

import { Button } from "@/components/ui/button"
import { Heart, Coffee, Code, Sparkles, Star } from "lucide-react"
import { motion } from "framer-motion"

export function FinalCTASection() {
  return (
    <section className="py-24 px-4 bg-slate-900/20">
      <div className="container mx-auto max-w-[100%]">
        <div className="relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 rounded-3xl"></div>

          {/* Floating Hearts Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: "100%",
                  opacity: 0,
                }}
                animate={{
                  y: "-20%",
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 3,
                  ease: "easeOut",
                }}
              >
                <Heart className="w-4 h-4 text-pink-400/20" />
              </motion.div>
            ))}
          </div>

          <div className="relative p-12 text-center">
            {/* Header with animated elements */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Heart className="w-10 h-10 text-white" />
                </div>

                {/* Sparkle effects around the heart */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -bottom-2 -left-2"
                >
                  <Star className="w-5 h-5 text-pink-400" />
                </motion.div>
              </motion.div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Love Nodon?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Your support keeps our passion project alive! Help us continue building amazing tools that make
              developers' lives easier. Every contribution, big or small, makes a huge difference! 🚀
            </motion.p>

            {/* Buttons matching website style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://github.com/omprakash2929/Nodon" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all duration-300"
                  >
                    <Code className="w-5 h-5 mr-2" />
                    <span>Contribute</span>
                  </Button>
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://buymeacoffee.com/nodon" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <Coffee className="w-5 h-5 mr-2" />
                    <span>Buy me a coffee</span>
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Stats or appreciation section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">2.8k+</div>
                <div className="text-slate-500 text-sm">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-300 mb-1">150+</div>
                <div className="text-slate-500 text-sm">Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-300 mb-1">45k+</div>
                <div className="text-slate-500 text-sm">Downloads</div>
              </div>
            </motion.div>

            {/* Thank you message */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-full px-6 py-3">
                <Heart className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-medium">Made with love by the community</span>
                <Heart className="w-4 h-4 text-emerald-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
