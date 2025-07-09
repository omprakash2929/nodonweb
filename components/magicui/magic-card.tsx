"use client"

import { cn } from "@/lib/utils"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import type React from "react"
import type { MouseEvent, ReactNode } from "react"

interface MagicCardProps {
  children: ReactNode
  className?: string
}

export const MagicCard: React.FC<MagicCardProps> = ({ children, className }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className={cn(
        "group relative flex size-full overflow-hidden rounded-xl bg-slate-900/50 border border-slate-700/50 text-white hover:border-slate-600/50 transition-all duration-300",
        className,
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10 flex size-full flex-col">{children}</div>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.15), transparent 80%)
          `,
        }}
      />
    </div>
  )
}
