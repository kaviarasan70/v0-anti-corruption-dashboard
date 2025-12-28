# Google Tools Integration Setup

This dashboard uses multiple Google services for a complete backend solution.

## 1. Google Maps Setup

### Get API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API
4. Go to "Credentials" and create an API key
5. **Important Security**: Restrict the API key:
   - Application restrictions: HTTP referrers
   - Add your domain (e.g., `*.yourdomain.com/*`, `*.v0.app/*`)
   - API restrictions: Select only "Maps JavaScript API" and "Places API"

### Add to v0
1. In v0, go to the **Vars** section in the sidebar
2. Add: `GOOGLE_MAPS_API_KEY` (without NEXT_PUBLIC_ prefix)

**Security Note**: The API key is served securely from the server through an API route and never exposed to the client code.

## 2. Google Sheets Setup

### For Project Data (Financial Transparency)
1. Create a spreadsheet named "Indian Citizen Projects"
2. Add these columns in the first row:
   - ID | Project Name | Category | City | State | Budget | Used | Status | Verified

Example data:
```
1 | Metro Line Extension | Infrastructure | Delhi | Delhi | 50000000000 | 32500000000 | active | true
2 | Smart City Initiative | Technology | Mumbai | Maharashtra | 30000000000 | 18000000000 | active | true
```

3. Share the spreadsheet with "Anyone with the link can view"
4. Copy the Spreadsheet ID from the URL (the long string between /d/ and /edit)

### For Grievance Reports
1. Create another spreadsheet named "Citizen Grievances"
2. Add these columns:
   - Timestamp | Category | Location | Description | Photo | Status

3. Share with "Anyone with the link can edit" (for API to write)
4. Copy this Spreadsheet ID

### Add to v0
1. Go to **Vars** section in v0 sidebar
2. Add these variables (all without NEXT_PUBLIC_ prefix - they are server-side only):
   - `GOOGLE_SHEETS_API_KEY` (use the same API key from Maps, or create a separate one)
   - `SPREADSHEET_ID` (Projects spreadsheet ID)
   - `GRIEVANCES_SPREADSHEET_ID` (Grievances spreadsheet ID)

## 3. Security Notes

- **Google Maps API Key**: Served securely from server-side API route (`/api/load-maps`)
- **Google Sheets API Key**: Server-side only, used in Server Actions
- All sensitive keys are kept on the server and never exposed to client code
- Set proper API restrictions in Google Cloud Console for additional security

## 4. Data Flow

- **Financial Projects**: Fetched from Google Sheets via Server Action
- **Grievance Map**: Displayed on Google Maps with real coordinates
- **Report Form**: Uses Google Places Autocomplete and submits to Google Sheets via API route
- **Search**: Filters projects client-side from fetched data

## Testing

After setting up:
1. Add `GOOGLE_MAPS_API_KEY` to the Vars section in v0 sidebar
2. The map should load with markers showing grievance locations across India
3. The location input should show autocomplete suggestions for Indian locations
4. Form submissions should appear in your Google Sheets spreadsheet
5. Search functionality should filter projects by name, city, state, or category

## Troubleshooting

- If the map doesn't load, check browser console for error messages
- Verify your API key has Maps JavaScript API and Places API enabled
- Ensure the API key is added to the Vars section (without NEXT_PUBLIC_ prefix)
- Check that your spreadsheet sharing permissions are correct
