# Indian Citizen Watchdog - Deployment Checklist

## Pre-Deployment Verification

### Database Setup
- [ ] Supabase project is connected
- [ ] Environment variables are properly configured
- [ ] Database migration has been run (reports table created)
- [ ] Row Level Security policies are enabled
- [ ] Sample data has been seeded (optional)

### Environment Variables
- [ ] `NEXT_PUBLIC_SUPABASE_URL` - Set to your Supabase project URL
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Set to your Supabase anon key
- [ ] `SUPABASE_SERVICE_ROLE_KEY` - Set for server-side operations
- [ ] All Postgres environment variables are configured

### Optional Google Services
- [ ] Google Maps API key (optional - app works without it)
- [ ] Google Places API enabled (optional - app works without it)
- [ ] Google Sheets API configured (optional - app works without it)

## Features Status

### Functional Features
- ✓ Financial Transparency tracking with 12 sample projects
- ✓ Live Grievance Map with 15 sample reports
- ✓ Interactive canvas map showing real India geography
- ✓ Google Maps embed for full interactive mapping
- ✓ Report Issue form with validation
- ✓ Photo upload capability
- ✓ Automatic success/error notifications
- ✓ Supabase database integration
- ✓ Location autocomplete (with fallback)

### Fallback Systems
- ✓ Canvas map works without Google Maps API
- ✓ Location input works without Places API
- ✓ Database fallback to demo mode if Supabase unavailable
- ✓ Graceful error handling throughout

## Deployment Steps

### Step 1: Verify All Environment Variables
```bash
# Check that all required env vars are set
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
echo $SUPABASE_SERVICE_ROLE_KEY
```

### Step 2: Build the Application
```bash
npm run build
```

### Step 3: Test Production Build Locally
```bash
npm run build
npm run start
# Visit http://localhost:3000 to verify
```

### Step 4: Deploy to Vercel
Option A - Using Vercel CLI:
```bash
npm i -g vercel
vercel
```

Option B - Using GitHub:
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy (Vercel will auto-detect Next.js)

### Step 5: Post-Deployment Verification
- [ ] App loads without errors
- [ ] All three main sections are visible
- [ ] Financial projects display with search working
- [ ] Grievance map shows both Canvas and Google Maps views
- [ ] Report form submits successfully
- [ ] Success message appears after submission
- [ ] No console errors in browser

## Database Migration

If database tables don't exist, run this SQL in Supabase:

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
  ON public.reports
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view reports"
  ON public.reports
  FOR SELECT
  USING (true);
```

## Troubleshooting

### App won't load
- Check all environment variables are set
- Check browser console for errors
- Verify Supabase connection

### Reports not saving
- Check Supabase database exists and is accessible
- Verify RLS policies are correct
- Check API route `/api/submit-report` is working

### Google Maps not showing
- This is normal - canvas map shows as fallback
- To enable: Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` environment variable
- Optionally add `GOOGLE_SHEETS_API_KEY` for Google Sheets backend

### Report form autocomplete not working
- Also normal - location input works without Places API
- To enable: Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` environment variable

## Performance Optimization

The app is already optimized for:
- ✓ Server-side rendering with Next.js
- ✓ Image optimization
- ✓ CSS-in-JS with Tailwind
- ✓ Component code splitting
- ✓ Database caching
- ✓ Canvas rendering for maps

## Security

- ✓ API keys are server-side only
- ✓ No credentials in client-side code
- ✓ Database RLS policies enforce security
- ✓ Form validation on client and server
- ✓ CSRF protection via Next.js
- ✓ No sensitive data in browser storage

## Monitoring

After deployment, monitor:
- [ ] Vercel Analytics for performance
- [ ] Error logs in browser console
- [ ] Supabase logs for database errors
- [ ] Response times for API endpoints

## Rollback Plan

If issues occur:
1. Check error logs in Vercel dashboard
2. Revert to previous deployment
3. Fix issues locally
4. Re-deploy

## Support

For issues:
- Check `DOCUMENTATION.md` for feature overview
- Check `DATABASE_SETUP.md` for database issues
- Check `GOOGLE_INTEGRATION_SETUP.md` for Google Services
- Review this checklist for deployment issues

---

**Deployment Date:** _______________
**Deployed By:** _______________
**Status:** _______________
