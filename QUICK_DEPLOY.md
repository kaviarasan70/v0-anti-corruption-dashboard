# Quick Deployment Guide

## 60-Second Deployment

### Step 1: Set Environment Variables (Vercel Dashboard)
```
NEXT_PUBLIC_SUPABASE_URL = your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY = your_key
SUPABASE_SERVICE_ROLE_KEY = your_key
POSTGRES_URL = postgres://...
POSTGRES_PRISMA_URL = postgres://...
(+ 11 more Postgres variables)
```

### Step 2: Deploy
```bash
vercel deploy --prod
```

### Step 3: Initialize Database (if needed)
Run in Supabase SQL Editor:
```sql
CREATE TABLE IF NOT EXISTS public.reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT,
  photo_url TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit reports"
  ON public.reports FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view reports"
  ON public.reports FOR SELECT USING (true);
```

## Features Ready

✓ Financial Dashboard - 12 projects
✓ Grievance Map - 15 reports with dual views
✓ Report Form - Submits to database
✓ Google Maps - Embedded without API key
✓ Canvas Map - Works perfectly
✓ Mobile Responsive
✓ Full Error Handling
✓ Security Policies

## What's Included

- Supabase PostgreSQL integration
- Google Maps embedded
- Interactive canvas map
- Form validation
- Success/error messages
- Image upload support
- Search functionality

## Optional Enhancements (Not Required)

To enable Google Places autocomplete:
- Add `GOOGLE_MAPS_API_KEY` to environment

To sync with Google Sheets:
- Add `GOOGLE_SHEETS_API_KEY` and `GRIEVANCES_SPREADSHEET_ID`

## Testing

After deployment:
1. Visit your URL
2. See 12 financial projects
3. Click "Canvas Map" / "Google Maps"
4. Submit a test report
5. See success message

## Troubleshooting

| Issue | Fix |
|-------|-----|
| App won't load | Check env variables |
| Reports not saving | Run SQL migration |
| Maps not showing | Canvas works default, optional: add API key |
| Search not working | Verify data loading |

## Quick Links

- Dashboard: https://vercel.com
- Supabase: https://supabase.com
- Docs: See `DOCUMENTATION.md`
- Full Checklist: See `DEPLOYMENT_CHECKLIST.md`

---

**Estimated Time:** 5-10 minutes
**Difficulty:** Easy
**Status:** Production Ready
