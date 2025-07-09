"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, ArrowRight } from "lucide-react"
import Link from "next/link"

export function AnimatedCTASection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate random particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 2,
  }))

  return (
    <section className="py-24 px-4 relative overflow-hidden min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Particle Background */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Support Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-slate-300 text-sm">Supporting Nodon?</span>
              <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
            </div>
            <motion.a
              href="coff.ee/nodon"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 shadow-md"
            >
              <span>☕</span>
              <span>Buy me a coffee</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Main Nodon Text with Bottom Branding */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative mb-16"
          >
            {/* Main Nodon Text */}
            <div className="relative">
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight mb-4">
                Ready to Build Something
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                  Amazing?
                </span>
              </h1>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-emerald-400/20 leading-none tracking-tight blur-sm">
                Nodon
              </div>
            </div>

            {/* Bottom Branding with Fade Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="relative mt-4 md:mt-8"
            >
              {/* Branding Text */}
              <div className="relative">
                <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium tracking-wide">
                  Start your next Node.js project with Nodon
                </p>

                {/* Fade Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Additional fade from bottom */}
              <div className="absolute -bottom-4 left-0 right-0 h-16 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-3 text-lg shadow-lg shadow-emerald-500/25"
              >
                <Link href="/guide" className="flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white font-semibold px-8 py-3 text-lg bg-transparent"
              >
                <Link href="https://github.com/nodon/nodon" className="flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex items-center justify-center space-x-8 mt-12 text-sm text-slate-400"
          >
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="flex items-center space-x-2"
            >
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
              <span className="text-slate-300">2.8k+ Stars</span>
            </motion.div>
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              className="flex items-center space-x-2"
            >
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <span className="text-slate-300">45k+ Downloads</span>
            </motion.div>
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
              className="flex items-center space-x-2"
            >
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              <span className="text-slate-300">156+ Contributors</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
