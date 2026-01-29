// Sample reports data for database seeding
// These represent citizen submissions to the watchdog platform

export interface SampleReport {
  id: string
  category: string
  location: string
  description: string
  status: "pending" | "in-progress" | "resolved"
  created_at: string
  updated_at: string
}

export const SAMPLE_REPORTS: SampleReport[] = [
  {
    id: "uuid-001",
    category: "Pothole",
    location: "Connaught Place, New Delhi",
    description:
      "Multiple potholes near the main plaza affecting traffic flow. Vehicles are avoiding the area, causing congestion on alternate routes. This has been reported multiple times but not yet repaired.",
    status: "pending",
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uuid-002",
    category: "Water Scarcity",
    location: "Marathahalli, Bangalore",
    description:
      "Severe water shortage in the residential area. Water is supplied only for 2 hours in the morning. Residents are facing hardship and water tankers are becoming increasingly expensive.",
    status: "in-progress",
    created_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uuid-003",
    category: "Street Light",
    location: "Andheri West, Mumbai",
    description:
      "Street lights have been non-functional for over 2 weeks. The dark area has become a safety hazard for commuters, especially during night hours.",
    status: "resolved",
    created_at: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uuid-004",
    category: "Drainage",
    location: "Salt Lake, Kolkata",
    description:
      "Drainage system is completely blocked causing water accumulation. The stagnant water is causing mosquito breeding and health hazards.",
    status: "pending",
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uuid-005",
    category: "Power Outage",
    location: "Banjara Hills, Hyderabad",
    description:
      "Frequent power cuts in the area. Electricity is cut off for 6-8 hours daily affecting residents and small businesses. Authorities have not yet provided a resolution timeline.",
    status: "in-progress",
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uuid-006",
    category: "Road Damage",
    location: "Vastrapur, Ahmedabad",
    description:
      "Major road damage with large cracks and uneven surface. This is causing frequent accidents and vehicle damage. Road needs immediate repair.",
    status: "pending",
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uuid-007",
    category: "Water Pipeline",
    location: "Indiranagar, Bangalore",
    description:
      "Water pipeline has burst leading to water loss and reduced pressure in surrounding areas. Repair work started but not completed yet.",
    status: "in-progress",
    created_at: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uuid-008",
    category: "Garbage",
    location: "Dadar East, Mumbai",
    description:
      "Garbage accumulation on the streets for the past week. Sanitation workers have not cleared the waste despite multiple complaints. Health hazard for residents.",
    status: "resolved",
    created_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uuid-009",
    category: "Street Light",
    location: "Alipore, Kolkata",
    description:
      "Multiple street lights are not functioning properly. Some are flickering and some are completely off. This creates a safety issue at night.",
    status: "pending",
    created_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uuid-010",
    category: "Pothole",
    location: "Gachibowli, Hyderabad",
    description:
      "Large pothole near the main intersection. Traffic has to move slowly to avoid the pothole. Repair materials have been placed but work has not started.",
    status: "pending",
    created_at: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uuid-011",
    category: "Water Quality",
    location: "Sector 32, Chandigarh",
    description:
      "Water supplied from the tap has a foul smell and discoloration. Tests have been requested to check water quality. Residents are advised to use bottled water.",
    status: "in-progress",
    created_at: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uuid-012",
    category: "Traffic Signal",
    location: "MG Road, Bangalore",
    description:
      "Traffic signal has been down for 3 days causing severe traffic congestion. Manual traffic regulation has been arranged but signal needs immediate repair.",
    status: "resolved",
    created_at: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uuid-013",
    category: "Water Stagnation",
    location: "Koti, Hyderabad",
    description:
      "Stagnant water in the streets after recent rains has not been cleared. Mosquitoes are breeding rapidly. Public health concerns raised.",
    status: "pending",
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uuid-014",
    category: "Road Subsidence",
    location: "Whitefield, Bangalore",
    description:
      "Road has subsided creating a dangerous dip. Vehicles are unable to pass safely. This requires emergency road repair work.",
    status: "in-progress",
    created_at: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uuid-015",
    category: "Street Light",
    location: "Thane, Mumbai",
    description:
      "Street lights have been vandalized. Glass covers are broken and some bulbs are missing. Repair urgently needed for safety.",
    status: "pending",
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
]
