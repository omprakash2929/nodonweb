"use client"

import type React from "react"
import { forwardRef, useRef } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import { Terminal, Database, Cloud, Shield, Zap, Code } from "lucide-react"

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-lg",
          className,
        )}
      >
        {children}
      </div>
    )
  },
)

Circle.displayName = "Circle"

export function AnimatedBeamShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <section className="py-24 px-4 bg-slate-900/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Complete Development Ecosystem</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See how Nodon connects all the tools and services you need for modern Node.js development
          </p>
        </div>

        <div
          className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg bg-slate-950/50 border border-slate-800 p-10"
          ref={containerRef}
        >
          <div className="flex size-full max-w-lg max-h-[300px] items-stretch justify-between">
            <div className="flex flex-col justify-between">
              <Circle ref={div1Ref} className="bg-emerald-500 border-emerald-400">
                <Terminal className="text-white w-5 h-5" />
              </Circle>
              <Circle ref={div2Ref} className="bg-purple-500 border-purple-400">
                <Code className="text-white w-5 h-5" />
              </Circle>
              <Circle ref={div3Ref} className="bg-cyan-500 border-cyan-400">
                <Cloud className="text-white w-5 h-5" />
              </Circle>
            </div>

            <div className="flex items-center">
              <Circle ref={div4Ref} className="bg-yellow-500 border-yellow-400 size-16">
                <div className="text-white font-bold text-xl">N</div>
              </Circle>
            </div>

            <div className="flex flex-col justify-between">
              <Circle ref={div5Ref} className="bg-blue-500 border-blue-400">
                <Database className="text-white w-5 h-5" />
              </Circle>
              <Circle ref={div6Ref} className="bg-red-500 border-red-400">
                <Shield className="text-white w-5 h-5" />
              </Circle>
              <Circle ref={div7Ref} className="bg-orange-500 border-orange-400">
                <Zap className="text-white w-5 h-5" />
              </Circle>
            </div>
          </div>

          <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} duration={3} />
          <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} duration={3} delay={0.5} />
          <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} duration={3} delay={1} />
          <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} duration={3} delay={1.5} />
          <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} duration={3} delay={2} />
          <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} duration={3} delay={2.5} />
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Terminal className="text-white w-6 h-6" />
            </div>
            <h3 className="text-white font-semibold mb-1">CLI Tools</h3>
            <p className="text-slate-400 text-sm">Command line interface</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Code className="text-white w-6 h-6" />
            </div>
            <h3 className="text-white font-semibold mb-1">TypeScript</h3>
            <p className="text-slate-400 text-sm">Type safety & tooling</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Cloud className="text-white w-6 h-6" />
            </div>
            <h3 className="text-white font-semibold mb-1">Cloud Ready</h3>
            <p className="text-slate-400 text-sm">Deploy anywhere</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Database className="text-white w-6 h-6" />
            </div>
            <h3 className="text-white font-semibold mb-1">Databases</h3>
            <p className="text-slate-400 text-sm">Multiple DB support</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="text-white w-6 h-6" />
            </div>
            <h3 className="text-white font-semibold mb-1">Security</h3>
            <p className="text-slate-400 text-sm">Built-in protection</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="text-white w-6 h-6" />
            </div>
            <h3 className="text-white font-semibold mb-1">Performance</h3>
            <p className="text-slate-400 text-sm">Optimized builds</p>
          </div>
        </div>
      </div>
    </section>
  )
}
