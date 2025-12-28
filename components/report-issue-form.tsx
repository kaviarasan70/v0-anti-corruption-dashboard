"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, AlertCircle, Send, MapPin } from "lucide-react"

export function ReportIssueForm() {
  const [file, setFile] = useState<File | null>(null)
  const [location, setLocation] = useState("")
  const locationInputRef = useRef<HTMLInputElement>(null)
  const [placesAvailable, setPlacesAvailable] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  useEffect(() => {
    const checkInterval = setInterval(() => {
      if (window.google?.maps?.places && locationInputRef.current) {
        clearInterval(checkInterval)
        setPlacesAvailable(true)
        initializeAutocomplete()
      }
    }, 100)

    const timeout = setTimeout(() => {
      clearInterval(checkInterval)
    }, 2000)

    return () => {
      clearInterval(checkInterval)
      clearTimeout(timeout)
    }

    function initializeAutocomplete() {
      if (!locationInputRef.current || !window.google?.maps?.places) return

      const autocomplete = new window.google.maps.places.Autocomplete(locationInputRef.current, {
        componentRestrictions: { country: "in" },
        fields: ["formatted_address", "geometry", "name"],
      })

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace()
        if (place.formatted_address) {
          setLocation(place.formatted_address)
        }
      })
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("/api/submit-report", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        alert("Report submitted successfully!")
        e.currentTarget.reset()
        setFile(null)
        setLocation("")
      }
    } catch (error) {
      console.error("Error submitting report:", error)
      alert("Failed to submit report. Please try again.")
    }
  }

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="size-5 text-primary" />
          Report an Issue
        </CardTitle>
        <CardDescription>Help improve your community by reporting problems</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="category">Issue Category</Label>
            <Select name="category">
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pothole">Pothole / Road Damage</SelectItem>
                <SelectItem value="water">Water Scarcity</SelectItem>
                <SelectItem value="drainage">Drainage Issues</SelectItem>
                <SelectItem value="electricity">Electricity Problems</SelectItem>
                <SelectItem value="streetlight">Street Light</SelectItem>
                <SelectItem value="waste">Waste Management</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                ref={locationInputRef}
                id="location"
                name="location"
                placeholder={
                  placesAvailable ? "Start typing to search locations in India..." : "Enter your location (City, State)"
                }
                className="bg-background pl-9"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              {placesAvailable
                ? "Google Places will suggest locations as you type"
                : "Enter your location manually (e.g., Connaught Place, Delhi)"}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe the issue in detail..."
              rows={4}
              className="bg-background resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="photo">Upload Photo</Label>
            <div className="flex items-center gap-2">
              <Input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                className="w-full justify-start bg-transparent"
                onClick={() => document.getElementById("photo")?.click()}
              >
                <Upload className="mr-2 size-4" />
                {file ? file.name : "Choose a photo"}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Photos help authorities verify and prioritize your report</p>
          </div>

          <Button type="submit" className="w-full" size="lg">
            <Send className="mr-2 size-4" />
            Submit Report
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
