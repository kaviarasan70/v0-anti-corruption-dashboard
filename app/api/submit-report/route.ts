import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const category = formData.get("category") as string
    const location = formData.get("location") as string
    const description = formData.get("description") as string
    const photo = formData.get("photo") as File | null

    const supabase = await createClient()

    const reportData = {
      category,
      location,
      description: description || null,
      photo_url: photo ? photo.name : null,
      status: "pending",
    }

    const { data, error } = await supabase.from("reports").insert([reportData]).select()

    if (error) {
      console.error("[v0] Database error:", error)
      throw new Error(`Database error: ${error.message}`)
    }

    console.log("[v0] Report saved to database:", data)

    // Optional: Also save to Google Sheets if configured
    const SPREADSHEET_ID = process.env.GRIEVANCES_SPREADSHEET_ID
    const API_KEY = process.env.GOOGLE_SHEETS_API_KEY

    if (SPREADSHEET_ID && API_KEY) {
      const timestamp = new Date().toISOString()
      const photoUrl = photo ? `Uploaded: ${photo.name}` : "No photo"

      const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Grievances!A:F:append?valueInputOption=USER_ENTERED&key=${API_KEY}`

      await fetch(sheetsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: [[timestamp, category, location, description, photoUrl, "Pending"]],
        }),
      })
    }

    return NextResponse.json({
      success: true,
      message: "Report submitted successfully and saved to database!",
      reportId: data[0]?.id,
    })
  } catch (error) {
    console.error("[v0] Error submitting report:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to submit report" },
      { status: 500 },
    )
  }
}
