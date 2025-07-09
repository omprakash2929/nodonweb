"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface InteractiveGridPatternProps {
  className?: string
  width?: number
  height?: number
  numSquares?: number
  maxOpacity?: number
  duration?: number
}

export function InteractiveGridPattern({
  className,
  width = 40,
  height = 40,
  numSquares = 50,
  maxOpacity = 0.5,
  duration = 4,
  ...props
}: InteractiveGridPatternProps) {
  const [squares, setSquares] = useState<Array<{ id: number; pos: [number, number] }>>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const getPos = (): [number, number] => {
    if (!containerRef.current) return [0, 0]
    const rect = containerRef.current.getBoundingClientRect()
    return [
      Math.floor(Math.random() * Math.max(1, rect.width / width)),
      Math.floor(Math.random() * Math.max(1, rect.height / height)),
    ]
  }

  const generateSquares = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
    }))
  }

  useEffect(() => {
    if (numSquares === 0) return

    const updateSquares = () => {
      setSquares(generateSquares(numSquares))
    }

    updateSquares()
    const interval = setInterval(updateSquares, duration * 1000)

    return () => clearInterval(interval)
  }, [numSquares, duration])

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      {...props}
    >
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern id="grid-pattern" width={width} height={height} patternUnits="userSpaceOnUse">
            <path
              d={`M ${width} 0 L 0 0 0 ${height}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-slate-700/30"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        {squares.map(({ pos: [x, y], id }) => (
          <rect
            key={id}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="currentColor"
            strokeWidth="0"
            className="text-emerald-400/20"
            style={{
              opacity: Math.random() * maxOpacity,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
