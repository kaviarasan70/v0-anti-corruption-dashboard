// Data structure compatible with Google Sheets backend
// This can be easily replaced with API calls to Google Sheets API

// Helper function to format currency in Indian Rupee format
export function formatCurrency(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)}Cr`
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)}L`
  }
  return `₹${amount.toLocaleString("en-IN")}`
}

// Function to filter projects based on search query
export function searchProjects(query: string, projects: any[]): any[] {
  const lowercaseQuery = query.toLowerCase().trim()

  if (!lowercaseQuery) {
    return projects
  }

  return projects.filter(
    (project) =>
      project.name.toLowerCase().includes(lowercaseQuery) ||
      project.location.toLowerCase().includes(lowercaseQuery) ||
      project.state.toLowerCase().includes(lowercaseQuery) ||
      project.category.toLowerCase().includes(lowercaseQuery) ||
      project.description.toLowerCase().includes(lowercaseQuery),
  )
}
