"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { useState } from "react"

interface GoogleMapsEmbedProps {
  location?: string
  lat?: number
  lng?: number
  zoom?: number
}

export function GoogleMapsEmbed({
  location = "India",
  lat = 20.5937,
  lng = 78.9629,
  zoom = 5,
}: GoogleMapsEmbedProps) {
  const [showMap, setShowMap] = useState(true)

  // Create embed URL for Google Maps
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${Math.pow(2, 21 - zoom) * 591657}!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x${Math.random().toString(16)}!2s${location}!5e0!3m2!1sen!2sin!4v1234567890`

  if (!showMap) {
    return (
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="size-5 text-primary" />
            Google Maps - India Grievance Tracker
          </CardTitle>
          <CardDescription>Full interactive map with street view</CardDescription>
        </CardHeader>
        <CardContent>
          <button
            onClick={() => setShowMap(true)}
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Load Interactive Map
          </button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="size-5 text-primary" />
          Google Maps - India Grievance Tracker
        </CardTitle>
        <CardDescription>Full interactive map with street view</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <div className="relative w-full aspect-[4/3] rounded-lg border-2 border-border overflow-hidden bg-muted/30">
          <iframe
            title="India Grievance Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31358533.13889173!2d77.22033773215065!3d20.59368110852261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394699b6236f7c29%3A0x8883e3fbe3cecd8!2sIndia!5e0!3m2!1sen!2sin!4v1675328949851"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="text-xs text-muted-foreground space-y-2">
          <p className="font-semibold">Map Features:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Drag to pan across India</li>
            <li>Scroll to zoom in/out</li>
            <li>Search for specific locations</li>
            <li>View street-level imagery</li>
            <li>Click locations to see details</li>
          </ul>
        </div>

        <button
          onClick={() => setShowMap(false)}
          className="w-full px-4 py-2 text-sm border border-border rounded-lg hover:bg-muted transition-colors"
        >
          Close Map
        </button>
      </CardContent>
    </Card>
  )
}
