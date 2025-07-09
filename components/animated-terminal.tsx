"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnimatedTerminalProps {
  commands: string[]
  typingSpeed?: number
  className?: string
  showCopyButton?: boolean
  autoStart?: boolean
}

export function AnimatedTerminal({
  commands,
  typingSpeed = 50,
  className,
  showCopyButton = true,
  autoStart = true,
}: AnimatedTerminalProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(autoStart)
  const [completedCommands, setCompletedCommands] = useState<string[]>([])

  useEffect(() => {
    if (!isTyping || currentCommandIndex >= commands.length) return

    const currentCommand = commands[currentCommandIndex]

    if (currentText.length < currentCommand.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentCommand.substring(0, currentText.length + 1))
      }, typingSpeed)

      return () => clearTimeout(timeout)
    } else {
      // Command completed
      const timeout = setTimeout(() => {
        setCompletedCommands([...completedCommands, currentCommand])
        setCurrentCommandIndex(currentCommandIndex + 1)
        setCurrentText("")
      }, 500) // Pause before next command

      return () => clearTimeout(timeout)
    }
  }, [currentText, currentCommandIndex, commands, isTyping, completedCommands, typingSpeed])

  const handleCopyCommands = () => {
    navigator.clipboard.writeText(commands.join("\n"))
  }

  const startTyping = () => {
    if (!isTyping) {
      setIsTyping(true)
    }
  }

  return (
    <Card className={cn("bg-black border-slate-800 rounded-lg overflow-hidden group", className)} onClick={startTyping}>
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/70 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        {showCopyButton && (
          <button
            onClick={handleCopyCommands}
            className="text-slate-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        )}
      </div>
      <div className="p-4 font-mono text-sm">
        {completedCommands.map((cmd, i) => (
          <div key={i} className="flex items-center space-x-3 mb-2">
            <span className="text-emerald-400">$</span>
            <span className="text-slate-300">{cmd}</span>
          </div>
        ))}
        {currentCommandIndex < commands.length && (
          <div className="flex items-center space-x-3">
            <span className="text-emerald-400">$</span>
            <span className="text-slate-300">
              {currentText}
              {isTyping && <span className="inline-block w-2 h-4 bg-emerald-400 ml-0.5 animate-pulse"></span>}
            </span>
          </div>
        )}
        {!isTyping && currentCommandIndex < commands.length && (
          <div className="text-center mt-4">
            <span className="text-slate-400 text-xs">Click to start typing</span>
          </div>
        )}
      </div>
    </Card>
  )
}
