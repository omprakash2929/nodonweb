"use client"

import { cn } from "@/lib/utils"
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern"

export function InteractiveGridPatternDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Interactive Grid Pattern
      </p>
    </div>
  )
}
