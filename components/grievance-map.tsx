"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, AlertCircle, Droplets, Construction, Zap, X } from "lucide-react"

// City coordinates in India (approximate center points for map positioning)
const cityCoordinates: Record<string, { lat: number; lng: number; displayLat: string; displayLng: string }> = {
  "Connaught Place, Delhi": { lat: 28.6315, lng: 77.2167, displayLat: "28.63°N", displayLng: "77.22°E" },
  "Marathahalli, Bangalore": { lat: 12.9566, lng: 77.6993, displayLat: "12.96°N", displayLng: "77.70°E" },
  "Andheri West, Mumbai": { lat: 19.1358, lng: 72.8261, displayLat: "19.14°N", displayLng: "72.83°E" },
  "Salt Lake, Kolkata": { lat: 22.5726, lng: 88.464, displayLat: "22.57°N", displayLng: "88.46°E" },
  "Banjara Hills, Hyderabad": { lat: 17.4239, lng: 78.4738, displayLat: "17.42°N", displayLng: "78.47°E" },
  "Vastrapur, Ahmedabad": { lat: 23.0359, lng: 72.5243, displayLat: "23.04°N", displayLng: "72.52°E" },
  "Indiranagar, Bangalore": { lat: 12.9716, lng: 77.6412, displayLat: "12.97°N", displayLng: "77.64°E" },
  "Dadar East, Mumbai": { lat: 19.0176, lng: 72.8479, displayLat: "19.02°N", displayLng: "72.85°E" },
  "Alipore, Kolkata": { lat: 22.5395, lng: 88.3639, displayLat: "22.54°N", displayLng: "88.36°E" },
  "Gachibowli, Hyderabad": { lat: 17.4409, lng: 78.4504, displayLat: "17.44°N", displayLng: "78.45°E" },
  "Sector 32, Chandigarh": { lat: 30.5928, lng: 76.7745, displayLat: "30.59°N", displayLng: "76.77°E" },
  "MG Road, Bangalore": { lat: 12.9352, lng: 77.6245, displayLat: "12.94°N", displayLng: "77.62°E" },
  "Koti, Hyderabad": { lat: 17.385, lng: 78.4867, displayLat: "17.39°N", displayLng: "78.49°E" },
  "Whitefield, Bangalore": { lat: 12.9698, lng: 77.7499, displayLat: "12.97°N", displayLng: "77.75°E" },
  "Thane, Mumbai": { lat: 19.2183, lng: 72.9781, displayLat: "19.22°N", displayLng: "72.98°E" },
}

const grievances = [
  {
    id: 1,
    type: "Pothole",
    location: "Connaught Place, Delhi",
    severity: "high",
    icon: Construction,
    lat: 28.6315,
    lng: 77.2167,
  },
  {
    id: 2,
    type: "Water Scarcity",
    location: "Marathahalli, Bangalore",
    severity: "critical",
    icon: Droplets,
    lat: 12.9566,
    lng: 77.6993,
  },
  {
    id: 3,
    type: "Street Light",
    location: "Andheri West, Mumbai",
    severity: "medium",
    icon: AlertCircle,
    lat: 19.1358,
    lng: 72.8261,
  },
  {
    id: 4,
    type: "Drainage Issue",
    location: "Salt Lake, Kolkata",
    severity: "high",
    icon: Construction,
    lat: 22.5726,
    lng: 88.464,
  },
  {
    id: 5,
    type: "Power Outage",
    location: "Banjara Hills, Hyderabad",
    severity: "critical",
    icon: Zap,
    lat: 17.4239,
    lng: 78.4738,
  },
  {
    id: 6,
    type: "Road Damage",
    location: "Vastrapur, Ahmedabad",
    severity: "high",
    icon: Construction,
    lat: 23.0359,
    lng: 72.5243,
  },
  {
    id: 7,
    type: "Water Pipeline Burst",
    location: "Indiranagar, Bangalore",
    severity: "critical",
    icon: Droplets,
    lat: 12.9716,
    lng: 77.6412,
  },
  {
    id: 8,
    type: "Garbage Accumulation",
    location: "Dadar East, Mumbai",
    severity: "high",
    icon: AlertCircle,
    lat: 19.0176,
    lng: 72.8479,
  },
  {
    id: 9,
    type: "Street Light Malfunction",
    location: "Alipore, Kolkata",
    severity: "medium",
    icon: Zap,
    lat: 22.5395,
    lng: 88.3639,
  },
  {
    id: 10,
    type: "Road Pothole",
    location: "Gachibowli, Hyderabad",
    severity: "high",
    icon: Construction,
    lat: 17.4409,
    lng: 78.4504,
  },
  {
    id: 11,
    type: "Water Quality Issue",
    location: "Sector 32, Chandigarh",
    severity: "medium",
    icon: Droplets,
    lat: 30.5928,
    lng: 76.7745,
  },
  {
    id: 12,
    type: "Traffic Signal Down",
    location: "MG Road, Bangalore",
    severity: "high",
    icon: AlertCircle,
    lat: 12.9352,
    lng: 77.6245,
  },
  {
    id: 13,
    type: "Stagnant Water",
    location: "Koti, Hyderabad",
    severity: "medium",
    icon: Droplets,
    lat: 17.3850,
    lng: 78.4867,
  },
  {
    id: 14,
    type: "Road Subsidence",
    location: "Whitefield, Bangalore",
    severity: "critical",
    icon: Construction,
    lat: 12.9698,
    lng: 77.7499,
  },
  {
    id: 15,
    type: "Streetlight Vandalism",
    location: "Thane, Mumbai",
    severity: "medium",
    icon: Zap,
    lat: 19.2183,
    lng: 72.9781,
  },
]

