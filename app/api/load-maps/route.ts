import { NextResponse } from "next/server"

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    return new NextResponse("error: API key not configured", {
      headers: {
        "Content-Type": "text/plain",
      },
    })
  }

  return new NextResponse(apiKey, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "private, max-age=3600",
    },
  })
}
