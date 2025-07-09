"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Search, MessageCircle, Menu, X, Gamepad2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { SearchModal } from "@/components/search-modal"

export function DocsNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsSearchModalOpen(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const navItems = [
     { name: "Home", href: "/" },
    { name: "Guide", href: "/guide" },
    { name: "Feature", href: "/features" },
    { name: "Blog", href: "/blog" }
  ]

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-black/60 backdrop-blur-md border-white/5 shadow-sm"
            : "bg-black/20 backdrop-blur-sm border-white/5",
        )}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/logo/logo.png"
              alt="Nodon"
              className="w-8 h-8 group-hover:scale-110 transition-transform duration-200"
            />
            <span className="text-white font-semibold text-xl">Nodon</span>
          </Link>

          {/* Navigation Items - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search - Desktop */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => setIsSearchModalOpen(true)}
                className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md px-3 py-1.5 transition-all duration-200 cursor-pointer min-w-[200px]"
              >
                <Search className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400 text-sm flex-1 text-left">Search</span>
                <div className="flex items-center space-x-1">
                  <kbd className="bg-white/10 text-slate-400 text-xs px-1.5 py-0.5 rounded border border-white/20 font-mono">
                    Ctrl
                  </kbd>
                  <kbd className="bg-white/10 text-slate-400 text-xs px-1.5 py-0.5 rounded border border-white/20 font-mono">
                    K
                  </kbd>
                </div>
              </button>
            </div>

            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <Link
               target="_blank"
                href="https://github.com/omprakash2929/Nodon"
                className="p-2 rounded-md hover:bg-slate-100 transition-colors duration-200 group"
              >
                <Github className="w-4 h-4 text-slate-400 group-hover:text-black" />
              </Link>

              <Link
               target="_blank"
                href="https://discord.gg/32QKxVcG"
                className="p-2 rounded-md hover:bg-slate-100 transition-colors duration-200 group"
              >
                <Gamepad2 className="w-4 h-4 text-slate-400 group-hover:text-black" />
              </Link>

              <Link
               target="_blank"
                href="https://x.com/omprakash29_"
                className="p-2 rounded-md hover:bg-slate-100 transition-colors duration-200 group"
              >
                <svg className="w-4 h-4 text-slate-400 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-900" />
              ) : (
                <Menu className="w-5 h-5 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-black/80 backdrop-blur-md">
            <div className="container mx-auto px-6 py-4">
              {/* Mobile Search */}
              <div className="mb-4">
                <button
                  onClick={() => {
                    setIsSearchModalOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full flex items-center space-x-2 bg-white/5 border border-white/10 rounded-md px-3 py-2 text-left hover:bg-white/10 transition-colors"
                >
                  <Search className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-500 text-sm">Search...</span>
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-3 mb-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 pt-3 border-t border-slate-200">
                <Link
                 target="_blank"
                  href="https://github.com/omprakash2929/Nodon"
                  className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <Github className="w-4 h-4 text-slate-600" />
                </Link>
                <Link
                 target="_blank"
                  href="https://discord.gg/32QKxVcG"
                  className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <Gamepad2 className="w-4 h-4 text-slate-600" />
                </Link>
                <Link
                 target="_blank"
                  href="https://x.com/omprakash29_"
                  className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />

      {/* Backdrop for Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
