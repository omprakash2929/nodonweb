"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ArrowRight, TerminalIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion,Variants  } from "framer-motion"
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern"
import { ScriptCopyButton } from "@/components/magicui/script-copy-button"
import { Terminal } from "@/components/magicui/terminal"
import { cn } from "@/lib/utils"
import TerminalDemo from "./TerminalDemo"
import { ShinyButton } from "./magicui/shiny-button"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

 const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};


  

  return (
    <section className="relative py-32 md:py-40 px-4 overflow-hidden">
      {/* Interactive Grid Pattern Background */}
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-40",
        )}
        width={60}
        height={60}
        numSquares={30}
        maxOpacity={0.9}
        duration={3}
      />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        {mounted ? (
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">
            <motion.div variants={item}>
              <Badge variant="secondary" className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                <TerminalIcon className="w-3 h-3 mr-1" />
                NodonConf 2025
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Node.js Starter Kit
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Supercharged
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Kickstart modern Node.js projects with battle-tested templates and zero configuration
            </motion.p>

            {/* Script Copy Button */}
            <motion.div variants={item} className="mb-8 w-full max-w-md mx-auto">
              <ScriptCopyButton command="npm create nodon@latest" />
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all duration-300"
              >
                <Link href="/guide" className="flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 hover:scale-105 transition-all duration-300"
              >
                <Link href="https://github.com/omprakash2929/Nodon" target="_blank" className="flex items-center space-x-2">
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </Link>
              </Button>
            </motion.div>

            {/* Simple Terminal */}
            <motion.div variants={item} className="w-full max-w-4xl mx-auto flex justify-center  text-start">
             <TerminalDemo />
            </motion.div>
          </motion.div>
        ) : (
          // Fallback content while mounting
          <div className="flex flex-col items-center">
            <Badge variant="secondary" className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              <TerminalIcon className="w-3 h-3 mr-1" />
              NodonConf 2025
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Node.js Project
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Bootstrap your Node.js apps in seconds — from basic scripts to advanced REST APIs & GraphQL servers.
            </p>

            <div className="mb-8 w-full max-w-md mx-auto">
              <ScriptCopyButton command="npm create nodon@latest" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/25"
              >
                <Link href="/guide" className="flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500"
              >
                <Link href="https://github.com/nodon/nodon" className="flex items-center space-x-2">
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
