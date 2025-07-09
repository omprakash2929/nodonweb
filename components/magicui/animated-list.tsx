"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import React, { type ReactElement, useEffect, useMemo, useState } from "react"

export interface AnimatedListProps {
  className?: string
  children: React.ReactNode
  delay?: number
}

export const AnimatedList = React.forwardRef<HTMLDivElement, AnimatedListProps>(
  ({ className, children, delay = 1000 }, ref) => {
    const [index, setIndex] = useState(0)
    const childrenArray = React.Children.toArray(children)

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
      }, delay)

      return () => clearInterval(interval)
    }, [childrenArray.length, delay])

    const itemsToShow = useMemo(() => childrenArray.slice(0, index + 1).reverse(), [index, childrenArray])

    return (
      <div className={cn("flex flex-col items-center gap-4", className)} ref={ref}>
        <AnimatePresence>
          {itemsToShow.map((item, idx) => (
            <AnimatedListItem key={(item as ReactElement).key || idx} index={idx}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  },
)

AnimatedList.displayName = "AnimatedList"

export function AnimatedListItem({ children, index }: { children: React.ReactNode; index: number }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: "spring" } },
    exit: { scale: 0, opacity: 0, transition: { type: "spring" } },
    transition: { type: "spring" },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}
