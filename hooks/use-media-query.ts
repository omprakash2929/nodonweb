"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  // Default to false on server
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query)

      // Update the state initially
      setMatches(media.matches)

      // Define a callback function to handle changes
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches)
      }

      // Add the listener to the media query
      media.addEventListener("change", listener)

      // Clean up the listener when the component unmounts
      return () => {
        media.removeEventListener("change", listener)
      }
    }
  }, [query])

  return matches
}
