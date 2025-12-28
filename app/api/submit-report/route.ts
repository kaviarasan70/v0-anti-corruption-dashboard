import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const category = formData.get("category")
    const location = formData.get("location")
    const description = formData.get("description")
    const photo = formData.get("photo") as File | null

    const SPREADSHEET_ID = process.env.GRIEVANCES_SPREADSHEET_ID
    const API_KEY = process.env.GOOGLE_SHEETS_API_KEY

    if (!SPREADSHEET_ID || !API_KEY) {
      console.error("[v0] Missing Google Sheets credentials")
      return NextResponse.json({ error: "Configuration error" }, { status: 500 })
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString()
    const photoUrl = photo ? `Uploaded: ${photo.name}` : "No photo"

    // Google Sheets API append request
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Grievances!A:F:append?valueInputOption=USER_ENTERED&key=${API_KEY}`

    const response = await fetch(sheetsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[timestamp, category, location, description, photoUrl, "Pending"]],
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to submit to Google Sheets")
    }

    return NextResponse.json({ success: true, message: "Report submitted successfully" })
  } catch (error) {
    console.error("[v0] Error submitting report:", error)
    return NextResponse.json({ error: "Failed to submit report" }, { status: 500 })
  }
}