export function GrievanceMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedGrievance, setSelectedGrievance] = useState<(typeof grievances)[0] | null>(null)
  const [hoveredGrievance, setHoveredGrievance] = useState<number | null>(null)
  const [showGoogleMaps, setShowGoogleMaps] = useState(false)

  // Draw interactive map on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Draw background map representation
    drawMap(ctx, canvas.width, canvas.height)
  }, [])

  const drawMap = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Ocean background
    ctx.fillStyle = "#d4e6f1"
    ctx.fillRect(0, 0, width, height)

    // India map bounds (approximate)
    const indiaMinLat = 8.4
    const indiaMaxLat = 35.0
    const indiaMinLng = 68.2
    const indiaMaxLng = 97.0

    const mapPadding = 40
    const mapWidth = width - mapPadding * 2
    const mapHeight = height - mapPadding * 2

    // Draw simplified India map with color
    ctx.fillStyle = "#f0e68c"
    ctx.strokeStyle = "#d4a574"
    ctx.lineWidth = 2

    // Draw India outline (simplified polygon)
    ctx.beginPath()
    // Start from northwest and draw a rough Indian boundary
    const points = [
      [68.2, 35.0], // Northwest corner
      [77.0, 35.0], // North
      [97.0, 35.0], // Northeast corner
      [97.0, 28.0], // East side
      [97.0, 20.0], // Southeast
      [97.0, 10.0], // Far east
      [95.0, 8.4], // Southeast corner
      [92.0, 6.0], // South
      [88.0, 5.0], // South-central
      [77.0, 8.0], // Southwest
      [72.0, 9.0], // Southwest
      [68.2, 15.0], // West side
      [68.2, 25.0], // Northwest
      [68.2, 35.0], // Back to start
    ]

    ctx.moveTo(
      mapPadding + ((points[0][0] - indiaMinLng) / (indiaMaxLng - indiaMinLng)) * mapWidth,
      mapPadding + ((indiaMaxLat - points[0][1]) / (indiaMaxLat - indiaMinLat)) * mapHeight,
    )

    for (let i = 1; i < points.length; i++) {
      const x = mapPadding + ((points[i][0] - indiaMinLng) / (indiaMaxLng - indiaMinLng)) * mapWidth
      const y = mapPadding + ((indiaMaxLat - points[i][1]) / (indiaMaxLat - indiaMinLat)) * mapHeight
      ctx.lineTo(x, y)
    }
    ctx.fill()
    ctx.stroke()

    // Draw grid lines for reference
    ctx.strokeStyle = "#e8d5c4"
    ctx.lineWidth = 0.5
    ctx.globalAlpha = 0.3

    // Longitude lines
    for (let lng = 70; lng <= 96; lng += 5) {
      const x = mapPadding + ((lng - indiaMinLng) / (indiaMaxLng - indiaMinLng)) * mapWidth
      ctx.beginPath()
      ctx.moveTo(x, mapPadding)
      ctx.lineTo(x, mapPadding + mapHeight)
      ctx.stroke()
    }

    // Latitude lines
    for (let lat = 10; lat <= 35; lat += 5) {
      const y = mapPadding + ((indiaMaxLat - lat) / (indiaMaxLat - indiaMinLat)) * mapHeight
      ctx.beginPath()
      ctx.moveTo(mapPadding, y)
      ctx.lineTo(mapPadding + mapWidth, y)
      ctx.stroke()
    }

    ctx.globalAlpha = 1.0

    // Add longitude labels
    ctx.fillStyle = "#666"
    ctx.font = "10px sans-serif"
    ctx.textAlign = "center"
    for (let lng = 70; lng <= 96; lng += 5) {
      const x = mapPadding + ((lng - indiaMinLng) / (indiaMaxLng - indiaMinLng)) * mapWidth
      ctx.fillText(lng.toString(), x, height - 10)
    }

    // Add latitude labels
    ctx.textAlign = "right"
    for (let lat = 10; lat <= 35; lat += 5) {
      const y = mapPadding + ((indiaMaxLat - lat) / (indiaMaxLat - indiaMinLat)) * mapHeight
      ctx.fillText(lat.toString(), mapPadding - 10, y + 4)
    }

    // Draw location markers
    grievances.forEach((grievance) => {
      const x = mapPadding + ((grievance.lng - indiaMinLng) / (indiaMaxLng - indiaMinLng)) * mapWidth
      const y = mapPadding + ((indiaMaxLat - grievance.lat) / (indiaMaxLat - indiaMinLat)) * mapHeight

      // Draw circle based on severity
      const isHovered = hoveredGrievance === grievance.id
      const colors = {
        critical: "#ef4444",
        high: "#f97316",
        medium: "#eab308",
      }

      // Shadow effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.beginPath()
      ctx.arc(x + 1, y + 1, isHovered ? 11 : 7, 0, Math.PI * 2)
      ctx.fill()

      // Main circle
      ctx.fillStyle = colors[grievance.severity as keyof typeof colors]
      ctx.beginPath()
      ctx.arc(x, y, isHovered ? 10 : 6, 0, Math.PI * 2)
      ctx.fill()

      // White border
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.stroke()
    })

    // Add title
    ctx.fillStyle = "#1a1a1a"
    ctx.font = "bold 14px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("India - Grievance Report Map", width / 2, 20)
  }

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const indiaMinLat = 8.4
    const indiaMaxLat = 35.0
    const indiaMinLng = 68.2
    const indiaMaxLng = 97.0

    const mapPadding = 40
    const mapWidth = canvas.width - mapPadding * 2
    const mapHeight = canvas.height - mapPadding * 2

    // Check which marker was clicked
    grievances.forEach((grievance) => {
      const markerX = mapPadding + ((grievance.lng - indiaMinLng) / (indiaMaxLng - indiaMinLng)) * mapWidth
      const markerY = mapPadding + ((indiaMaxLat - grievance.lat) / (indiaMaxLat - indiaMinLat)) * mapHeight
      const distance = Math.sqrt((x - markerX) ** 2 + (y - markerY) ** 2)

      if (distance < 15) {
        setSelectedGrievance(grievance)
      }
    })
  }

  const handleCanvasHover = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const indiaMinLat = 8.4
    const indiaMaxLat = 35.0
    const indiaMinLng = 68.2
    const indiaMaxLng = 97.0

    const mapPadding = 40
    const mapWidth = canvas.width - mapPadding * 2
    const mapHeight = canvas.height - mapPadding * 2

    let hovered = null
    grievances.forEach((grievance) => {
      const markerX = mapPadding + ((grievance.lng - indiaMinLng) / (indiaMaxLng - indiaMinLng)) * mapWidth
      const markerY = mapPadding + ((indiaMaxLat - grievance.lat) / (indiaMaxLat - indiaMinLat)) * mapHeight
      const distance = Math.sqrt((x - markerX) ** 2 + (y - markerY) ** 2)

      if (distance < 15) {
        hovered = grievance.id
      }
    })

    setHoveredGrievance(hovered)
  }

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="size-5 text-primary" />
          Live Grievance Map
        </CardTitle>
        <CardDescription>Real-time citizen reports across India (Click markers for details)</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        {/* Map Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowGoogleMaps(false)}
            className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              !showGoogleMaps
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Canvas Map
          </button>
          <button
            onClick={() => setShowGoogleMaps(true)}
            className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              showGoogleMaps
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Google Maps
          </button>
        </div>

        {/* Interactive Canvas Map */}
        {!showGoogleMaps && (
          <div className="space-y-2">
            <div className="relative aspect-[4/3] w-full rounded-lg border-2 border-border overflow-hidden bg-muted/30">
              <canvas
                ref={canvasRef}
                onClick={handleCanvasClick}
                onMouseMove={handleCanvasHover}
                onMouseLeave={() => setHoveredGrievance(null)}
                className="w-full h-full cursor-pointer"
              />
              <div className="absolute bottom-2 left-2 text-xs text-muted-foreground bg-background/90 backdrop-blur-sm px-2 py-1 rounded border">
                Interactive Map - {grievances.length} Reports
              </div>
            </div>

            {/* Legend */}
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 border border-white" />
                <span>Critical</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500 border border-white" />
                <span>High</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500 border border-white" />
                <span>Medium</span>
              </div>
            </div>
          </div>
        )}

        {/* Google Maps Embed */}
        {showGoogleMaps && (
          <div className="space-y-2">
            <div className="relative w-full aspect-[4/3] rounded-lg border-2 border-border overflow-hidden bg-muted/30">
              <iframe
                title="India Citizen Watchdog - Grievance Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31358533.13889173!2d77.22033773215065!3d20.59368110852261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394699b6236f7c29%3A0x8883e3fbe3cecd8!2sIndia!5e0!3m2!1sen!2sin!4v1675328949851"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-2 text-xs text-muted-foreground bg-background/90 backdrop-blur-sm px-2 py-1 rounded border">
                Google Maps Interactive View
              </div>
            </div>

            <div className="text-xs text-muted-foreground space-y-2">
              <p className="font-semibold">Map Features:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Drag to pan across India</li>
                <li>Scroll to zoom in/out</li>
                <li>Search for specific locations</li>
                <li>View street-level imagery</li>
                <li>Click locations to explore</li>
              </ul>
            </div>
          </div>
        )}

        {/* Selected Grievance Details */}
        {selectedGrievance && (
          <div className="rounded-lg border bg-card p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">{selectedGrievance.type}</h3>
                <p className="text-sm text-muted-foreground">{selectedGrievance.location}</p>
                {cityCoordinates[selectedGrievance.location] && (
                  <p className="text-xs text-muted-foreground">
                    {cityCoordinates[selectedGrievance.location].displayLat},{" "}
                    {cityCoordinates[selectedGrievance.location].displayLng}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedGrievance(null)}
                className="p-1 hover:bg-muted rounded-md transition-colors"
              >
                <X className="size-4 text-muted-foreground" />
              </button>
            </div>
            <Badge
              className={
                selectedGrievance.severity === "critical"
                  ? "bg-destructive text-destructive-foreground"
                  : selectedGrievance.severity === "high"
                    ? "bg-orange-500 text-white"
                    : "bg-yellow-500 text-white"
              }
            >
              {selectedGrievance.severity.toUpperCase()}
            </Badge>
          </div>
        )}

        {/* Reports List */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">All Reports ({grievances.length})</h4>
          <div className="space-y-2 max-h-[240px] overflow-y-auto">
            {grievances.map((grievance) => {
              const Icon = grievance.icon
              return (
                <div
                  key={grievance.id}
                  onClick={() => setSelectedGrievance(grievance)}
                  className={`flex items-center gap-3 rounded-lg border bg-card p-3 hover:bg-accent/5 transition-colors cursor-pointer ${
                    selectedGrievance?.id === grievance.id ? "border-primary bg-primary/5" : ""
                  }`}
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted">
                    <Icon className="size-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{grievance.type}</p>
                    <p className="text-xs text-muted-foreground truncate">{grievance.location}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className={
                      grievance.severity === "critical"
                        ? "bg-destructive/10 text-destructive border-0"
                        : grievance.severity === "high"
                          ? "bg-orange-500/10 text-orange-700 border-0"
                          : "bg-yellow-500/10 text-yellow-700 border-0"
                    }
                  >
                    {grievance.severity}
                  </Badge>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}
