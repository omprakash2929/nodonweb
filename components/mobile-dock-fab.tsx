"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Terminal, BookOpen, Layers, Github, Menu, X, Search, MessageCircle, Gamepad2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

export function MobileDockFAB() {
  const pathname = usePathname() || ""
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const isActive = (path: string) => {
    if (!pathname) return false
    return pathname === path
  }

  const navItems = [
    { name: "Home", href: "/", icon: Terminal },
    { name: "Guide", href: "/guide", icon: BookOpen },
    { name: "Features", href: "/features", icon: Layers },
    { name: "Blog", href: "/blog", icon: MessageCircle },
  ]

  // Don't render on desktop
  if (isDesktop) return null

  return (
    <>
      {/* Mobile FAB */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-black/30 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center shadow-2xl shadow-black/10 transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Mobile Dock Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />

          {/* Floating Menu */}
          <div className="fixed bottom-24 right-6 z-40 w-64">
            <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/10 animate-in slide-in-from-bottom-2 duration-300">
              {/* Search */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                  <Search className="w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col space-y-2 mb-4">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                        isActive(item.href)
                          ? "text-white bg-white/10"
                          : "text-slate-300 hover:text-white hover:bg-white/10",
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium text-sm">{item.name}</span>
                    </Link>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center space-x-3 pt-3 border-t border-white/10">
                <Link
                  href="https://github.com/omprakash2929/Nodon"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                </Link>
                <Link
                  href="https://discord.gg/32QKxVcG"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                <Gamepad2 className="w-4 h-4 text-slate-300" />
                </Link>
                <Link
                  href="https://x.com/omprakash29_"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
