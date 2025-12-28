"use server"

// Server Action to securely fetch projects from Google Sheets
// This keeps your API key secure on the server

export interface Project {
  id: number
  name: string
  location: string
  state: string
  totalBudget: number
  fundsUsed: number
  category: string
  status: string
  startDate: string
  expectedCompletion: string
  description: string
}

export async function fetchProjectsFromSheets(): Promise<Project[]> {
  // To use Google Sheets as backend:
  // 1. Add GOOGLE_SHEETS_API_KEY to your environment variables (without NEXT_PUBLIC_ prefix)
  // 2. Add SPREADSHEET_ID to your environment variables
  // 3. Uncomment the code below

  /*
  const spreadsheetId = process.env.SPREADSHEET_ID
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY
  const range = 'Sheet1!A2:K100' // Adjust based on your data range

  if (!spreadsheetId || !apiKey) {
    console.error('Missing Google Sheets configuration')
    return []
  }

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
    const response = await fetch(url, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`)
    }

    const data = await response.json()
    const rows = data.values

    if (!rows || rows.length === 0) {
      return []
    }

    // Transform Google Sheets data to Project format
    const projects: Project[] = rows.map((row: any[]) => ({
      id: parseInt(row[0]),
      name: row[1],
      location: row[2],
      state: row[3],
      totalBudget: parseFloat(row[4]),
      fundsUsed: parseFloat(row[5]),
      category: row[6],
      status: row[7],
      startDate: row[8],
      expectedCompletion: row[9],
      description: row[10],
    }))

    return projects
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error)
    return []
  }
  */

  // For now, return static data
  // Replace this with the code above when you set up Google Sheets
  return [
    {
      id: 1,
      name: "Delhi Metro Phase 4 - Rithala Extension",
      location: "Delhi",
      state: "Delhi",
      totalBudget: 8500000000,
      fundsUsed: 5100000000,
      category: "Infrastructure",
      status: "In Progress",
      startDate: "2022-03-15",
      expectedCompletion: "2025-12-31",
      description: "Extension of Delhi Metro to improve connectivity in North Delhi",
    },
    {
      id: 2,
      name: "Mumbai Coastal Road Project",
      location: "Mumbai",
      state: "Maharashtra",
      totalBudget: 12000000000,
      fundsUsed: 7200000000,
      category: "Infrastructure",
      status: "In Progress",
      startDate: "2021-06-10",
      expectedCompletion: "2024-10-30",
      description: "8-lane coastal road to reduce traffic congestion",
    },
    {
      id: 3,
      name: "Bangalore Smart City Water Distribution",
      location: "Bangalore",
      state: "Karnataka",
      totalBudget: 950000000,
      fundsUsed: 570000000,
      category: "Water",
      status: "In Progress",
      startDate: "2022-01-20",
      expectedCompletion: "2024-08-15",
      description: "Modernization of water pipeline network across the city",
    },
    {
      id: 4,
      name: "Kolkata Hospital Modernization Program",
      location: "Kolkata",
      state: "West Bengal",
      totalBudget: 420000000,
      fundsUsed: 126000000,
      category: "Healthcare",
      status: "Planning",
      startDate: "2023-05-01",
      expectedCompletion: "2025-04-30",
      description: "Upgrade medical equipment and infrastructure in government hospitals",
    },
    {
      id: 5,
      name: "Chennai Metro Phase 2 - Anna Nagar Extension",
      location: "Chennai",
      state: "Tamil Nadu",
      totalBudget: 5000000000,
      fundsUsed: 3750000000,
      category: "Infrastructure",
      status: "In Progress",
      startDate: "2021-11-01",
      expectedCompletion: "2025-03-31",
      description: "Extension of Chennai Metro rail network",
    },
    {
      id: 6,
      name: "Hyderabad Road Repair & Maintenance",
      location: "Hyderabad",
      state: "Telangana",
      totalBudget: 380000000,
      fundsUsed: 285000000,
      category: "Roads",
      status: "In Progress",
      startDate: "2022-08-15",
      expectedCompletion: "2024-06-30",
      description: "Comprehensive road repair across major arterial roads",
    },
    {
      id: 7,
      name: "Pune Smart Traffic Management System",
      location: "Pune",
      state: "Maharashtra",
      totalBudget: 650000000,
      fundsUsed: 195000000,
      category: "Infrastructure",
      status: "In Progress",
      startDate: "2023-02-10",
      expectedCompletion: "2024-12-31",
      description: "AI-powered traffic lights and monitoring system",
    },
    {
      id: 8,
      name: "Ahmedabad Water Treatment Plant Upgrade",
      location: "Ahmedabad",
      state: "Gujarat",
      totalBudget: 720000000,
      fundsUsed: 216000000,
      category: "Water",
      status: "Planning",
      startDate: "2023-07-01",
      expectedCompletion: "2025-06-30",
      description: "Modernization of water treatment facilities",
    },
    {
      id: 9,
      name: "Jaipur Heritage City Beautification",
      location: "Jaipur",
      state: "Rajasthan",
      totalBudget: 280000000,
      fundsUsed: 168000000,
      category: "Infrastructure",
      status: "In Progress",
      startDate: "2022-04-01",
      expectedCompletion: "2024-09-30",
      description: "Restoration and beautification of heritage sites",
    },
    {
      id: 10,
      name: "Lucknow Metro Extension - North Corridor",
      location: "Lucknow",
      state: "Uttar Pradesh",
      totalBudget: 4200000000,
      fundsUsed: 1680000000,
      category: "Infrastructure",
      status: "In Progress",
      startDate: "2022-09-01",
      expectedCompletion: "2025-08-31",
      description: "Extension of Lucknow Metro to connect northern suburbs",
    },
    {
      id: 11,
      name: "Kochi Water Scarcity Prevention Project",
      location: "Kochi",
      state: "Kerala",
      totalBudget: 560000000,
      fundsUsed: 392000000,
      category: "Water",
      status: "In Progress",
      startDate: "2021-12-15",
      expectedCompletion: "2024-05-31",
      description: "Rainwater harvesting and water conservation infrastructure",
    },
    {
      id: 12,
      name: "Chandigarh Solar Power Grid",
      location: "Chandigarh",
      state: "Chandigarh",
      totalBudget: 490000000,
      fundsUsed: 147000000,
      category: "Energy",
      status: "Planning",
      startDate: "2023-04-01",
      expectedCompletion: "2025-03-31",
      description: "Installation of solar panels across government buildings",
    },
  ]
}
