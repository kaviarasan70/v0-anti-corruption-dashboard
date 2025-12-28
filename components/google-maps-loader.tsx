"use client"

import type React from "react"
import { useEffect, useState } from "react"

export function GoogleMapsLoader({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (window.google?.maps) {
      setLoaded(true)
      return
    }

    fetch("/api/load-maps")
      .then((res) => res.text())
      .then((apiKey) => {
        if (!apiKey || apiKey.includes("error")) {
          console.log("[v0] Google Maps API key not configured - using fallback mode")
          setLoaded(true) // Set loaded to show fallback UI
          return
        }

        const script = document.createElement("script")
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
        script.async = true
        script.defer = true

        script.onload = () => {
          console.log("[v0] Google Maps loaded successfully")
          setLoaded(true)
        }

        script.onerror = () => {
          console.error("[v0] Failed to load Google Maps - using fallback")
          setLoaded(true) // Still show fallback UI
        }

        document.head.appendChild(script)
      })
      .catch((err) => {
        console.error("[v0] Failed to fetch Maps API key - using fallback:", err)
        setLoaded(true) // Still show fallback UI
      })
  }, [])

  if (!loaded) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return <>{children}</>
}

declare global {
  interface Window {
    google: any
  }
}
