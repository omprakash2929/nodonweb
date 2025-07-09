"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Gamepad2, Github, MessageCircle, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MobileTransparentNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Guide", href: "/guide" },
    { name: "Blog", href: "/blog" },
    { name: "Version", href: "/version" },
  ]

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed top-16 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10 z-50 transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none",
        )}
      >
        <div className="container mx-auto px-6 py-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-md px-3 py-2">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-4 mb-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block text-lg font-medium transition-colors duration-200 hover:text-white py-2",
                  isActive(item.href) ? "text-white" : "text-slate-300",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 mb-6">
            <Link
              href="https://github.com/omprakash2929/Nodon"
              className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              <Github className="w-5 h-5 text-slate-400" />
            </Link>
            <Link
              href="https://discord.gg/32QKxVcG"
              className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              <Gamepad2 className="w-5 h-5 text-slate-400" />
            </Link>
            <Link
              href="https://discord.gg/32QKxVcG"
              className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>

          {/* Get Started Button */}
          <Button
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
            onClick={() => setIsOpen(false)}
          >
            <Link href="/guide">Get Started</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
