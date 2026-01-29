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
          setLoaded(true)
          return
        }

        const script = document.createElement("script")
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
        script.async = true
        script.defer = true

        script.onload = () => {
          setLoaded(true)
        }

        script.onerror = () => {
          setLoaded(true)
        }

        document.head.appendChild(script)
      })
      .catch(() => {
        setLoaded(true)
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
