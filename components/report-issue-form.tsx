"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, AlertCircle, Send, MapPin, CheckCircle, XCircle } from "lucide-react"

export function ReportIssueForm() {
  const [file, setFile] = useState<File | null>(null)
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const locationInputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [placesAvailable, setPlacesAvailable] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("/api/submit-report", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        setSubmitSuccess(true)

        if (formRef.current) {
          formRef.current.reset()
        }
        setFile(null)
        setLocation("")
        setCategory("")
        setDescription("")

        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || "Submission failed")
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unknown error")
    } finally {
      setIsSubmitting(false)
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
        {submitSuccess && (
          <div className="mb-4 flex gap-3 rounded-lg bg-green-50 p-4 text-green-900 border border-green-200">
            <CheckCircle className="size-5 flex-shrink-0 text-green-600" />
            <div>
              <p className="font-semibold">Report Submitted Successfully!</p>
              <p className="text-sm">Thank you for helping improve our communities. Your report has been saved and will be reviewed shortly.</p>
            </div>
          </div>
        )}

        {submitError && (
          <div className="mb-4 flex gap-3 rounded-lg bg-red-50 p-4 text-red-900 border border-red-200">
            <XCircle className="size-5 flex-shrink-0 text-red-600" />
            <div>
              <p className="font-semibold">Submission Failed</p>
              <p className="text-sm">{submitError}</p>
            </div>
          </div>
        )}

        <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="category">Issue Category</Label>
            <Select name="category" value={category} onValueChange={setCategory} required>
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
                required
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            <Send className="mr-2 size-4" />
            {isSubmitting ? "Submitting..." : "Submit Report"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
