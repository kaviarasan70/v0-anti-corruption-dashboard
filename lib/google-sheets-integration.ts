// Google Sheets API Integration Guide
// This file provides helper functions and documentation for connecting to Google Sheets

export interface GoogleSheetsConfig {
  spreadsheetId: string
  apiKey: string
  range: string
}

/**
 * Fetch projects data from Google Sheets
 *
 * Setup Instructions:
 * 1. Create a Google Sheet with the following columns:
 *    - Column A: ID (number)
 *    - Column B: Name (text)
 *    - Column C: Location (text)
 *    - Column D: State (text)
 *    - Column E: Total Budget (number)
 *    - Column F: Funds Used (number)
 *    - Column G: Category (text)
 *    - Column H: Status (text)
 *    - Column I: Start Date (date)
 *    - Column J: Expected Completion (date)
 *    - Column K: Description (text)
 *
 * 2. Make the sheet publicly readable:
 *    - Click "Share" button
 *    - Change to "Anyone with the link can view"
 *
 * 3. Get your Spreadsheet ID from the URL:
 *    https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit
 *
 * 4. Enable Google Sheets API and get an API key:
 *    - Go to Google Cloud Console
 *    - Enable Google Sheets API
 *    - Create credentials (API Key)
 *    - Add the API key to your environment variables as GOOGLE_SHEETS_API_KEY
 *
 * 5. Add environment variables:
 *    GOOGLE_SHEETS_API_KEY=your_api_key_here
 *    SPREADSHEET_ID=your_spreadsheet_id_here
 */

/**
 * Google Sheets Integration - Server-Side Only
 *
 * All Google Sheets API calls are now handled securely on the server.
 * See app/actions/fetch-projects.ts for the implementation.
 *
 * To connect Google Sheets as your backend:
 *
 * 1. Set up environment variables in the Vars section of the v0 sidebar:
 *    - GOOGLE_SHEETS_API_KEY (without NEXT_PUBLIC_ prefix)
 *    - SPREADSHEET_ID
 *
 * 2. Enable the integration code in app/actions/fetch-projects.ts
 *
 * 3. Your API key stays secure on the server and is never exposed to clients
 */

export const INTEGRATION_INFO = {
  securityNote: "API keys are now kept secure on the server using Server Actions",
  setupFile: "app/actions/fetch-projects.ts",
  documentationFile: "GOOGLE_SHEETS_SETUP.md",
}

// Template for Google Sheets
export const GOOGLE_SHEETS_TEMPLATE = `
ID	Name	Location	State	Total Budget	Funds Used	Category	Status	Start Date	Expected Completion	Description
1	Delhi Metro Phase 4	Delhi	Delhi	8500000000	5100000000	Infrastructure	In Progress	2022-03-15	2025-12-31	Extension of Delhi Metro
2	Mumbai Coastal Road	Mumbai	Maharashtra	12000000000	7200000000	Infrastructure	In Progress	2021-06-10	2024-10-30	8-lane coastal road
3	Bangalore Water Project	Bangalore	Karnataka	950000000	570000000	Water	In Progress	2022-01-20	2024-08-15	Water pipeline network
`
