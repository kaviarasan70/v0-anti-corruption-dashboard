# Database Setup

This application uses Supabase to store citizen grievance reports.

## Database Schema

The database has a `reports` table with the following structure:

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| category | TEXT | Issue category (pothole, water, drainage, etc.) |
| location | TEXT | Location of the reported issue |
| description | TEXT | Detailed description of the issue |
| photo_url | TEXT | Photo filename (if uploaded) |
| status | TEXT | Report status (pending, in-progress, resolved) |
| created_at | TIMESTAMP | When the report was created |
| updated_at | TIMESTAMP | When the report was last updated |

## Setup Instructions

### 1. Run Database Migration

The database schema is already defined in `scripts/001_create_reports_table.sql`.

To create the table in your Supabase database:
- The script will automatically run when you execute it from the v0 interface
- Or you can manually execute it in the Supabase SQL editor

### 2. Row Level Security (RLS)

The reports table has RLS enabled with the following policies:

- **Public Submissions**: Anyone can submit reports (INSERT permission)
- **Public Transparency**: Anyone can view reports (SELECT permission)

This design ensures transparency while allowing anonymous reporting.

### 3. Environment Variables

The following environment variables are automatically configured:

- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key (for admin operations)

## API Endpoints

### Submit Report

**POST** `/api/submit-report`

Saves a new report to the database.

**Request Body (FormData):**
- `category` (required): Issue category
- `location` (required): Location of the issue
- `description` (optional): Detailed description
- `photo` (optional): Photo file

**Response:**
```json
{
  "success": true,
  "message": "Report submitted successfully and saved to database!",
  "reportId": "uuid"
}
```

## Querying Reports

To fetch reports from the database:

```typescript
import { createClient } from "@/lib/supabase/client"

const supabase = createClient()
const { data, error } = await supabase
  .from("reports")
  .select("*")
  .order("created_at", { ascending: false })
```

## Future Enhancements

- Add authentication for admin panel
- Implement status updates (pending → in-progress → resolved)
- Add comments/updates on reports
- Implement photo upload to Supabase Storage
- Add email notifications
- Create admin dashboard to manage reports
