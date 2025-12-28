# Google Sheets Backend Integration Guide

This guide explains how to securely connect the Indian Citizen Watchdog dashboard to Google Sheets.

## Security First

This integration uses **Server Actions** to keep your API key secure on the server. Your API key is never exposed to the client browser.

## Setup Instructions

### Step 1: Create Your Google Sheet

1. Open Google Sheets and create a new spreadsheet
2. Name it "Indian Citizen Watchdog Projects"
3. Create the following column headers in Row 1:

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| ID | Name | Location | State | Total Budget | Funds Used | Category | Status | Start Date | Expected Completion | Description |

### Step 2: Add Sample Data

Add your project data starting from Row 2. Example:

```
1 | Delhi Metro Phase 4 | Delhi | Delhi | 8500000000 | 5100000000 | Infrastructure | In Progress | 2022-03-15 | 2025-12-31 | Extension of Delhi Metro
```

### Step 3: Make Sheet Publicly Readable

1. Click the "Share" button in the top-right
2. Click "Change to anyone with the link"
3. Set permission to "Viewer"
4. Copy the sharing link

### Step 4: Get Your Spreadsheet ID

From your sheet URL:
```
https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j/edit
```

The Spreadsheet ID is: `1a2b3c4d5e6f7g8h9i0j`

### Step 5: Enable Google Sheets API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable "Google Sheets API"
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Copy your API key

### Step 6: Add Environment Variables in v0

**Important**: Use the Vars section in the v0 in-chat sidebar to add these variables:

1. Click on "Vars" in the left sidebar
2. Add these environment variables:
   - `GOOGLE_SHEETS_API_KEY` = your_api_key_here (without NEXT_PUBLIC_ prefix)
   - `SPREADSHEET_ID` = your_spreadsheet_id_here

**Note**: Do NOT use the `NEXT_PUBLIC_` prefix. This keeps your API key secure on the server.

### Step 7: Enable the Integration

1. Open `app/actions/fetch-projects.ts`
2. Uncomment the Google Sheets fetching code (lines with /* ... */)
3. Comment out or remove the static data return statement

## Data Format Requirements

### Budget Fields
- Enter budget amounts in Rupees (full numbers)
- Example: For ₹85 Crore, enter `8500000000`

### Date Fields
- Format: `YYYY-MM-DD`
- Example: `2024-03-15`

### Category Options
- Infrastructure
- Roads
- Water
- Healthcare
- Energy
- Education

### Status Options
- Planning
- In Progress
- Completed
- On Hold

## How It Works

1. **Client Request**: User opens the dashboard
2. **Server Action**: `fetchProjectsFromSheets()` runs on the server
3. **Secure Fetch**: Server makes API call to Google Sheets (API key stays on server)
4. **Data Transform**: Server processes and transforms the data
5. **Client Display**: Clean data is sent to the client for display

## Updating Data

Simply edit the Google Sheet and refresh the dashboard. Changes appear within 5 minutes due to caching.

## Security Benefits

- API key never exposed to client browsers
- No client-side environment variables needed
- Server-side caching reduces API calls
- Follows Next.js security best practices

## Troubleshooting

**Issue**: Data not loading
- Solution: Check that environment variables are set in the Vars section (not in code)

**Issue**: "Permission denied" error  
- Solution: Make sure sheet is publicly readable

**Issue**: Old data showing
- Solution: Wait 5 minutes for cache to refresh, or adjust `revalidate` value in the fetch call

## Support

For issues with Google Sheets API, visit:
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Google Cloud Console](https://console.cloud.google.com/)
