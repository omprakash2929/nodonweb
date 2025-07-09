"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScriptCopyButtonProps {
  command: string
  className?: string
}

export function ScriptCopyButton({ command, className }: ScriptCopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = command
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div
      className={cn(
        "group relative flex items-center justify-between bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg px-4 py-3 font-mono text-sm transition-all duration-200 hover:bg-slate-900/70 hover:border-slate-600/50",
        className,
      )}
    >
      <div className="flex items-center space-x-2">
        <span className="text-emerald-400">$</span>
        <span className="text-slate-300">{command}</span>
      </div>

      <button
        onClick={copyToClipboard}
        className="flex items-center justify-center w-8 h-8 rounded-md bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-200 opacity-70 group-hover:opacity-100"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Copy className="w-4 h-4 text-slate-400 hover:text-slate-300" />
        )}
      </button>
    </div>
  )
}
