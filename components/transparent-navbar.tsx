"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Terminal, Github, Search, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function TransparentNavbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Guide", href: "/guide" },
    { name: "Blog", href: "/blog" },
    { name: "Version", href: "/version" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5",
        isScrolled ? "bg-black/60 backdrop-blur-md" : "bg-black/20 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <Terminal className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-white font-semibold text-lg">Nodon</span>
        </Link>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200 hover:text-white",
                isActive(item.href) ? "text-white" : "text-slate-300",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden lg:flex items-center">
            <div className="relative group">
              <div className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md px-3 py-1.5 transition-all duration-200 cursor-pointer min-w-[200px]">
                <Search className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400 text-sm flex-1">Search</span>
                <div className="flex items-center space-x-1">
                  <kbd className="bg-white/10 text-slate-400 text-xs px-1.5 py-0.5 rounded border border-white/20 font-mono">
                    Ctrl
                  </kbd>
                  <kbd className="bg-white/10 text-slate-400 text-xs px-1.5 py-0.5 rounded border border-white/20 font-mono">
                    K
                  </kbd>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-2">
            <Link
              href="https://github.com/nodon/nodon"
              className="p-2 rounded-md hover:bg-white/10 transition-colors duration-200 group"
            >
              <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
            </Link>

            <Link
              href="https://discord.gg/nodon"
              className="p-2 rounded-md hover:bg-white/10 transition-colors duration-200 group"
            >
              <MessageCircle className="w-4 h-4 text-slate-400 group-hover:text-white" />
            </Link>

            <Link
              href="https://twitter.com/nodon"
              className="p-2 rounded-md hover:bg-white/10 transition-colors duration-200 group"
            >
              <svg className="w-4 h-4 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>

          {/* Get Started Button - Hidden on mobile, shown in mobile menu */}
          <Button
            size="sm"
            className="hidden md:flex bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm px-4 py-2"
          >
            <Link href="/guide">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-200">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-white/5 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-white py-2",
                  isActive(item.href) ? "text-white" : "text-slate-300",
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10">
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
              >
                <Link href="/guide">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
