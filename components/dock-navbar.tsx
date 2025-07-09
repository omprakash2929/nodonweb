"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Terminal, Github, Search, MessageCircle, Gamepad2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { SearchModal } from "@/components/search-modal"

export function DockNavbar() {
  const pathname = usePathname() || ""
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    handleResize()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Guide", href: "/guide" },
    { name: "Features", href: "/features" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <>
      <nav
        className={cn(
          "fixed z-50 transition-all duration-500 ease-out ",
          isDesktop ? "top-4 left-1/2 transform -translate-x-1/2 container mx-auto px-12" : "top-4 left-4 right-4",
          isScrolled ? "top-2" : "top-6",
        )}
      >
        <div
          className={cn(
            "bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/10",
            isDesktop ? "rounded-3xl px-8 py-4  " : "rounded-xl  px-4 py-2",
          )}
        >
          <div className="flex items-center justify-between ">
            {/* Logo */}
            <div className="flex items-center justify-center">

           
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 bflex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                 <img src="/logo/logo.png" className="w-11 h-11" alt="" />
              </div>
              <span className="text-white font-semibold text-xl">Nodon</span>
            </Link>

            {/* Navigation Items - Desktop Only */}
            {isDesktop && (
              <div className="flex items-center space-x-2 mx-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/10",
                      isActive(item.href) ? "text-white bg-white/10" : "text-slate-300 hover:text-white",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
 </div>
            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Search - Desktop Only */}
              {isDesktop && (
                <div className="relative group">
                  <button
                    onClick={() => setIsSearchModalOpen(true)}
                    className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 transition-all duration-200 cursor-pointer min-w-[220px]"
                  >
                    <Search className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-400 text-sm flex-1 text-left">Search</span>
                    <div className="flex items-center space-x-1">
                      <kbd className="bg-white/10 text-slate-400 text-xs px-2 py-1 rounded border border-white/20 font-mono">
                        Ctrl
                      </kbd>
                      <kbd className="bg-white/10 text-slate-400 text-xs px-2 py-1 rounded border border-white/20 font-mono">
                        K
                      </kbd>
                    </div>
                  </button>
                </div>
              )}

              {/* Social Icons - Desktop Only */}
             {isDesktop && (
                <div className="flex items-center space-x-1">
                  <Link
                     target="_blank"
                    href="https://github.com/omprakash2929/Nodon"
                    className="p-2.5 rounded-full hover:bg-white/10 transition-all duration-200 group"
                  >
                    <Github className="w-4 h-4 text-slate-300 group-hover:text-white" />
                  </Link>

                  <Link
                   target="_blank"
                    href="https://discord.gg/32QKxVcG"
                    className="p-2.5 rounded-full hover:bg-white/10 transition-all duration-200 group"
                  >
                    <Gamepad2 className="w-4 h-4 text-slate-300 group-hover:text-white" />
                  </Link>
                   <Link
                    target="_blank"
                href="https://x.com/omprakash29_"
                className="p-2 rounded-md hover:bg-slate-100 transition-colors duration-200 group"
              >
                <svg className="w-4 h-4 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              {!isDesktop && (
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  {isMobileMenuOpen ? (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {!isDesktop && isMobileMenuOpen && (
          <div className="mt-2 bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl shadow-black/10">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive(item.href)
                      ? "text-white bg-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/10",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Search */}
           <div className="mt-3 pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setIsSearchModalOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                className="w-full flex items-center space-x-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-left hover:bg-white/10 transition-colors"
              >
                <Search className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400 text-sm">Search...</span>
              </button>
            </div>

            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center space-x-4 mt-3 pt-3 border-t border-white/10">
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
                  className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
            </div>
          </div>
        )}
      </nav>
 <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
      {/* Backdrop for Mobile Menu */}
      {!isDesktop && isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  )
}
