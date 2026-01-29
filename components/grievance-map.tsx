"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, AlertCircle, Droplets, Construction, Zap } from "lucide-react"

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
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [useGoogleMaps, setUseGoogleMaps] = useState(false)

  useEffect(() => {
    const checkInterval = setInterval(() => {
      if (window.google?.maps) {
        setUseGoogleMaps(true)
        clearInterval(checkInterval)
        initializeMap()
      }
    }, 100)

    // If Google Maps doesn't load within 2 seconds, use fallback
    const timeout = setTimeout(() => {
      clearInterval(checkInterval)
      setMapLoaded(true)
    }, 2000)

    return () => {
      clearInterval(checkInterval)
      clearTimeout(timeout)
    }

    function initializeMap() {
      if (!mapRef.current || !window.google?.maps) return

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5,
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ color: "#f5f5f5" }],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#e3f2fd" }],
          },
        ],
      })

      grievances.forEach((grievance) => {
        const marker = new window.google.maps.Marker({
          position: { lat: grievance.lat, lng: grievance.lng },
          map: map,
          title: `${grievance.type} - ${grievance.location}`,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor:
              grievance.severity === "critical" ? "#ef4444" : grievance.severity === "high" ? "#f97316" : "#eab308",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          },
        })

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px;">
              <h3 style="font-weight: 600; margin-bottom: 4px;">${grievance.type}</h3>
              <p style="font-size: 12px; color: #666;">${grievance.location}</p>
              <p style="font-size: 11px; margin-top: 4px;">
                <span style="background: ${grievance.severity === "critical" ? "#ef4444" : grievance.severity === "high" ? "#f97316" : "#eab308"}; color: white; padding: 2px 6px; border-radius: 4px;">${grievance.severity}</span>
              </p>
            </div>
          `,
        })

        marker.addListener("click", () => {
          infoWindow.open(map, marker)
        })
      })

      setMapLoaded(true)
    }
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="size-5 text-primary" />
          Live Grievance Map
        </CardTitle>
        <CardDescription>Real-time citizen reports across India</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {useGoogleMaps ? (
          <div
            ref={mapRef}
            className="aspect-[4/3] w-full rounded-lg border-2 border-border overflow-hidden bg-muted/30"
          >
            {!mapLoaded && (
              <div className="flex items-center justify-center h-full bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">Loading map...</p>
              </div>
            )}
          </div>
        ) : (
          <div className="aspect-[4/3] w-full rounded-lg border-2 border-border overflow-hidden bg-muted/30 relative">
            <img
              src="/map-of-india-with-location-pins.jpg"
              alt="Map of India with grievance locations"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md border text-xs text-muted-foreground">
              Demo Map View
            </div>
          </div>
        )}

        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Recent Reports</h4>
          <div className="space-y-2 max-h-[240px] overflow-y-auto">
            {grievances.map((grievance) => {
              const Icon = grievance.icon
              return (
                <div
                  key={grievance.id}
                  className="flex items-center gap-3 rounded-lg border bg-card p-3 hover:bg-accent/5 transition-colors"
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
                          ? "bg-destructive/10 text-destructive border-0"
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
