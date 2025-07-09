"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const searchResults = [
  {
    title: "Getting Started",
    description: "Learn how to install and set up Nodon",
    category: "Guide",
    url: "/guide",
  },
  {
    title: "REST API Template",
    description: "Create REST APIs with Express.js",
    category: "Templates",
    url: "/features",
  },
  {
    title: "GraphQL Server",
    description: "Build GraphQL servers with Apollo",
    category: "Templates",
    url: "/features",
  },
  {
    title: "TypeScript Setup",
    description: "Configure TypeScript in your project",
    category: "Configuration",
    url: "/guide",
  },
  {
    title: "Docker Configuration",
    description: "Containerize your Node.js application",
    category: "Deployment",
    url: "/features",
  },
]

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const [filteredResults, setFilteredResults] = useState(searchResults)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredResults([])
    } else {
      const filtered = searchResults.filter(
        (result) =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase()) ||
          result.category.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredResults(filtered)
    }
  }, [query])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4">
        <div className="bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center px-4 py-4 border-b border-slate-700/50">
            <Search className="w-5 h-5 text-slate-400 mr-3" />
            <input
              type="text"
              placeholder="Search documentation"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-slate-400 text-lg focus:outline-none"
              autoFocus
            />
            <div className="flex items-center space-x-2">
              <kbd className="bg-slate-700/50 text-slate-400 text-xs px-2 py-1 rounded border border-slate-600/50 font-mono">
                Esc
              </kbd>
              <button onClick={onClose} className="p-1 hover:bg-slate-700/50 rounded transition-colors">
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {query.trim() === "" ? (
              <div className="py-12 text-center">
                <div className="text-slate-400 text-sm">No recent searches</div>
              </div>
            ) : filteredResults.length > 0 ? (
              <div className="py-2">
                {filteredResults.map((result, index) => (
                  <a
                    key={index}
                    href={result.url}
                    onClick={onClose}
                    className="flex items-start px-4 py-3 hover:bg-slate-700/30 transition-colors group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                          {result.title}
                        </h3>
                        <span className="text-xs bg-slate-700/50 text-slate-400 px-2 py-0.5 rounded">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">{result.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <div className="text-slate-400 text-sm">No results found for "{query}"</div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-slate-700/50 bg-slate-800/50">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <kbd className="bg-slate-700/50 px-1.5 py-0.5 rounded border border-slate-600/50">↑</kbd>
                  <kbd className="bg-slate-700/50 px-1.5 py-0.5 rounded border border-slate-600/50">↓</kbd>
                  <span>to navigate</span>
                </div>
                <div className="flex items-center space-x-1">
                  <kbd className="bg-slate-700/50 px-1.5 py-0.5 rounded border border-slate-600/50">↵</kbd>
                  <span>to select</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <span>Search by</span>
                <span className="text-blue-400 font-medium">Nodon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
